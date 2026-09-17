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

- Role families: Software Engineering, AI Engineering, and Academic Research Engineering.
- Titles: Software Development Engineer, Software Engineer, AI Engineer, ML Engineer, Machine Learning Engineer, Applied AI Engineer, AI/ML Software Engineer, LLM Engineer, Agentic AI Engineer, and closely related new-grad technical engineering titles. Academic titles are listed separately in the Academic Research Engineering section and are screened by job description, not by title.
- Level: new grad, entry-level, level I, university graduate, new college grad, or junior only. Academic Research Engineering roles are exempt from this line; they are screened on degree and stated qualifications instead.
- Degree: the candidate completes a Bachelor's degree. Confirmed by the user on 2026-09-06, closing a question that had been open since 2026-09-02 and had cost at least seven postings. A posting is eligible when a Bachelor's satisfies its minimum degree. An advanced degree listed as preferred, as one acceptable option among several, or as a plus is not a skip.
- Graduation window: target postings that accept graduation dates from December 2026 through May 2027. If no graduation-window requirement is listed, do not skip solely for missing graduation wording.
- Freshness: posted in the last 24 hours first, then 48 hours if needed.
- Locations: Tier 1 first: California tech hubs, Seattle/Bellevue/Redmond, New York statewide with New York City first, Boston/Cambridge, Chicago, Minneapolis/St. Paul, Austin, and Dallas. Then Tier 2 preferred tech hubs including Texas statewide, then Tier 3 locations from the Location Policy section. Academic Research Engineering roles are exempt and accept any US location.
- Remote/hybrid/onsite: accept all.
- Company types: TBD.
- Industries: TBD.
- Compensation: no floor. Confirmed by the user on 2026-09-16: the US salary limit is removed, so a posting is never skipped on pay, whatever it lists. This replaces the 90,000 USD floor set on 2026-08-28 and the 120,000 USD floor used from 2026-07-14, and it also removes the separate 60,000 USD academic floor. Keep recording listed pay in the notes, since it still helps rank one clean match against another. The China track keeps its own 250,000 RMB floor.
- Work authorization: F-1 OPT, then the 24-month STEM OPT extension. No H-1B or other employer visa sponsorship is needed. Confirmed by the user on 2026-09-15: the candidate plans to work in the US for about three years on OPT and STEM OPT and then return to China. A posting must accept F-1 OPT and STEM OPT; whether the employer sponsors visas does not matter. E-Verify enrollment does matter and must be confirmed before applying — see the E-Verify Check section.
- Form length: low-friction forms in Volume mode.

## Academic Research Engineering

Added 2026-09-06. The trigger was an MIT posting the user found and the search did not: Software Developer, Machine Learning for Pharmaceutical Discovery and Synthesis, MIT Chemical Engineering job 25997. The work is ML inference APIs, training and retraining pipelines, Docker/Kubernetes/EKS microservices, and model deployment alongside faculty, researchers, and graduate students, and its title is Software Developer. The lesson is that a title is not a filter. Universities and research labs post genuine research-engineering work under ordinary software titles, and a title-driven search cannot see it.

### Titles to sweep

Sweep all of these when the employer is a university, national lab, research institute, hospital research center, or named academic lab, center, consortium, or initiative:

- Research Assistant, Predoctoral Research Assistant, Predoc, Predoctoral Fellow, Research Associate.
- Technical Associate, Technical Associate I, Technical Associate II.
- Research Engineer, Research Software Engineer, Research Programmer, Scientific Programmer, Research Specialist, Research Computing Specialist.
- Software Developer, Software Developer 1, Software Engineer, Application Developer, Machine Learning Engineer, Data Scientist.

The last group is the one the old search missed. Never skip a university posting because its title reads as ordinary engineering.

### Qualifying test

The title never qualifies a posting on this family; the job description does. Treat a posting as Academic Research Engineering only when the body shows at least two of:

- Named collaboration with faculty, a PI, research scientists, postdocs, or graduate students.
- Designing, running, or supporting research experiments, evaluations, ablations, or benchmarks.
- Contributing to papers, publications, or research documentation.
- Building research infrastructure: training or inference pipelines, evaluation harnesses, data pipelines, reproducibility tooling, or HPC and cluster workloads.
- Affiliation with a named lab, center, consortium, or initiative rather than central IT.

Skip when the body is central IT, administrative or enterprise systems, a departmental website, teaching or course support, help desk, or wet-lab bench technician work, even when a professor or a lab is named. MIT FutureTech's Software Developer 1 is the worked example of a near miss: it is bachelor's-eligible, cloud and API work, and collaborates with researchers, but the substance is web platform engineering, so it does not qualify.

