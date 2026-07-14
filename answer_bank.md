# Answer Bank

Use truthful reusable answers. Candidate Profile stores facts; Answer Bank stores wording.

Current status: draft only. Do not auto-fill high-impact answers until the profile has explicit facts and the user has confirmed the wording.

## Default Handling

- Basic profile facts can be reused automatically only when `candidate_profile.json` has clear values.
- Work authorization, sponsorship, compensation, voluntary self-ID, legal, identity, background check, non-compete, reference, and employment-history answers require confirmed facts.
- Voluntary self-ID defaults to blank, decline, skip, or "Prefer not to say" when the form allows it.
- Custom questions may be drafted from the profile and this answer bank, but the first use of a pattern requires user confirmation.
- Stop if an answer would introduce a new claim, unsupported metric, legal or visa fact, salary fact, portfolio/work sample, video, or company-specific technical claim.

## Work Authorization

Default answer: "Yes, I am authorized to work in the United States under F-1 OPT/STEM OPT."

When to ask: Ask if the form wording differs from basic US work authorization, asks for immigration document details, asks for expiration dates, or asks for legal status beyond work authorization.

## Sponsorship

Default answer: If the form asks "will you now or in the future require employer visa sponsorship?", answer "Yes."

When to ask: Ask if the form asks only whether sponsorship is required "now", asks for visa category details beyond F-1/OPT/STEM OPT, or presents wording that differs from "now or in the future."

## Location

Default answer: TBD.

Relocation answer: TBD.

Remote/hybrid/onsite answer: "I am open to remote, hybrid, and onsite roles." Ask before reuse if a form asks for relocation, commute, or office-specific commitments.

## Compensation

Default range: At least 120,000 USD per year.

Deferral wording: "I am flexible depending on scope and total package, with a target base salary of at least $120,000 per year." Ask before first use in an actual application form.

When to ask: Ask before entering required salary fields, especially if the form requires a specific number, a range, salary history, or compensation outside the stored minimum.

## Start Date

Default answer: TBD.

## Why This Company

Reusable pattern: Draft a concise answer from public company context, the role description, and confirmed candidate facts. Ask before first reuse.

## Why This Role

Reusable pattern: Draft a concise answer that connects confirmed experience, target role family, and the job's core responsibilities. Ask before first reuse.

## Portfolio / Work Samples

Default links: TBD.

When to ask: Ask before using any portfolio, writing sample, presentation, code sample, or case study.

## Voluntary Self-ID

Strategy:

- Default: Prefer not to say / decline / leave blank when available.
- Use stored answers: no.
- Ask each time: only if the form requires an answer and no non-disclosure option is available.

User-provided answers, if any: none.

## Custom Questions

| Question pattern | Reusable answer or pattern | When to customize |
|---|---|---|
| Why this company? | Draft from company context and confirmed candidate facts. | Always customize before first use. |
| Why this role? | Draft from role responsibilities and confirmed candidate facts. | Always customize before first use. |
| Anything else we should know? | TBD. | Ask before first use. |
