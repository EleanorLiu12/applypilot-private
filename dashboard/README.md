# ApplyPilot Dashboard

These CSV files are the workflow memory. They can be edited directly or imported into Excel, Google Sheets, Airtable, or Notion.

## Sheets

- `daily_dashboard.csv`: daily totals, sources, summary, and user actions needed.
- `job_pool.csv`: all found jobs, prioritization, current status, selected resume, and next action.
- `application_log.csv`: audit trail for real application attempts only.
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