### Rule exceptions for this family

These override the general rules below:

- Compensation floor: none, the same as the rest of the US track since 2026-09-16. Academic pay bands sit far below industry, from MIT MLPDS at 79,050-106,420 USD down to MIT FutureTech's Junior Research Scientist at 50,000 USD, and none of that is a screening question any more. Salary is often not listed at all in academic postings, which was never a skip.
- A fixed-term full-time salaried appointment, such as a one-year term renewable subject to grant funding, is a normal academic structure. It is not a contract, agency, or part-time role and is not skipped on job type.
- A stated minimum of up to three years of experience is a Consider, not a skip. MIT states that it "considers equivalent combinations of experience and education for certain jobs" and encourages such candidates to apply. Tally the candidate's internships, research, and project engineering time toward the stated minimum and say so in the application. Above three years, skip.
- Level wording does not apply. These postings rarely say new grad, entry level, or level I. Screen on the minimum degree and the stated qualifications instead.
- The Location Policy does not apply. Confirmed by the user on 2026-09-06: any US location is acceptable for this family. The policy was written for company jobs, and applying it here would rule out CMU in Pittsburgh, Michigan in Ann Arbor, Cornell in Ithaca, UIUC in Urbana, and Princeton, which is most of the strongest ML research in the country, for a family whose whole purpose is a research record. Rank by research fit and lab strength instead of by location tier. Non-US locations remain out of scope on the US track.
- Freshness widens to 90 days. Academic postings sit open for months and recruit on a rolling basis, so the 24 and 48 hour windows would return nothing.
- A posting aimed at future PhD applicants, such as a predoc, is not a PhD-required posting. Skip only when a PhD or a Master's is the stated minimum degree.

### Liveness check

Academic pages go stale while still showing a form. Before recording a lead, confirm two things and record them in the notes:

- The posting is live: an active Apply or interest form, and a posting or update date.
- The stated start window is not expired. MIT FutureTech's Junior Research Scientist still read "starting in 2025" when checked on 2026-09-06 and was not counted as a lead for that reason. "Flexible start date in 2026" on a page that is still accepting rolling applications is stale wording, not a closed role, but it does mean the January 2027 start has to be raised with the employer rather than assumed.

### Application posture

- State availability explicitly. Write "Available January 2027" in the application and in any interest form or email, since these postings usually carry a flexible or already-passed start date rather than a fixed cohort date.
- Where a stated minimum exceeds the candidate's direct experience, lead with the equivalent-experience clause when the employer publishes one.
- Sponsorship: most academic research appointments do not sponsor. That is not a skip on any family since 2026-09-15, when the user confirmed the candidate needs only OPT and STEM OPT. The E-Verify question still decides whether the STEM OPT extension is usable, so record it as the next action rather than assuming it.

### Sources

Sweep these in addition to the boards in the Account Policy section:

- MIT: the external careers portal at careers.peopleclick.com/careerscp/client_mit, futuretech.mit.edu/opportunities, and cap.csail.mit.edu/members/jobs.
- University career portals for Stanford, Berkeley and the UC system, CMU, Harvard, Princeton, Yale, Columbia, NYU, UW, Michigan, Cornell, UIUC, UCSD, Georgia Tech, and UT Austin. All of these are in scope regardless of city, since the Location Policy does not apply to this family.
- Aggregators: HigherEdJobs, predoc.org, Academic Jobs Online, and lab or center opportunity pages linked from faculty group sites.
- National labs are in scope only where the industry rules already allow them. Most gate on US citizenship or clearance, which remains a skip.

## E-Verify Check

Required by the user on 2026-09-16: never apply to a US posting before confirming whether the employer is
enrolled in E-Verify. Record the finding in the row, not just an intention to look.

Why it decides the outcome: OPT carries the first 12 months without any employer involvement, but the
24-month STEM OPT extension is only available at an E-Verify employer, which must also sign the Form I-983
training plan. An employer outside E-Verify caps the job at one year.

- Check before applying, and record one of three values in the notes: `E-Verify: enrolled`,
  `E-Verify: not enrolled`, or `E-Verify: unconfirmed`, each with the source and the date checked.
- Sources, in order: the posting body, which often states participation outright; the employer's careers
  or legal pages, including any E-Verify participation poster; then the official E-Verify employer search at
  https://www.e-verify.gov/e-verify-employer-search, which must be done in a browser.
