# Application Rules

## Mode

Selected mode: Volume.

Use stable resume variants and move quickly on good matches. Promote a specific high-fit or high-value role to Precision only when tailoring is worth the extra work.

## First Trial Boundary

Selected first trial boundary: Lead finding only.

For the first trial, find, screen, classify, and update the dashboard. Do not open application flows, click Apply, or submit applications.

Do not move beyond lead finding until these are complete in `candidate_profile.json` and `resume_routing.md`:

- Target role families.
- Location and remote/hybrid/onsite preference.
- Work authorization and sponsorship facts.
- Resume file path and selected role family.
- Intended job boards/accounts.
- Must-skip rules.

## Prioritize

Apply quickly when a job matches:

- Role families: Software Engineering and AI Engineering.
- Titles: Software Development Engineer, Software Engineer, AI Engineer, ML Engineer, Machine Learning Engineer, Applied AI Engineer, AI/ML Software Engineer, LLM Engineer, Agentic AI Engineer, and closely related new-grad technical engineering titles.
- Level: new grad, entry-level, level I, university graduate, new college grad, or junior only.
- Graduation window: target postings that accept graduation dates from December 2026 through May 2027. If no graduation-window requirement is listed, do not skip solely for missing graduation wording.
- Freshness: posted in the last 24 hours first, then 48 hours if needed.
- Locations: Tier 1 first: California tech hubs, Seattle/Bellevue/Redmond, New York City, Boston/Cambridge, Chicago, Minneapolis/St. Paul, Austin, and Dallas. Then Tier 2 preferred tech hubs including Texas statewide, then Tier 3 locations from the Location Policy section.
- Remote/hybrid/onsite: accept all.
- Company types: TBD.
- Industries: TBD.
- Compensation: at least 120,000 USD per year when salary is explicitly listed.
- Work authorization: must support US work authorization under F-1 OPT/STEM OPT and future employer sponsorship.
- Form length: low-friction forms in Volume mode.

## Consider

Review before applying when:

- The role is a stretch but close to the candidate story.
- Location, relocation, compensation, or seniority is ambiguous.
- Company fit is uncertain.
- The resume variant is uncertain.
- The application has more than one custom question.
- The role appears high value but requires Workday, Oracle, a long form, or a custom cover letter.

## Skip

Default skip when:

- Do not include postings from companies named only "Stealth Startup" in future searches.
- The title, role family, or level violates the user's must-skip rules.
- The role title is Forward Deployed Engineer or Forward Deploy Engineer.
- The job title explicitly says "C++".
- The job title includes "PhD" or the posting explicitly targets/requires PhD candidates.
- The role is Product Manager, Associate Product Manager, or any Product Management role.
- The title or level indicates SDE II, Software Engineer II, Software Development Engineer II, level 2, mid-level, senior, staff, principal, lead, manager, architect, or other non-new-grad seniority.
- The posting explicitly requires a graduation date outside December 2026 through May 2027.
- The company is Amazon, Visa, CGI, BeaconFire, Hired, Cerebras Systems, Cerebras, or listed only as Stealth Startup.
- The required years of experience are clearly too high for the target level.
- The posting conflicts with confirmed work authorization or sponsorship constraints.
- The posting says the employer cannot sponsor now or in the future, does not accept OPT/STEM OPT, or requires permanent unrestricted US work authorization.
- The posting requires US citizenship, US person status, green card, permanent residency, or other citizenship-based eligibility the candidate does not have.
- The role is in space, aerospace, aircraft, defense, military, or security-clearance-related work.
- The role requires US security clearance.
- The location conflicts with confirmed location or relocation policy.
- The explicitly listed annual base salary is below 120,000 USD.
- The role is part-time, unpaid, contract, agency, internship, or commission-only unless explicitly allowed.
- The form requires video, extensive writing samples, references, or unsupported materials for a weak-fit role.
- The job is a duplicate, already applied, closed, or stale without exceptional fit.

## Hand Off to User

Stop and ask the user when:

- Legal, identity, work authorization, sponsorship, or compensation wording is unclear.
- A form requires an exact graduation month or date instead of accepting the confirmed December 2026 through May 2027 window.
- A posting's sponsorship, authorization, relocation, or compensation requirement conflicts with a `TBD` profile field.
- A form asks only whether sponsorship is required "now" and does not also ask about future sponsorship.
- A compensation field requires a number or range and does not allow deferral.
- CAPTCHA, hCaptcha, reCAPTCHA, Cloudflare, login, password, 2FA, account switching, anti-bot, payment, or permission prompts appear.
- Resume upload cannot be verified.
- Portfolio, video, writing sample, references, custom materials, or assessment materials are required.
- The final submission is ready for review.

