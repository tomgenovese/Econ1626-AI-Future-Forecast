# Generation is cheap, verification is scarce — Draft

*Draft outline, 20 Oct 2026. Exported from the working draft doc.*

First-draft outline for ECON1626 Assessment 3, the AI Future Forecast interactive web essay (40%, due Sunday 25 October, 11:59pm). Scope is Australian financial services from 2026 to 2030, using software engineering as the leading indicator. The target is 2,000 words (±10%), and the word budgets below are guides.

**Evidence tags:** **[HAVE]** means the evidence is already in hand. **[RESEARCH]** means it still needs sourcing. **[VERIFY]** means it is believed but must be checked before it goes in.

## 1. Landing / Thesis (~200 words)

**Core claim:** by 2030, AI will lift the volume of work produced in Australian financial services far faster than it lifts finished, compliant output. The binding constraint shifts from generating work to verifying it. Finance, where errors carry legal and financial liability, is where that constraint bites hardest.

- **The hype frame:** AI as "a country of geniuses in a data centre", or a "white-collar bloodbath". Both assume task gains pass straight through to output and jobs.
- **Our frame:** production is a chain of complementary tasks (O-ring and weak-link logic). Speed up one link and the slowest remaining link sets the pace.
- **Forecast headline (to calibrate):** large task-level gains, a modest measured lift in sector productivity, and labour shifting *toward* review rather than mass displacement, unless verification capacity is built deliberately.
- **Why 2030:** long enough for agentic tools to diffuse through banks and super funds. Short enough that regulation, workforce pipelines and review practices are still adjusting (structural-break risk is covered in Section 7).

**Evidence**