- The official search cannot be queried from the command line, established on 2026-09-16: it is a Tableau
  dashboard whose CSV export returns only the map sheet (State, latitude, longitude, hiring-site counts),
  URL filter parameters are ignored, every guessed sheet name returns 404, and no bulk employer dataset is
  published on e-verify.gov or data.gov. Do not spend a run retrying it; queue the lookup as a browser pass.
- `enrolled`: proceed.
- `not enrolled`: hand off to the user rather than deciding. The role is legally workable for 12 months on
  OPT, so it is the user's call whether a one-year horizon is worth it. Do not skip it silently.
- `unconfirmed`: do not apply yet. Keep the row Pending with `confirm E-Verify` as the next action, or hand
  it off if the user wants to apply anyway.
- Federal contractors are a special case: many are enrolled because the FAR E-Verify clause requires it,
  but that same work often carries citizenship or clearance requirements that skip the row first.
- This check is separate from the sponsorship question, which was removed as a screen on 2026-09-15. A
  posting that refuses sponsorship can still be an E-Verify employer, and those are the roles that work best
  for this candidate.


## Consider

Review before applying when:

- The role is a stretch but close to the candidate story.
- A posting, company or academic, states that the employer does not sponsor visas but does not exclude F-1 OPT or STEM OPT. Record "confirm E-Verify enrollment" as the next action, since E-Verify decides whether the 24-month STEM OPT extension is usable. Widened by the user on 2026-09-15 from universities only to every posting.
- An Academic Research Engineering posting states a minimum of up to three years of experience.
- An Academic Research Engineering posting lists a minimum qualification the candidate does not hold, such as a specific simulator or toolchain, while the rest of the description matches.
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
- The body makes C++ a mandatory requirement, such as "must be proficient in C++" or C++ as a required qualification on its own. Confirmed by the user on 2026-09-13: a body that lists C++ as one option among several acceptable languages, such as "one or more of Python, Java, C++", is not a skip. This closes the question open since 2026-08-21 on Five Rings and Cadence.
- The posting states a Master's or a PhD as the minimum required degree. Confirmed by the user on 2026-09-06 that the candidate completes a Bachelor's. "PhD" in a title is a skip only when the degree is actually required. An advanced degree that is preferred, listed as one acceptable option among several, or named as a plus is not a skip, and a predoc or research role aimed at people who intend to apply to a PhD later is not a skip.
- The role is Product Manager, Associate Product Manager, or any Product Management role.
- The title or level indicates SDE II, Software Engineer II, Software Development Engineer II, level 2, mid-level, senior, staff, principal, lead, manager, architect, or other non-new-grad seniority. Academic Research Engineering titles are exempt: Technical Associate, Research Associate, and Research Specialist are not seniority markers.
- The posting explicitly requires a graduation date outside December 2026 through May 2027.
- The company is Amazon, American Express, Visa, CGI, BeaconFire, Hired, Cerebras Systems, Cerebras, T-Mobile, Roblox, CVS Health, Bot Auto, Cisco, InstaLILY AI (also written InstaLILY and InstaLily), Siemens, Warner Bros. Discovery (including Warner Bros., Warner Bros. Games, HBO, HBO Max, CNN, and Discovery), or listed only as Stealth Startup.
- Until 2027-01-01, the company is TikTok or ByteDance.
- The required years of experience are clearly too high for the target level. On Academic Research Engineering roles the bar is three years: at or under it the posting is a Consider under the equivalent-experience clause, above it a skip.
- The posting says it does not accept F-1 OPT or STEM OPT, requires permanent or unrestricted US work authorization, or otherwise contradicts the confirmed work authorization facts in `candidate_profile.json`.
- A plain no-sponsorship statement is not a skip. Changed by the user on 2026-09-15, replacing the company skip in force since 2026-07-14 and the university-only exception of 2026-09-06: the candidate works on F-1 OPT and the STEM OPT extension, needs no H-1B or other employer visa sponsorship, and plans to return to China after about three years. "Does not sponsor", "cannot sponsor now or in the future", and "will not transfer or take over a visa" all pass. Still a skip: excluding F-1, OPT, or STEM OPT by name, requiring permanent or unrestricted authorization or citizenship (the line above), refusing applicants who need an employment authorization document, and roles that need an export license the employer will not obtain. The American Express and Siemens exclusions made on no-sponsorship grounds on 2026-09-02 stay in force at the user's instruction.
- The posting requires US citizenship, US person status, green card, permanent residency, or other citizenship-based eligibility the candidate does not have.
- The role is in space, aerospace, aircraft, defense, military, or security-clearance-related work.
- The role requires US security clearance.
- The location conflicts with confirmed location or relocation policy. This does not apply to Academic Research Engineering roles, which accept any US location.
- Compensation is never a skip on the US track. The salary limit was removed by the user on 2026-09-16, including the academic floor. A low, single-value, or unlisted figure all pass.
- The role is part-time, unpaid, contract, agency, internship, or commission-only unless explicitly allowed. A full-time salaried fixed-term academic appointment, such as a one-year term renewable subject to grant funding, is not a contract role and is not skipped on this ground.
- The form requires video, extensive writing samples, references, or unsupported materials for a weak-fit role.
- The job is a duplicate, already applied, closed, or stale without exceptional fit.
- The posting was archived by the user in the dashboard. Archiving means the lead is dismissed for good, not that it was applied to. Confirmed by the user on 2026-09-09: "archive 的就是后面没必要出现的". Never resurface an archived posting, including a republished requisition under a new id or URL, so match archived rows on company and title as well as on URL. Do not ask why a lead was archived, do not offer to log it as an application, and do not report dismissal counts or rates in daily summaries.

