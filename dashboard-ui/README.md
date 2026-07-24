# ApplyPilot Dashboard UI

Interactive React + TypeScript dashboard for the private ApplyPilot job-search data.

The UI uses GitHub Primer-style light and dark color tokens.

## Commands

```bash
npm install
npm run dev
npm run build
npm run check
npm run preview
```

`npm run sync-data` reads `../dashboard/*.csv` and regenerates `src/data/dashboardData.ts`.
`npm run check` builds the UI and verifies that the local Archive write-back endpoint is attached. Run it after UI changes that affect dashboard behavior or Vite server wiring.

## GitHub Pages

The workflow in `.github/workflows/dashboard-pages.yml` builds this app and deploys `dashboard-ui/dist`.

Use GitHub Pages only if private Pages access is available for this private repository. On free GitHub plans, keep the repository private and run the dashboard locally instead of publishing personal job-search data.


## Archive write-back

Run the dashboard with `npm run dev` when you want Archive button changes to persist. The local Vite server exposes a write-back endpoint that updates `../dashboard/applied_archive.csv`, updates the matching `archived` flag in `../dashboard/job_pool.csv`, and regenerates `src/data/dashboardData.ts`.

A purely static page, including GitHub Pages or opening `dist/index.html` directly, cannot write to local CSV files. In that mode the Archive button will show a write-back error instead of silently saving only in browser storage.
