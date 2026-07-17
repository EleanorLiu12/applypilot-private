import {
  ArrowDownUp,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Filter,
  Moon,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { dashboardData } from './data/dashboardData';
import type { ApplicationLogEntry, Filters, JobLead, SortKey } from './types';

const jobs = dashboardData.jobPool as unknown as JobLead[];
const applications = dashboardData.applicationLog as unknown as ApplicationLogEntry[];
const appliedOverrideStorageKey = 'applypilot-applied-overrides';
const runSearchWorkflowUrl = 'https://github.com/EleanorLiu12/applypilot-private/actions';

type AppliedOverrides = Record<string, boolean>;

const emptyFilters: Filters = {
  search: '',
  status: 'Pending',
  priority: 'All',
  roleFamily: 'All',
  level: 'All',
  source: 'All',
  location: 'All',
  remotePolicy: 'All',
  applied: 'Not applied',
  dateFrom: '',
  dateTo: '',
};

const priorityRank: Record<string, number> = { High: 0, Medium: 1, Low: 2 };
const statusRank: Record<string, number> = { Pending: 0, 'Needs user': 1, Blocked: 2, Submitted: 3, Skipped: 4 };

function normalizeUrl(url: string) {
  return url.split('?')[0].replace(/\/$/, '');
}

function compactLocation(location: string) {
  return location.replaceAll('Remote in USA', 'Remote USA').replaceAll('San Francisco', 'SF').replaceAll('Mountain View', 'Mt View');
}

function jobKey(job: JobLead) {
  return normalizeUrl(job.job_url) || `${job.company.toLowerCase()}::${job.job_title.toLowerCase()}`;
}

function readAppliedOverrides(): AppliedOverrides {
  try {
    const parsed = JSON.parse(localStorage.getItem(appliedOverrideStorageKey) ?? '{}');
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as AppliedOverrides : {};
  } catch {
    return {};
  }
}

function isApplied(job: JobLead, appliedOverrides: AppliedOverrides = {}) {
  if (job.status === 'Submitted') return true;
  const manualValue = appliedOverrides[jobKey(job)];
  if (typeof manualValue === 'boolean') return manualValue;
  const jobUrl = normalizeUrl(job.job_url);
  return applications.some((entry) => {
    if (!entry.job_url && !entry.company && !entry.job_title) return false;
    const sameUrl = entry.job_url && normalizeUrl(entry.job_url) === jobUrl;
    const sameJob = entry.company.toLowerCase() === job.company.toLowerCase() && entry.job_title.toLowerCase() === job.job_title.toLowerCase();
    return (sameUrl || sameJob) && entry.status.toLowerCase().includes('submit');
  });
}

function dateValue(value: string) {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function uniq(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function matchesSearch(job: JobLead, search: string) {
  if (!search.trim()) return true;
  const haystack = [job.company, job.job_title, job.role_family, job.level, job.location, job.source, job.status, job.priority, job.notes, job.skip_reason]
    .join(' ')
    .toLowerCase();
  return search
    .toLowerCase()
    .split(/\s+/)
    .every((token) => haystack.includes(token));
}

function jobMatches(job: JobLead, filters: Filters, appliedOverrides: AppliedOverrides, omit?: keyof Filters) {
  if (omit !== 'search' && !matchesSearch(job, filters.search)) return false;
  if (omit !== 'status' && filters.status !== 'All' && job.status !== filters.status) return false;
  if (omit !== 'priority' && filters.priority !== 'All' && job.priority !== filters.priority) return false;
  if (omit !== 'roleFamily' && filters.roleFamily !== 'All' && job.role_family !== filters.roleFamily) return false;
  if (omit !== 'level' && filters.level !== 'All' && job.level !== filters.level) return false;
  if (omit !== 'source' && filters.source !== 'All' && job.source !== filters.source) return false;
  if (omit !== 'location' && filters.location !== 'All' && job.location !== filters.location) return false;
  if (omit !== 'remotePolicy' && filters.remotePolicy !== 'All' && job.remote_policy !== filters.remotePolicy) return false;
  if (omit !== 'applied') {
    const applied = isApplied(job, appliedOverrides);
    if (filters.applied === 'Applied' && !applied) return false;
    if (filters.applied === 'Not applied' && applied) return false;
  }
  if (omit !== 'dateFrom' && filters.dateFrom && job.posted_date < filters.dateFrom) return false;
  if (omit !== 'dateTo' && filters.dateTo && job.posted_date > filters.dateTo) return false;
  return true;
}

function getOptions(key: keyof Filters, filters: Filters, appliedOverrides: AppliedOverrides) {
  const base = jobs.filter((job) => jobMatches(job, filters, appliedOverrides, key));
  if (key === 'status') return ['All', ...uniq(base.map((job) => job.status))];
  if (key === 'priority') return ['All', ...uniq(base.map((job) => job.priority))];
  if (key === 'roleFamily') return ['All', ...uniq(base.map((job) => job.role_family))];
  if (key === 'level') return ['All', ...uniq(base.map((job) => job.level))];
  if (key === 'source') return ['All', ...uniq(base.map((job) => job.source))];
  if (key === 'location') return ['All', ...uniq(base.map((job) => job.location))];
  if (key === 'remotePolicy') return ['All', ...uniq(base.map((job) => job.remote_policy))];
  if (key === 'applied') return ['All', 'Applied', 'Not applied'];
  return [];
}

function formatCount(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

function SelectControl({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function JobCard({ job, applied, onAppliedChange }: { job: JobLead; applied: boolean; onAppliedChange: (applied: boolean) => void }) {
  const appliedLocked = job.status === 'Submitted';
  return (
    <article className={`job-card status-${job.status.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="job-main">
        <div>
          <div className="job-eyebrow">
            <span className={`priority priority-${job.priority.toLowerCase()}`}>{job.priority || 'Unranked'}</span>
            <span>{job.status}</span>
            <button
              className={`chip-button applied-toggle${applied ? ' is-applied' : ''}`}
              type="button"
              aria-pressed={applied}
              disabled={appliedLocked}
              onClick={() => onAppliedChange(!applied)}
              title={appliedLocked ? 'Submitted jobs are marked from the application log' : 'Toggle applied status'}
            >
              {applied ? 'Applied' : 'Not applied'}
            </button>
          </div>
          <h3>{job.job_title}</h3>
          <p>{job.company}</p>
        </div>
        <a className="icon-link" href={job.job_url} target="_blank" rel="noreferrer" aria-label={`Open ${job.company} job`}><ExternalLink size={18} /></a>
      </div>
      <div className="job-meta">
        <span>{compactLocation(job.location)}</span>
        <span>{job.role_family}</span>
        <span>{job.level}</span>
        <span>{job.remote_policy}</span>
        <span>Posted {job.posted_date || 'unknown'}</span>
      </div>
      {(job.notes || job.skip_reason || job.blocker) && <p className="job-note">{job.skip_reason || job.blocker || job.notes}</p>}
      <div className="job-footer"><span>{job.source}</span><span>{job.next_action || 'Review'}</span></div>
    </article>
  );
}

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('applypilot-theme') === 'dark' ? 'dark' : 'light'));
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [appliedOverrides, setAppliedOverrides] = useState<AppliedOverrides>(readAppliedOverrides);
  const [sortKey, setSortKey] = useState<SortKey>('date_found');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('applypilot-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(appliedOverrideStorageKey, JSON.stringify(appliedOverrides));
  }, [appliedOverrides]);

  const filteredJobs = useMemo(() => {
    const result = jobs.filter((job) => jobMatches(job, filters, appliedOverrides));
    return [...result].sort((a, b) => {
      if (sortKey === 'priority') return (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9) || b.date_found.localeCompare(a.date_found);
      if (sortKey === 'status') return (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9) || (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9);
      if (sortKey === 'company') return a.company.localeCompare(b.company);
      return dateValue(b[sortKey]) - dateValue(a[sortKey]) || (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9);
    });
  }, [appliedOverrides, filters, sortKey]);

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => setFilters((current) => ({ ...current, [key]: value }));
  const setJobApplied = (job: JobLead, applied: boolean) => setAppliedOverrides((current) => ({ ...current, [jobKey(job)]: applied }));

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <div className="brand-row"><BriefcaseBusiness size={22} /><span>ApplyPilot</span></div>
          <h1>Job Search Dashboard</h1>
        </div>
        <div className="top-actions">
          <a className="ghost-button" href={runSearchWorkflowUrl} target="_blank" rel="noreferrer"><Search size={16} />Run Search</a>
          <button className="ghost-button" onClick={() => setFilters(emptyFilters)}><X size={16} />Reset</button>
          <button className="ghost-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}{theme === 'dark' ? 'GitHub Light' : 'GitHub Dark'}</button>
        </div>
      </header>

      <main>
        <section className="content-grid">
          <div className="jobs-panel">
            <div className="section-heading"><div><h2>Selected Jobs</h2><p>{formatCount(filteredJobs.length)} rows match the current filters.</p></div><SlidersHorizontal size={20} /></div>
            <div className="job-list">
              {filteredJobs.length > 0 ? filteredJobs.map((job) => <JobCard key={`${job.company}-${job.job_title}-${job.job_url}`} job={job} applied={isApplied(job, appliedOverrides)} onAppliedChange={(applied) => setJobApplied(job, applied)} />) : <div className="empty-state"><ShieldAlert size={28} /><h3>No jobs match these filters</h3><p>Loosen one filter or reset to the default pending, not-applied view.</p></div>}
            </div>
          </div>
          <aside className="right-stack">
          <section className="filters-panel">
          <div className="panel-title"><div><h2>Filters</h2></div><Filter size={20} /></div>
          <div className="search-row">
          <label className="search-field"><Search size={18} /><input value={filters.search} onChange={(event) => updateFilter('search', event.target.value)} placeholder="Search company, title, notes, source" /></label>
          <label className="sort-field"><ArrowDownUp size={18} /><select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}><option value="date_found">Sort by found date</option><option value="posted_date">Sort by posted date</option><option value="priority">Sort by priority</option><option value="status">Sort by status</option><option value="company">Sort by company</option></select></label>
          </div>
          <div className="filter-grid">
          <SelectControl label="Applied" value={filters.applied} options={getOptions('applied', filters, appliedOverrides)} onChange={(value) => updateFilter('applied', value)} />
          <SelectControl label="Priority" value={filters.priority} options={getOptions('priority', filters, appliedOverrides)} onChange={(value) => updateFilter('priority', value)} />
          <SelectControl label="Role" value={filters.roleFamily} options={getOptions('roleFamily', filters, appliedOverrides)} onChange={(value) => updateFilter('roleFamily', value)} />
          <SelectControl label="Level" value={filters.level} options={getOptions('level', filters, appliedOverrides)} onChange={(value) => updateFilter('level', value)} />
          <SelectControl label="Source" value={filters.source} options={getOptions('source', filters, appliedOverrides)} onChange={(value) => updateFilter('source', value)} />
          <SelectControl label="Location" value={filters.location} options={getOptions('location', filters, appliedOverrides)} onChange={(value) => updateFilter('location', value)} />
          <label className="field"><span>Posted From</span><input type="date" value={filters.dateFrom} onChange={(event) => updateFilter('dateFrom', event.target.value)} /></label>
          <label className="field"><span>Posted To</span><input type="date" value={filters.dateTo} onChange={(event) => updateFilter('dateTo', event.target.value)} /></label>
          </div>
          </section>
          </aside>
        </section>
      </main>
      <footer><span><CalendarDays size={16} />Data generated {new Date(dashboardData.generatedAt).toLocaleString()}</span><span><CheckCircle2 size={16} />Application log rows: {applications.length}</span></footer>
    </div>
  );
}