## Hand Off to User

Stop and ask the user when:

- Legal, identity, work authorization, sponsorship, or compensation wording is unclear.
- A posting is otherwise a good match and the employer is not enrolled in E-Verify, or enrollment cannot be determined from any source, since that decides whether the STEM OPT extension is usable and therefore whether the job lasts one year or three.
- A posting's start date has already passed or is stated as a year rather than a date, and the January 2027 availability needs to be raised with the employer.
- A form requires an exact graduation month or date instead of accepting the confirmed December 2026 through May 2027 window.
- A posting's sponsorship, authorization, relocation, or compensation requirement conflicts with a `TBD` profile field.
- A form asks about visa category details beyond F-1 OPT and STEM OPT, or asks whether the employer would need to sign a STEM OPT Form I-983 training plan or use E-Verify.
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
- Academic Research Engineering roles are the exception: sweep 90 days and treat rolling postings as live, because university postings stay open for months. Every academic lead needs the liveness check in that section before it is recorded.

## Location Policy

Target preferred locations in this order:

- Tier 1: California: San Francisco Bay Area, San Jose, Palo Alto, Mountain View, Sunnyvale, Los Angeles, Irvine/Orange County, San Diego.
- Tier 1: Washington: Seattle, Bellevue, Redmond.
- Tier 1: New York: New York State, statewide. Confirmed by the user on 2026-09-06, replacing the New York City only reading used from 2026-07-14. New York City stays the Tier 1 priority within the state; the rest of the state, including Long Island and upstate, is acceptable.
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

This section governs company roles only. Academic Research Engineering roles are exempt from it and accept any US location, confirmed by the user on 2026-09-06; rank those by research fit rather than by location tier.

Remote, hybrid, and onsite roles are all acceptable when they match the preferred location policy and are compatible with the user's work authorization and location constraints. Texas and New York are acceptable statewide. Ask before treating any other non-listed state as acceptable.

## Account Policy

Use these accounts only:

- LinkedIn: LinkedIn Jobs and LinkedIn Premium personal search.
- Email: TBD.
- Job boards: LinkedIn Jobs, LinkedIn Premium personal search, Simplify Jobs, Wellfound, Y Combinator Work at a Startup, Otta / Welcome to the Jungle, Built In, Google Jobs, Indeed, Handshake.
- Direct ATS sources: Greenhouse, Lever, public Ashby hosted job boards/posting pages, and Workday for high-fit roles only.
- Company pages: new grad / university / early career pages for target companies, AI startup career pages, and mid-size tech company career pages.
- Academic sources: university HR portals and lab or center opportunity pages, including the MIT external careers portal, MIT FutureTech, and CSAIL Alliances jobs; HigherEdJobs; predoc.org; Academic Jobs Online. Added 2026-09-06. These are public listing pages; the same no-login, no-application-flow limits apply.

If a different account appears, stop and ask.

## Source Policy

For lead finding, sweep the academic sources on every run alongside the boards, and read the job description of every university posting whose title looks like ordinary engineering before dismissing it. Use all listed sources to find and classify leads, including public Ashby hosted job boards and Ashby posting pages when available. Do not open real application flows, click Apply, create accounts, log in, or submit applications. For LinkedIn Premium personal search, use only an already-authenticated user session or user-provided/exported lead data; stop for login, 2FA, CAPTCHA, account switching, or any prompt requiring user action. For account-heavy or slower sources such as Workday and Handshake, collect public leads only unless the user confirms access and later approves application-flow use.