- [HAVE] Chen & Stratton (2026), Harvard job market paper, for the framing (the Amodei quotes in its introduction).
- [HAVE] Kremer (1993) on the O-ring theory, Gans & Goldfarb (2026) on O-ring automation, and Jones & Tonetti (2026) on weak links. All are cited in Chen & Stratton.
- [HAVE] **The foil: big forecasts versus flat productivity.** This becomes the opening chart.
    - [Microsoft and the Tech Council (2023)](https://news.microsoft.com/en-au/features/generative-ai-could-contribute-115-billion-annually-to-australias-economy-by-2030/): generative AI could add $45bn (slow adoption) to $115bn (fast adoption) a year by 2030. Note this is an industry-funded estimate.
    - [Productivity Commission interim report (August 2025)](https://ia.acs.org.au/article/2025/ai-laws-should-be-a-last-resort-productivity-commission.html): about $116bn and +4.3% labour productivity over a decade. The final report (19 December 2025) reframes this as multifactor productivity gains above 2.3% over the next decade, about $116bn of extra GDP. Use the final-report figure.
    - [ABS national accounts](https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release): GDP per hour worked *fell* 0.2% in the year to June 2026.
    - **Role:** the gap between forecast and measurement is the puzzle; the verification bottleneck is our explanation.
- [HAVE] Supporting voice: [CSIRO Data61 director Jon Whittle (July 2025)](https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky) argues the evidence of AI productivity gains is murky at individual, firm and national levels, and that checking AI output can raise workloads.

## 2. The evidence hook: what happened in software (~300 words)

**Main point:** AI agents arrived in software first and hardest, so it previews the rest of knowledge work. The result was more drafts, not more finished product. [HAVE] Chen & Stratton (2026): 718 firms, about 726,000 workers, staggered difference-in-differences on AI-agent adoption.

| Stage | Measure | Effect of AI agents |
| --- | --- | --- |
| Writing | Lines of code per worker | +30% |
| Writing | Commits per worker | +20% |
| Writing | Pull requests per worker | +23% |
| Finished output | Jira issues resolved | Not significant; rules out more than +12% |
| Review | Days from PR to merge | +49% (7.0 to about 10.5 days) |
| Review | Share of PRs with changes requested | 13% to about 25% |
| Review | Comments per PR | +35% |
| Labour | Share of workers doing review | +14% |
| Labour | Overall and engineering employment | No significant change |

- **Pass-through:** at most about 0.4 of the coding gain reaches finished output (12% ÷ 30%). This number calibrates the scenarios.
- **AI review tools don't dissolve it.** About 80% of firms use them, but only about 23% of review comments are AI-written. Humans stay in the loop.
- **Two channels (their model):** *volume*, meaning more drafts to check, and *quality*, meaning a higher bug rate and so more checking per draft. Extra reviewers fix the first channel; only better technology fixes the second.
- **Tom's angle to weave in:** "AI slop", a pile of unchecked output landing on human desks with no rise in final products shipped.

**Still to source**

- [RESEARCH] Corroborating study: Demirer, Musolff & Yang (2026, NBER), "Writing Code vs. Shipping Code", which finds the same gap in open-source data.
- [RESEARCH] Counterpoint: Becker et al. (2025, METR), where experienced developers were *slower* with AI. It shows the evidence isn't one-sided.

## 3. From capabilities to economic channels in AU finance (~350 words)

**Main point:** the software mechanism transfers to finance, and it is *stronger* there because an undetected error costs more.

*Diagram (in the draft doc):* AI generation (agents draft work) → Drafts (+20 to 30% per worker) → **Human verification (binding constraint)** → Finished output (at most +12%). Feeding into verification: *finance raises review per draft* because of the high cost of an undetected error.

**Channel map (capability → task → output → economy)**

1. **Generation capability.** Agents draft code, credit memos, statements of advice, compliance reports and customer responses.
2. **Productivity channel.** More drafts per worker.
3. **Verification channel.** Every draft is checked against legal duties: responsible lending, best-interests duty, AML/CTF and disclosure. Senior, accountable staff do the checking.
4. **Output.** Finished, compliant products and decisions are capped by verification throughput.
5. **Labour and structure.** Staffing shifts toward review and assurance, and returns to senior judgement rise. Firms with strong review infrastructure (the big four banks) pull ahead of smaller players, so concentration rises.

**The finance twist, using the paper's own model**

- In the model, the right amount of checking per draft rises with the *cost of an undetected error*. In finance that cost is very high: regulatory penalties, customer remediation and reputational damage.
- So review already takes a bigger share of a finance firm's costs. The model shows the shortfall in finished output is larger when review is a bigger share of costs and when extra checking finds fewer new errors. Both hold in finance, so the bottleneck should be *bigger* there than in software.
- This extension is original and worth highlighting for the 30% economics criterion. On the site, the maths stays in the Methods section; the essay says it in plain English.

**Evidence**

- [HAVE] 16% of Chen & Stratton's sample are financial services and insurance firms, and finance firms adopted AI assistants *later* (their balance table).
- [HAVE] **Finance is adopting fast.** This becomes a bar chart of AI adoption by industry.
    - [ABS Characteristics of Australian Business 2024-25](https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25) (released 25 June 2026): 24% of financial and insurance services businesses used AI, up from 1% in 2021-22, the fastest growth of any industry ([ABS media release](https://www.abs.gov.au/media-centre/media-releases/business-adoption-artificial-intelligence-accelerates-2024-25)).
    - Comparison: information, media and telecoms 38%, professional services 24%, all businesses 12%.
    - **Role:** the software bottleneck from Section 2 is arriving in finance now.
- [HAVE] **Governance is lagging adoption in finance.** [ASIC REP 798, "Beware the gap" (October 2024)](https://download.asic.gov.au/media/mtllqjo0/rep-798-published-29-october-2024.pdf) reviewed 624 AI use cases across 23 licensees.
    - 61% of licensees planned to increase AI use within 12 months. Of the 14 planning an increase, only 1 had upgraded its governance first.
    - Generative AI was 5% of use cases in production but 22% of those in development, so the generative wave is still arriving.
    - 30% of use cases relied on models built by third parties, which are harder for the firm to check.
    - **Role:** direct finance evidence that checking capacity is not keeping up with AI output. It is the regulator's own version of our thesis.
- [HAVE] **The cost of an undetected error is large.**
    - [ASIC (March 2023)](https://brokernews.com.au/news/breaking-news/banks-to-pay-4-7-billion-in-compensation-to-customers-282142.aspx): AMP, ANZ, CBA, Macquarie, NAB and Westpac paid or offered $4.7bn for fees-for-no-service and non-compliant advice.
    - **Role:** evidences the model extension. A high cost per error means more checking per draft, so a bigger bottleneck in finance. [TO DO] Cite the ASIC release directly (likely 23-057MR) rather than the news report.
- [HAVE] Australian bank example: [CBA ranked top in Asia-Pacific in the 2026 Evident AI Index](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx) and is sending engineers to an AI coding residency. Shows leading banks are pushing AI into engineering, which is the software channel directly.
- [RESEARCH] Sector size: financial and insurance services' share of GDP, from the ABS national accounts industry tables (not yet confirmed from a source).

## 4. Three scenarios to 2030 (~450 words)

The scenarios differ on two things: how fast verification capacity grows, and whether AI quality improves. The pass-through rate (the share of task gains reaching finished output) is the summary number for each.

| | Baseline: "The review backlog" | Upside: "Verification catches up" | Downside: "Slop accumulation" |
| --- | --- | --- | --- |
| Key drivers | Agentic AI across most large AU financial firms by about 2028; verification capacity grows slowly | Investment in automated checking and workflow redesign; clear regulatory guidance on AI assurance | Firms ship under-verified output to capture volume gains |
| Mechanism | Volume channel dominates; senior reviewers scarce | Quality channel falls (fewer errors), so review per unit drops | Errors lead to incidents, remediation and a regulatory clampdown, which re-tightens review |
| Pass-through | About 0.3 to 0.4 (Harvard calibration) | Rises toward 0.7 or more | Flat or negative after remediation |
| Employment mix | Shift toward review and assurance; little net job loss; junior hiring softens | Shared tools let smaller firms keep up | Junior pipeline hollows out, leaving fewer senior reviewers by 2030 |
| Industry structure | Big four advantage grows | Less concentration | Trust costs; regulator-driven consolidation |
| Signposts to watch | Review cycle times; assurance hiring | AI error rates falling. Trigger: ASIC and APRA issue AI assurance guidance under existing powers | AI-related breach reports; graduate intake falling. Trigger: an AI-caused incident takes the "on hold" mandatory guardrails off hold, a blunter version of the same fix |

**Evidence and modelling to do**

- [HAVE] Pass-through calibration from Chen & Stratton.
- [HAVE] **Starting point for the scenario model.**
    - [Jobs and Skills Australia (ABS Labour Force, August 2025)](https://www.jobsandskills.gov.au/data/labour-market-insights/industries/financial-and-insurance-services): 552,900 employed in financial and insurance services, 3.8% of the workforce, up 2.2% over the year; median age 40.
    - [ABS national accounts](https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release): sector output (gross value added) up 4.8% in the year to June 2026.
    - **Role:** each scenario applies its pass-through rate to this 2026 base to produce output and jobs paths to 2030.
- [HAVE] **Downside signpost: adoption outrunning verification.** In an Experian survey reported by [Australian Broker (October 2026)](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx), 72% of Australian financial institutions said they use agentic AI for underwriting, but only 3% said their data was fully ready. Industry survey, so use as colour rather than backbone. [TO DO] Find the original Experian report.
- [RESEARCH] Entry-level evidence: Brynjolfsson, Chandar & Chen (2025), "Canaries in the coal mine", on young workers in AI-exposed jobs. Note the tension with Chen & Stratton's null junior effect.
- [RESEARCH] [VERIFY] A precedent for the downside: Robodebt as a public-sector case of automation without verification, plus any bank algorithm or AML failures.
- [TO BUILD] A simple scenario model producing 2026 to 2030 paths for the scenario switcher, with assumptions documented in Section 7.

## 5. Policy playbook (~350 words)

Five levers, each tied to a channel. The key split: extra review capacity fixes the volume channel, but only better technology fixes the quality channel.

| Lever | Who acts | Channel fixed | Trade-off or unintended consequence | KPI |
| --- | --- | --- | --- | --- |
| AI assurance standards for AI-generated outputs | ASIC, APRA | Both, by setting the bar | Too prescriptive (mandatory human sign-off on everything) *worsens* the bottleneck | AI-related breach reports; time to approval |
| Invest in verification capacity | Firms; possibly tax incentives for assurance tooling and training | Volume | Cost lands before gains show | Review cycle times; share of staff in assurance roles |
| Protect the junior-to-senior pipeline | Firms, government (graduate and apprenticeship-style review roles) | Future reviewer supply | Short-run cost when juniors look "replaceable" | Graduate intake; entry-level vacancies (Jobs and Skills Australia) |
| Fund verification technology and shared tools | Government with industry | Quality | Public money for private benefit; slow payoff | Error and rework rates |
| Measurement reform: judge AI by finished output, not drafts | Firms, ABS | Neither directly; stops misreading gains | Harder to measure | Finished-output metrics adopted |

**Evidence**

- [HAVE] **Where Australian policy stands (October 2026).**
    - [National AI Plan (2 December 2025)](https://region.com.au/mandatory-ai-guardrails-put-on-hold-with-the-release-of-national-plan/926410/): the 10 mandatory guardrails are "on hold for now" and no standalone AI Act will proceed. Existing laws and regulators handle AI risk, supported by a new AI Safety Institute ($29.9m, from early 2026).
    - [Productivity Commission final report (19 December 2025)](https://www.mallesons.com/au/en/insights/latest-thinking/productivity-commission-releases-final-report-into-harnessing-data-and-digital-technologies.html): AI-specific regulation is a last resort. Government should run gap analyses, use existing frameworks first, and only then consider new technology-neutral laws.
    - [APRA CPS 230 (in force 1 July 2025)](https://www.brightlaw.com.au/apra-prudential-standard-on-operational-risk-management-commences/): banks, insurers and super funds must define critical operations and tolerance levels, manage material service providers and report operational incidents. It does not name AI; that AI systems fall within it is our inference, so phrase it that way.
- [HAVE] **Our position: build on the Productivity Commission, not against it.**
    - Agree that a broad AI law isn't needed; that is now settled government policy.
    - Argue that in finance, the gap analysis should target *checking of AI-generated outputs*. ASIC REP 798 (Section 3) shows the gap is real: only 1 of 14 licensees upgraded governance before scaling AI.
    - The lever: verification standards delivered through existing instruments, meaning ASIC guidance and APRA's CPS 230 incident and tolerance framework. This fits government policy, which makes the recommendation credible.
- [HAVE] **International comparison.** The EU AI Act keeps credit scoring as high-risk, but a provisional agreement in May 2026 pushed the compliance deadline from August 2026 to 2 December 2027 ([Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)). Even the strictest regime is struggling to implement on time.
- [HAVE] Measurement reform comes straight from Chen & Stratton's managerial implications.

## 6. Industry Week engagement: Dave Lemphers (~150 words, woven in)

**Speaker: Dave Lemphers (Maincode), the only AI speaker at Week 9.** The other three speakers (Fong, Bowler, Renden) covered blockchain and digital assets, which is off-thesis.

**The claim.** At Industry Week, Lemphers argued that AI will change work profoundly, but that the opportunities it creates will outweigh what it displaces. A classmate who attended confirmed the gist. Use it as a **paraphrase, no quotation marks**, cited to the presentation.

**Published backing, which can be quoted directly.** [Lemphers (2025), Forbes Australia](https://www.forbes.com.au/news/innovation/the-sovereign-ai-race-is-on-and-australia-cant-afford-to-sit-it-out/): AI is "first and foremost an economic opportunity"; sovereign AI "becomes a jobs engine, a productivity lift for Australian businesses"; it should be "embedded in key sectors like health, finance, energy"; without local capability Australia is "exposed to... opaque black-box systems".

**How we engage (test, then extend):**

1. **Test it.** His optimism assumes AI's task gains become a productivity lift. Chen & Stratton show that pass-through is at most about 0.4 when checking is the bottleneck. So his claim holds only in our *upside* scenario, where verification capacity is built. This makes his view the hinge between baseline and upside.
2. **Extend it.** His worry about "opaque black-box systems" is really a *verification* problem. ASIC REP 798 found 30% of finance AI use cases rely on third-party models, which firms find harder to check. So transparent, auditable models lower the cost of checking. This becomes a lever in Section 5 and a driver of the upside scenario.

**Placement:** woven into Sections 4 and 5, not a stand-alone box.

**References (RMIT Harvard):**

- Lemphers, D 2026, *AI and the future of work* [Industry Week presentation], ECON1626, RMIT University, Melbourne, 23 September. (Title is descriptive; swap in the official one if Canvas lists it.)
- Lemphers, D 2025, ''If we don't build our own stack, we become someone else's customer': Australia's AI warning', *Forbes Australia*, 22 September.

## 7. Uncertainty, methods and data (~200 words)

- **External validity.** Transferring software findings to finance is an assumption. The Harvard data is mostly US firms, and finance tasks differ.
- **Short-run evidence.** The paper covers about 12 months after agent adoption, and firms may reorganise over time (the productivity J-curve; Brynjolfsson, Rock & Syverson 2018).
- **Structural breaks.** A step-change in AI reliability would collapse the quality channel and invalidate the baseline. A major AI-caused incident could trigger a regulatory shock.
- **Measurement gaps.** There is no Australian data on AI-generated output volumes or review times, and financial services output is notoriously hard to measure in national accounts.
- **AI-use disclosure.** Document how Claude was used (research, drafting support, code for the interactives) under RMIT guidance.

**Evidence**

- [HAVE] Chen & Stratton's caveats: partial versus general equilibrium, and short-run estimates.
- [HAVE] **Finance output is mostly imputed.** A [Productivity Commission staff note (2016)](https://www.pc.gov.au/inquiries-and-research/productivity-financial-insurance-services) found FISIM (imputed intermediation services) made up about 77% of finance gross output in 2011-12, and insurance and superannuation output was also largely imputed.
    - **Role:** AI gains, or their absence, will be hard to see in official statistics. This is an honest limitation, and it reinforces Section 1's point that forecasts and measured productivity can diverge. Cite as a structural point, since the figures are dated.
- [HAVE] CSIRO's 2025 trial of Microsoft 365 Copilot in an Australian government agency (about 300 staff): most reported benefits, 30% did not, and even those with gains expected more than they got ([CSIRO](https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky)). Shows self-reported gains are a weak measure.

## Research queue (priority order)

- [x] Australian financial services employment and output growth (Jobs and Skills Australia, ABS)
- [x] Headline Australian AI forecasts to use as a foil (Microsoft/Tech Council; Productivity Commission)
- [x] Australian AI adoption by industry (ABS)
- [x] Cost-of-error and remediation scale ($4.7bn, ASIC)
- [x] Australian bank AI adoption example (CBA)
- [x] Productivity Commission final report and current federal AI policy (National AI Plan)
- [x] ASIC REP 798 and APRA CPS 230
- [x] EU AI Act comparison
- [ ] Sector share of GDP (ABS national accounts industry tables)
- [ ] Demirer, Musolff & Yang (2026); Becker et al. (2025)
- [ ] Brynjolfsson, Chandar & Chen (2025) entry-level evidence
- [ ] Original sources for the ASIC $4.7bn release and the Experian survey; primary sources for the National AI Plan and PC final report (replace the news and law-firm summaries)
- [x] Industry Week claim: Dave Lemphers. Presented Wednesday 23 September 2026; official talk title optional

## Sources (so far)

To be converted to RMIT Harvard style for the final reference list.

| Source | Type | Used in |
| --- | --- | --- |
| Chen, F & Stratton, J 2026, *Artificial Intelligence in the Firm: Bottlenecks in Software Production*, Harvard University job market paper | Research paper | Sections 1–5, 7 |
| [ABS, *Characteristics of Australian Business, 2024-25*](https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25) | Official data | Section 3 |
| [ABS, *Australian National Accounts: National Income, Expenditure and Product, June 2026*](https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release) | Official data | Sections 1, 4 |
| [Jobs and Skills Australia, *Financial and Insurance Services*](https://www.jobsandskills.gov.au/data/labour-market-insights/industries/financial-and-insurance-services) | Official data | Section 4 |
| [ASIC 2024, *REP 798 Beware the gap: Governance arrangements in the face of AI innovation*](https://download.asic.gov.au/media/mtllqjo0/rep-798-published-29-october-2024.pdf) | Regulator report | Sections 3, 5 |
| [APRA CPS 230 Operational Risk Management (in force 1 July 2025), via Brightlaw](https://www.brightlaw.com.au/apra-prudential-standard-on-operational-risk-management-commences/) | Prudential standard (secondary) | Section 5 |
| [Productivity Commission final report, *Harnessing data and digital technology* (Dec 2025), via King & Wood Mallesons](https://www.mallesons.com/au/en/insights/latest-thinking/productivity-commission-releases-final-report-into-harnessing-data-and-digital-technologies.html) | Government report (secondary) | Sections 1, 5 |
| [Productivity Commission interim report (Aug 2025), via ACS Information Age](https://ia.acs.org.au/article/2025/ai-laws-should-be-a-last-resort-productivity-commission.html) | Government report (secondary) | Section 1 |
| [National AI Plan (Dec 2025), via Region](https://region.com.au/mandatory-ai-guardrails-put-on-hold-with-the-release-of-national-plan/926410/) | Government policy (secondary) | Section 5 |
| [Gibson Dunn 2026, *EU AI Act Omnibus Agreement: Postponed High-Risk Deadlines*](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) | Legal analysis | Section 5 |
| [Productivity Commission staff note, *Productivity in Financial and Insurance Services* (2016)](https://www.pc.gov.au/inquiries-and-research/productivity-financial-insurance-services) | Government research | Section 7 |
| [Microsoft & Tech Council of Australia, *Australia's Generative AI Opportunity* (2023)](https://news.microsoft.com/en-au/features/generative-ai-could-contribute-115-billion-annually-to-australias-economy-by-2030/) | Industry report | Section 1 |
| [Whittle, J 2025, *Does AI actually boost productivity? The evidence is murky*, CSIRO](https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky) | Expert commentary | Sections 1, 7 |
| [Australian Broker 2023, *Banks to pay $4.7 billion in compensation* (reporting ASIC)](https://brokernews.com.au/news/breaking-news/banks-to-pay-4-7-billion-in-compensation-to-customers-282142.aspx) | News (replace with ASIC release) | Section 3 |
| [Australian Broker 2026, *CommBank tops Asia-Pacific AI ranking*](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx) | News | Sections 3, 4 |
