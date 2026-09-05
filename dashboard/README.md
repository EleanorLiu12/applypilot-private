# ApplyPilot Dashboard

These CSV files are the workflow memory. They can be edited directly or imported into Excel, Google Sheets, Airtable, or Notion.

## Tracks

Two independent pipelines, added 2026-09-05. They share the file layout below but never share rows.

- **US track** — this directory. Governed by `application_rules.md`, screened against the 90,000 USD
  floor, US location tiers, and F-1 OPT / sponsorship rules.
- **China track** — `china/`. Governed by `china_application_rules.md`, screened against the 250,000 RMB
  floor and mainland China location tiers, with work authorization not a screening axis at all
  (中国公民，无需工作许可). Scope is 外企 with China offices; Chinese domestic companies are out of scope.

A posting belongs to exactly one track, decided by its work location. The dashboard UI has a region
switcher in the header, and archive write-backs carry the region so they land in the matching tree.
Counts, daily summaries, and automation rules are kept per track — never add a China row to a US total.

## Sheets

- `daily_dashboard.csv`: daily totals, sources, summary, and user actions needed.
- `job_pool.csv`: all found jobs, prioritization, current status, selected resume, and next action.
- `application_log.csv`: audit trail for real application attempts only.
- `applied_archive.csv`: applied jobs that should stay out of the active lead queue.
- `blocker_queue.csv`: blockers, root cause, retry strategy, and user handoff.
- `follow_up.csv`: recruiter replies, interviews, rejections, and follow-up tasks.
- `resume_rules.csv`: role-to-resume mapping and tailoring threshold.
- `automation_rules.csv`: lessons learned and active rules.

## Counting Rules

- Count only confirmed submissions in `submitted_count`.
- Put every found job in `job_pool.csv` once.
- Put every real application attempt in `application_log.csv`, even if it failed.
- For lead-finding-only trials, leave `application_log.csv` empty.
- Put repeatable failures in `blocker_queue.csv`.
- Convert repeated blockers into `automation_rules.csv`.

## Status Values

- `Submitted`: explicit confirmation evidence was observed.
- `Skipped`: intentionally skipped, with a reason.
- `Blocked`: attempted workflow could not safely proceed.
- `Needs user`: user fact or action is required before deciding or proceeding.
- `Pending`: worth later review or application, with no known high-impact blocker.
