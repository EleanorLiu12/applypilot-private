# ApplyPilot Job Search Workflow

This folder is the local operating system for your job search. It is initialized for a safe first pass: lead finding only, Volume resume routing by default, and no real applications until high-impact facts and resume files are confirmed.

## Files

- `candidate_profile.json`: source of truth for identity, targets, location, work authorization, sponsorship, compensation, resume files, and facts that must never be guessed.
- `application_rules.md`: screening, skip, handoff, status, account, and safety rules.
- `resume_routing.md`: Volume or Precision strategy, resume variants, fit signals, and tailoring rules.
- `answer_bank.md`: reusable wording for common application questions after you confirm it.
- `dashboard/`: CSV dashboard for job leads, attempts, blockers, follow-up, resume routing, and automation lessons.

## Minimum Facts Needed Before First Lead-Finding Trial

Provide or fill these before asking ApplyPilot to find 3-5 jobs:

- Target role families and titles.
- Target locations and remote/hybrid/onsite preference.
- Work authorization country and whether sponsorship is needed now or in the future.
- Resume file paths and which role family each resume should be used for.
- Must-skip rules, such as titles, locations, industries, contract roles, agency roles, or overleveled roles.
- Intended job boards/accounts, such as LinkedIn, company career pages, Simplify, Wellfound, Greenhouse, Lever, or Ashby.

## Current Defaults

- Resume mode: Volume.
- First trial boundary: Lead finding only.
- Freshness policy: jobs from the last 24 hours first, then 48 hours if needed.
- Voluntary self-ID: leave blank, decline, skip, or choose "Prefer not to say" when available unless exact user-approved answers exist.
- Custom answers: draft from the profile and answer bank, then ask once before reuse.

## Hard Stops

ApplyPilot must stop or hand off for CAPTCHA, Cloudflare, login, password, 2FA, account switching, payment prompts, permission prompts, missing materials, unclear legal or identity questions, unclear work authorization or sponsorship questions, unclear compensation questions, portfolio/video/writing-sample requirements, and final submission review.

Only confirmed submissions count. Saved jobs, autofill badges, started applications, or quick-apply labels do not count as submitted.

## First Trial

The first trial should find and classify 3-5 jobs, then update `dashboard/job_pool.csv`, `dashboard/daily_dashboard.csv`, `dashboard/blocker_queue.csv`, and `dashboard/automation_rules.csv` as needed. It should not open application flows, click Apply, or submit anything.
