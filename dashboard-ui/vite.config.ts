import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { defineConfig } from 'vite';
import type { Connect, Plugin, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = __dirname;
const repoRoot = path.resolve(appRoot, '..');
const archiveFields = ['archived_at', 'company', 'job_title', 'job_url', 'applied_at', 'source', 'archive_reason', 'notes'];

type CsvRecord = Record<string, string>;

type CsvData = {
  headers: string[];
  records: CsvRecord[];
};

type ArchiveJobPayload = {
  company?: unknown;
  job_title?: unknown;
  job_url?: unknown;
  source?: unknown;
};

function parseCsv(text: string): CsvData {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') {
        i += 1;
      }
      row.push(field);
      if (row.some((value) => value.length > 0)) {
        rows.push(row);
      }
      row = [];
      field = '';
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((value) => value.length > 0)) {
      rows.push(row);
    }
  }

  if (rows.length === 0) {
    return { headers: [], records: [] };
  }

  const headers = rows[0];
  const records = rows.slice(1).map((values) => {
    const record: CsvRecord = {};
    headers.forEach((header, index) => {
      record[header] = values[index] ?? '';
    });
    return record;
  });

  return { headers, records };
}

function stringifyCsv(headers: string[], records: CsvRecord[]) {
  const escapeField = (value: string | undefined) => {
    const text = String(value ?? '');
    return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };

  return [
    headers.map(escapeField).join(','),
    ...records.map((record) => headers.map((header) => escapeField(record[header])).join(',')),
  ].join('\n') + '\n';
}

function normalizeUrl(url = '') {
  return url.split('?')[0].replace(/\/$/, '');
}

function csvJobKey(record: CsvRecord) {
  return normalizeUrl(record.job_url) || `${record.company.toLowerCase()}::${record.job_title.toLowerCase()}`;
}

function toCsvJob(value: ArchiveJobPayload): CsvRecord {
  return {
    company: String(value.company ?? ''),
    job_title: String(value.job_title ?? ''),
    job_url: String(value.job_url ?? ''),
    source: String(value.source ?? ''),
  };
}

function parseJobsPayload(body: Record<string, unknown>) {
  const rawJobs = Array.isArray(body.jobs) ? body.jobs : body.job ? [body.job] : [];
  const jobs = rawJobs
    .filter((job): job is ArchiveJobPayload => Boolean(job) && typeof job === 'object')
    .map(toCsvJob)
    .filter((job) => job.company && job.job_title && job.job_url);

  if (jobs.length === 0) {
    throw new Error('Missing job payload');
  }

  return jobs;
}

async function updateJobPoolArchiveFlags(jobs: CsvRecord[], archived: boolean) {
  const jobPoolPath = path.join(repoRoot, 'dashboard', 'job_pool.csv');
  const parsed = parseCsv(await readFile(jobPoolPath, 'utf8'));
  const headers = parsed.headers.includes('archived') ? parsed.headers : [...parsed.headers, 'archived'];
  const targetKeys = new Set(jobs.map(csvJobKey));
  let matched = 0;

  const records = parsed.records.map((record) => {
    const next = { ...record };
    if (targetKeys.has(csvJobKey(record))) {
      next.archived = archived ? 'true' : '';
      matched += 1;
    } else if (!Object.prototype.hasOwnProperty.call(next, 'archived')) {
      next.archived = '';
    }
    return next;
  });

  await writeFile(jobPoolPath, stringifyCsv(headers, records), 'utf8');
  return matched;
}

async function updateAppliedArchive(jobs: CsvRecord[], archived: boolean) {
  const archivePath = path.join(repoRoot, 'dashboard', 'applied_archive.csv');
  const parsed = parseCsv(await readFile(archivePath, 'utf8'));
  const headers = parsed.headers.length > 0 ? parsed.headers : archiveFields;
  const targetKeys = new Set(jobs.map(csvJobKey));
  let records = parsed.records.filter((entry) => !targetKeys.has(csvJobKey(entry)));

  if (archived) {
    records = [
      ...records,
      ...jobs.map((job) => ({
        archived_at: new Date().toISOString(),
        company: job.company,
        job_title: job.job_title,
        job_url: job.job_url,
        applied_at: '',
        source: job.source,
        archive_reason: 'Archived from dashboard',
        notes: 'Manual dashboard archive write-back.',
      })),
    ];
  }

  await writeFile(archivePath, stringifyCsv(headers, records), 'utf8');
  return records.length;
}

async function syncDashboardData() {
  await execFileAsync(process.execPath, [path.join(appRoot, 'scripts', 'sync-data.mjs')], { cwd: appRoot });
}

function sendJson(res: import('node:http').ServerResponse, statusCode: number, payload: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function readJsonBody(req: import('node:http').IncomingMessage) {
  return new Promise<Record<string, unknown>>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) as Record<string, unknown> : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function attachArchiveMiddleware(middlewares: Connect.Server) {
  middlewares.use('/api/archive-job', async (req, res) => {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' });
      return;
    }

    try {
      const body = await readJsonBody(req);
      const jobs = parseJobsPayload(body);
      const archived = body.archived === true;
      const jobPoolMatches = await updateJobPoolArchiveFlags(jobs, archived);
      const archivedCount = await updateAppliedArchive(jobs, archived);
      await syncDashboardData();
      sendJson(res, 200, { archived, updatedJobs: jobs.length, jobPoolMatches, archivedCount });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Archive write-back failed';
      sendJson(res, 500, { error: message });
    }
  });
}

function archiveWritebackPlugin(): Plugin {
  return {
    name: 'applypilot-archive-writeback',
    configureServer(server: ViteDevServer) {
      attachArchiveMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachArchiveMiddleware(server.middlewares);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), archiveWritebackPlugin()],
});
