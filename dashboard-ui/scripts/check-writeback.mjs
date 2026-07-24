import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const host = '127.0.0.1';

function getOpenPort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on('error', reject);
    server.listen(0, host, () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : undefined;
      server.close(() => {
        if (port) {
          resolve(port);
        } else {
          reject(new Error('Could not allocate a local port'));
        }
      });
    });
  });
}

async function assertStatus(url, expectedStatus, options) {
  const response = await fetch(url, options);
  if (response.status !== expectedStatus) {
    const body = await response.text();
    throw new Error(`${url} returned ${response.status}, expected ${expectedStatus}. ${body.slice(0, 200)}`);
  }
  return response;
}

const port = await getOpenPort();
const server = await createServer({
  configFile: path.join(appRoot, 'vite.config.ts'),
  root: appRoot,
  logLevel: 'silent',
  server: {
    host,
    port,
    strictPort: true,
  },
});

try {
  await server.listen();
  const baseUrl = `http://${host}:${port}`;

  const page = await assertStatus(`${baseUrl}/`, 200);
  const html = await page.text();
  if (!html.includes('ApplyPilot Dashboard')) {
    throw new Error('Dashboard HTML did not include the expected title.');
  }

  const archiveResponse = await assertStatus(`${baseUrl}/api/archive-job`, 405);
  const payload = await archiveResponse.json();
  if (payload.error !== 'Method not allowed') {
    throw new Error(`Unexpected archive endpoint response: ${JSON.stringify(payload)}`);
  }

  console.log(`Archive write-back endpoint OK at ${baseUrl}/api/archive-job`);
} finally {
  await server.close();
}