## Default Form Behavior

- Fill clear basic fields only when Candidate Profile has explicit values.
- Fill work authorization, sponsorship, and compensation only when the form wording closely matches confirmed profile facts or confirmed answer-bank wording.
- Ask one focused question when high-impact wording differs.
- Leave voluntary self-ID blank, decline, skip, or choose "Prefer not to say" when available unless exact user-approved answers exist.
- Draft custom answers from Answer Bank patterns and ask the user to confirm the first time a pattern is used.
- Always stop before final submit with a short summary of company, role, resume, high-impact answers, and custom answers.

## Low-Friction Application Criteria

Good Volume-mode candidates:

- No new account creation.
- No mandatory Workday or Oracle flow unless the fit is strong.
- No video, long writing sample, or mandatory portfolio.
- At most one custom question.
- Clear resume upload and confirmation path.
- Public posting is fresh and still open.

## Status Classification

- `Pending`: worth later review or application, with no known high-impact blocker.
- `Needs user`: missing user-owned fact or action blocks the decision, such as sponsorship, work authorization, compensation, relocation, login, CAPTCHA, upload, or sensitive answer.
- `Skipped`: does not match rules or is not worth applying.
- `Blocked`: attempted workflow could not safely proceed.
- `Submitted`: explicit confirmation evidence was observed.

## Freshness Policy

- Search jobs posted in the last 24 hours first.
- Expand to 48 hours if needed.
- Use older postings only when fit is unusually strong.

## Location Policy

Target preferred locations in this order:

- Tier 1: California: San Francisco Bay Area, San Jose, Palo Alto, Mountain View, Sunnyvale, Los Angeles, Irvine/Orange County, San Diego.
- Tier 1: Washington: Seattle, Bellevue, Redmond.
- Tier 1: New York: New York City.
- Tier 1: Massachusetts: Boston, Cambridge.
- Tier 1: Illinois: Chicago.
- Tier 1: Minnesota: Minneapolis, St. Paul.
- Tier 1: Texas: Austin, Dallas.
- Tier 2: Colorado: Denver, Boulder.
- Tier 2: New Jersey: Jersey City, Hoboken, Newark.
- Tier 2: Virginia: Arlington, Alexandria, Northern Virginia.
- Tier 2: Maryland: Bethesda, Rockville, Baltimore.
- Tier 2: Oregon: Portland.
- Tier 2: Texas statewide: Fort Worth, Plano, Irving, Houston, San Antonio, Round Rock, Frisco, and other Texas locations.
- Tier 3: Connecticut: Stamford, New Haven, Hartford.
- Tier 3: Rhode Island: Providence.
- Tier 3: Delaware: Wilmington.
- Tier 3: New Mexico: Albuquerque, Santa Fe.
- Tier 3: Hawaii: Honolulu.
- Tier 3: Vermont: Burlington.
- Tier 3: New Hampshire: Manchester, Nashua.
- Tier 3: Maine: Portland.

Remote, hybrid, and onsite roles are all acceptable when they match the preferred location policy and are compatible with the user's work authorization and location constraints. Texas is acceptable statewide. Ask before treating any other non-listed state as acceptable.

## Account Policy

Use these accounts only:

- LinkedIn: LinkedIn Jobs and LinkedIn Premium personal search.
- Email: TBD.
- Job boards: LinkedIn Jobs, LinkedIn Premium personal search, Simplify Jobs, Wellfound, Y Combinator Work at a Startup, Otta / Welcome to the Jungle, Built In, Google Jobs, Indeed, Handshake.
- Direct ATS sources: Greenhouse, Lever, public Ashby hosted job boards/posting pages, and Workday for high-fit roles only.
- Company pages: new grad / university / early career pages for target companies, AI startup career pages, and mid-size tech company career pages.

If a different account appears, stop and ask.

## Source Policy

For lead finding, use all listed sources to find and classify leads, including public Ashby hosted job boards and Ashby posting pages when available. Do not open real application flows, click Apply, create accounts, log in, or submit applications. For LinkedIn Premium personal search, use only an already-authenticated user session or user-provided/exported lead data; stop for login, 2FA, CAPTCHA, account switching, or any prompt requiring user action. For account-heavy or slower sources such as Workday and Handshake, collect public leads only unless the user confirms access and later approves application-flow use.
