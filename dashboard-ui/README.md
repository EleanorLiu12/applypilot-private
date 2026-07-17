# ApplyPilot Dashboard UI

Interactive React + TypeScript dashboard for the private ApplyPilot job-search data.

The UI uses GitHub Primer-style light and dark color tokens.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run sync-data` reads `../dashboard/*.csv` and regenerates `src/data/dashboardData.ts`.

## GitHub Pages

The workflow in `.github/workflows/dashboard-pages.yml` builds this app and deploys `dashboard-ui/dist`.

Use GitHub Pages only if private Pages access is available for this private repository. On free GitHub plans, keep the repository private and run the dashboard locally instead of publishing personal job-search data.
