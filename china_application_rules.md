# Application Rules — China Track (中国版块)

This file governs the China track only. It is a sibling of `application_rules.md`, not an extension of it.
The two tracks share nothing: separate CSVs under `dashboard/china/`, separate daily summaries, separate
automation rules, separate counts. A posting belongs to exactly one track, decided by its work location.

Created 2026-09-05 at the user's request: "在中国有办公室的外企", kept apart from the US pipeline.

## Scope

In scope: roles based in mainland China at **外企** — foreign-invested multinationals with China offices.
Microsoft, NVIDIA, AMD, Intel, Qualcomm, Apple, Siemens, Bosch, SAP, Oracle, IBM, Ericsson, Nokia,
Schneider, ABB, Autodesk, Unity, Zoom, Databricks, and similar, including their China R&D centres
(微软亚洲研究院, 英伟达上海, AMD 上海/北京, 苹果上海, 西门子, 博世 etc.).

Out of scope by definition: Chinese domestic companies (阿里, 腾讯, 字节, 美团, 百度, 华为, 京东, 拼多多,
小米, 网易, 快手 and the like). The user asked specifically for 外企. If domestic companies should be
added later, that is a scope change to confirm first, not a judgment call to make silently.

Also out of scope: roles based outside mainland China. A Hong Kong, Taiwan, Singapore, or Japan posting
is neither track and is not recorded. Ask before treating 港澳台 as in scope.

## Mode

Volume, same as the US track. Same English resume as the US track — see Resume below.

## Boundary

Lead finding only, unchanged from the US track. Find, screen, classify, write to `dashboard/china/*.csv`.
Do not open application flows, click 投递/申请, create accounts, log in, or submit anything.

## Work Authorization

Confirmed by the user on 2026-09-05: **中国公民，在中国工作无需工作许可**.

Consequence: work authorization is not a screening axis on this track at all. Do not skip, flag, or ask
about sponsorship, visa, work permit, 工作许可, or 居留许可 for China-based roles. This is the single
largest difference from the US track, where 8 of 18 skips on 2026-09-05 turned on exactly that.

The reverse also holds: a posting at a 外企 China office that mentions US work authorization is describing
a US role and belongs on the US track, not here.

## Prioritize

- Role families: Software Engineering and AI Engineering, same as the US track.
- Titles: 软件工程师, 软件开发工程师, 算法工程师, 机器学习工程师, 人工智能工程师, 大模型工程师,
  应用算法工程师, and the English equivalents used by 外企 (Software Engineer, SDE, AI/ML Engineer,
  Applied Scientist at entry level, LLM Engineer, Agent Engineer).
- Level: 应届生, 校招, 管培生 (technical only), 新毕业生, entry level, Level I, University Graduate,
  Campus Hire, 2027届. Junior only.
- Graduation window: December 2026 through May 2027, unchanged. In 校招 terms this straddles 2026届
  (winter) and 2027届. Keep postings that accept either; skip only when a posting explicitly requires a
  graduation date wholly outside the window.
- **留学生专场 / 海外院校专场 postings rank highest.** Many 外企 run a separate overseas-graduate track
  with its own timeline, and the candidate is studying in the US, so these fit better than general 校招
  and often have less competition. Flag them as High whenever the fit is otherwise clean.
- Freshness: posted in the last 24 hours first, then 48 hours, same as the US track.
- Locations: see Location Policy.
- Compensation: at least 250,000 RMB total package per year when explicitly listed. Confirmed by the
  user on 2026-09-05.

## Skip

- The company is a Chinese domestic company rather than a 外企 (see Scope).
- The role is based outside mainland China.
- The title, role family, or level violates the shared must-skip rules: Product Manager, titles that
  explicitly say C++, titles including PhD or postings explicitly targeting PhD candidates, Forward
  Deployed Engineer, and any 社招 / mid-level / senior / staff / principal / lead / manager / architect
  seniority. 社招 (experienced hire) is the China-track equivalent of the US seniority skip.
- The posting explicitly requires a graduation date wholly outside December 2026 through May 2027.
- The entire explicitly listed annual total package sits below 250,000 RMB. A range that straddles
  250,000 RMB is not a skip. If compensation is not listed — which is far more common in China than in
  the US — do not skip on compensation.
- The required years of experience are clearly too high for 应届 level.
- The role is 外包 / 派遣 / 实习 / 兼职 / 劳务派遣 (outsourced, dispatch, internship, part-time), or is
  posted by a 猎头 or staffing agency rather than the employer. This mirrors the US contract/agency skip
  and matters more here, since 外包 postings at 外企 names are common.
- The role is in space, aerospace, aircraft, defense, or military work. Carried over from the US track as
  a standing industry preference, independent of any authorization reasoning.

## Excluded Companies

**None.** Confirmed by the user on 2026-09-05: no US exclusion carries over to this track.

The US list was built for US-specific reasons — American Express and Siemens were excluded because
they do not sponsor, which is void here — and the user has settled that none of it applies. Screen every
外企 on its own merits. If a company should be excluded on this track, it will be added here on its own.

## Location Policy

- Tier 1: 上海, 北京, 深圳, 杭州, 广州.
- Tier 2: 苏州, 南京, 成都, 西安, 武汉, 大连, 无锡, 珠海, 天津.
  西安 and 大连 carry real weight here: several 外企 run large R&D or delivery centres there.
- Tier 3: other mainland cities, case by case.
- Remote, hybrid, and onsite are all acceptable, same as the US track.

## Sources

The important finding, which makes this track cheap to run: **外企 post China roles on the same ATS
platforms the US track already reads.** Workday, Greenhouse, Ashby, Eightfold, SuccessFactors, and Taleo
all serve China requisitions through the same endpoints, so the existing command-line screening works
unchanged — only the location filter differs.

Primary:
- 外企 global career sites and their China campus pages (校园招聘 / University Recruiting), read through
  the ATS endpoints already proven on the US track.
- LinkedIn, subject to the same already-authenticated-session limits as the US track.

Secondary, collect-only:
- 应届生求职网 (yingjiesheng), 牛客网 job boards, 实习僧 for full-time 校招 listings.

Hard stop, do not attempt: BOSS直聘, 拉勾, 智联招聘, 前程无忧 51job, and any source requiring login,
手机验证码, 扫码登录, real-name verification, or an app install. These hit the standing hard-stop rules
on login, 2FA, and CAPTCHA. Do not create accounts on any Chinese job platform.

## Status Classification

Identical to the US track: `Pending`, `Needs user`, `Skipped`, `Blocked`, `Submitted`. Only confirmed
submissions count. Archived means dismissed, not applied — same as the US track: the archived flag is
set, status stays as it was, and `dashboard/china/application_log.csv` is untouched.

## Resume

English resume only. Confirmed by the user on 2026-09-05: no 中文简历 is needed, and the existing
English resume is used for 外企 applications, same file as the US track.

If a 校招 system later forces a Chinese-language form, that is a handoff to the user, not a reason to
translate or draft one automatically.

## Ranking Against the US Track

None. Confirmed by the user on 2026-09-05: this track is fully independent of the US track and neither
takes priority over the other. Do not rank China leads against US leads, do not describe one as a
fallback for the other, and do not merge them into a shared queue or a shared daily total. Report each
track on its own terms.
