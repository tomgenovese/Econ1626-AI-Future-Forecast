# Generation is cheap, verification is scarce — Draft

*Draft outline, 20 Oct 2026. Exported from the working draft doc.*

First-draft outline for ECON1626 Assessment 3, the AI Future Forecast interactive web essay (40%, due Sunday 25 October, 11:59pm). Scope is Australian financial services from 2026 to 2030, using software engineering as the leading indicator. The target is 2,000 words (±10%), and the word budgets below are guides.

**Evidence tags:** **[HAVE]** means the evidence is already in hand. **[RESEARCH]** means it still needs sourcing. **[VERIFY]** means it is believed but must be checked before it goes in.

## 1. Landing / Thesis (~200 words)

**Core claim:** by 2030, AI will lift the volume of work produced in Australian financial services far faster than it lifts finished, compliant output. The binding constraint shifts from generating work to verifying it. Finance, where errors carry legal and financial liability, is where that constraint bites hardest.

- **The hype frame:** AI as "a country of geniuses in a data centre", or a "white-collar bloodbath". Both assume task gains pass straight through to output and jobs.
- **Our frame:** production is a chain of complementary tasks (O-ring and weak-link logic). Speed up one link and the slowest remaining link sets the pace.
- **Forecast headline (to calibrate):** large task-level gains, a modest measured lift in sector productivity, and labour shifting *toward* review rather than mass displacement, unless verification capacity is built deliberately.
- **Why 2030:** long enough for agentic tools to diffuse through banks and super funds. Short enough that regulation, workforce pipelines and review practices are still adjusting (structural-break risk is covered in §7).

**Evidence**

- [HAVE] Chen & Stratton (2026), Harvard job market paper, for the framing (the Amodei quotes in its introduction).
- [HAVE] Kremer (1993) on the O-ring theory, Gans & Goldfarb (2026) on O-ring automation, and Jones & Tonetti (2026) on weak links. All are cited in Chen & Stratton.
- [HAVE] **The foil: big forecasts versus flat productivity.** This becomes the opening chart.
    - [Microsoft and the Tech Council (2023)](https://news.microsoft.com/en-au/features/generative-ai-could-contribute-115-billion-annually-to-australias-economy-by-2030/): generative AI could add $45bn (slow adoption) to $115bn (fast adoption) a year by 2030. Note this is an industry-funded estimate.
    - [Productivity Commission interim report (August 2025)](https://ia.acs.org.au/article/2025/ai-laws-should-be-a-last-resort-productivity-commission.html): about $116bn and +4.3% labour productivity over a decade.
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

*Diagram (in the draft doc):* AI generation (agents draft work) → Drafts (+20 to 30% per worker) → **Human verification (binding constraint)** → Finished output (at most +12%). Feeding into verification: *finance raises review per draft* because of the high cost of an undetected error (ℓ).

**Channel map (capability → task → output → economy)**

1. **Generation capability.** Agents draft code, credit memos, statements of advice, compliance reports and customer responses.
2. **Productivity channel.** More drafts per worker.
3. **Verification channel.** Every draft is checked against legal duties: responsible lending, best-interests duty, AML/CTF and disclosure. Senior, accountable staff do the checking.
4. **Output.** Finished, compliant products and decisions are capped by verification throughput.
5. **Labour and structure.** Staffing shifts toward review and assurance, and returns to senior judgement rise. Firms with strong review infrastructure (the big four banks) pull ahead of smaller players, so concentration rises.

**The finance twist, using the paper's own model**

- In the model, optimal review effort rises with the loss per undetected error (ℓ). Finance has a very high ℓ: regulatory penalties, remediation and reputational damage.
- So review already takes a larger share of costs (high s_R). The bottleneck shortfall scales with λ × s_R, so it is *bigger* in finance than in software.
- This extension is original and worth highlighting for the 30% economics criterion.

**Evidence**

- [HAVE] 16% of Chen & Stratton's sample are financial services and insurance firms, and finance firms adopted AI assistants *later* (their balance table).
- [HAVE] **Finance is adopting fast.** This becomes a bar chart of AI adoption by industry.
    - [ABS Characteristics of Australian Business 2024-25](https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25) (released 25 June 2026): 24% of financial and insurance services businesses used AI, up from 1% in 2021-22, the fastest growth of any industry ([ABS media release](https://www.abs.gov.au/media-centre/media-releases/business-adoption-artificial-intelligence-accelerates-2024-25)).
    - Comparison: information, media and telecoms 38%, professional services 24%, all businesses 12%.
    - **Role:** the software bottleneck from §2 is arriving in finance now.
- [HAVE] **The cost of an error (ℓ) is large.**
    - [ASIC (March 2023)](https://brokernews.com.au/news/breaking-news/banks-to-pay-4-7-billion-in-compensation-to-customers-282142.aspx): AMP, ANZ, CBA, Macquarie, NAB and Westpac paid or offered $4.7bn for fees-for-no-service and non-compliant advice.
    - **Role:** evidences the model extension. High ℓ means more review per draft, so a bigger bottleneck in finance. [TO DO] Cite the ASIC release directly (likely 23-057MR) rather than the news report.
- [HAVE] Australian bank example: [CBA ranked top in Asia-Pacific in the 2026 Evident AI Index](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx) and is sending engineers to an AI coding residency. Shows leading banks are pushing AI into engineering, which is the software channel directly.
- [RESEARCH] Sector size: financial and insurance services' share of GDP, from the ABS national accounts industry tables (not yet confirmed from a source).
- [RESEARCH] [VERIFY] ASIC REP 798, "Beware the gap" (2024): licensees' AI governance lagging their AI adoption.
- [RESEARCH] [VERIFY] APRA CPS 230 Operational Risk Management (in force 2025): accountability for technology and third-party risk.

## 4. Three scenarios to 2030 (~450 words)

The scenarios differ on two things: how fast verification capacity grows, and whether AI quality improves. The pass-through rate (the share of task gains reaching finished output) is the summary number for each.

| | Baseline: "The review backlog" | Upside: "Verification catches up" | Downside: "Slop accumulation" |
| --- | --- | --- | --- |
| Key drivers | Agentic AI across most large AU financial firms by about 2028; verification capacity grows slowly | Investment in automated checking and workflow redesign; clear regulatory guidance on AI assurance | Firms ship under-verified output to capture volume gains |
| Mechanism | Volume channel dominates; senior reviewers scarce | Quality channel falls (fewer errors), so review per unit drops | Errors lead to incidents, remediation and a regulatory clampdown, which re-tightens review |
| Pass-through | About 0.3 to 0.4 (Harvard calibration) | Rises toward 0.7 or more | Flat or negative after remediation |
| Employment mix | Shift toward review and assurance; little net job loss; junior hiring softens | Shared tools let smaller firms keep up | Junior pipeline hollows out, leaving fewer senior reviewers by 2030 |
| Industry structure | Big four advantage grows | Less concentration | Trust costs; regulator-driven consolidation |
| Signposts to watch | Review cycle times; assurance hiring | AI error rates falling; ASIC/APRA guidance issued | AI-related breach reports; graduate intake falling |

**Evidence and modelling to do**

- [HAVE] Pass-through calibration from Chen & Stratton.
- [HAVE] **Starting point for the scenario model.**
    - [Jobs and Skills Australia (ABS Labour Force, August 2025)](https://www.jobsandskills.gov.au/data/labour-market-insights/industries/financial-and-insurance-services): 552,900 employed in financial and insurance services, 3.8% of the workforce, up 2.2% over the year; median age 40.
    - [ABS national accounts](https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release): sector output (gross value added) up 4.8% in the year to June 2026.
    - **Role:** each scenario applies its pass-through rate to this 2026 base to produce output and jobs paths to 2030.
- [HAVE] **Downside signpost: adoption outrunning verification.** In an Experian survey reported by [Australian Broker (October 2026)](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx), 72% of Australian financial institutions said they use agentic AI for underwriting, but only 3% said their data was fully ready. Industry survey, so use as colour rather than backbone. [TO DO] Find the original Experian report.
- [RESEARCH] Entry-level evidence: Brynjolfsson, Chandar & Chen (2025), "Canaries in the coal mine", on young workers in AI-exposed jobs. Note the tension with Chen & Stratton's null junior effect.
- [RESEARCH] [VERIFY] A precedent for the downside: Robodebt as a public-sector case of automation without verification, plus any bank algorithm or AML failures.
- [TO BUILD] A simple scenario model producing 2026 to 2030 paths for the scenario switcher, with assumptions documented in §7.

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

- [HAVE] **The policy tension to argue.** The [Productivity Commission's interim report (August 2025)](https://ia.acs.org.au/article/2025/ai-laws-should-be-a-last-resort-productivity-commission.html) recommended pausing work on mandatory guardrails for high-risk AI and treating AI-specific regulation as a "last resort", refining existing laws instead.
    - Our thesis says the right verification standards are what *unlock* the upside scenario.
    - **Position to take:** targeted assurance standards for AI-generated outputs in finance, delivered through existing regulators (ASIC, APRA), rather than broad AI laws. This engages the PC's argument instead of ignoring it.
- [RESEARCH] [VERIFY] The PC's *final* report (due late 2025): did it keep the pause recommendation?
- [RESEARCH] [VERIFY] Current federal AI policy: the Voluntary AI Safety Standard, the status of mandatory guardrails, and any national AI plan. This has moved recently.
- [RESEARCH] The EU AI Act's treatment of credit scoring as high-risk, as a comparison point.
- [HAVE] Measurement reform comes straight from Chen & Stratton's managerial implications.

## 6. Industry Week engagement (~150 words, woven in)

**Placeholder: waiting on the Week 9 notes.** The brief requires engaging with at least one specific idea, claim or prediction from a Week 9 speaker. It must be attributed, then tested against our evidence, extended into a mechanism or scenario, or critically pushed back on. A name-drop fails.

- If the speaker is optimistic about AI productivity, test the claim against the Harvard pass-through evidence.
- If they flag risk or governance, extend it into the downside scenario or a policy lever.

## 7. Uncertainty, methods and data (~200 words)

- **External validity.** Transferring software findings to finance is an assumption. The Harvard data is mostly US firms, and finance tasks differ.
- **Short-run evidence.** The paper covers about 12 months after agent adoption, and firms may reorganise over time (the productivity J-curve; Brynjolfsson, Rock & Syverson 2018).
- **Structural breaks.** A step-change in AI reliability would collapse the quality channel and invalidate the baseline. A major AI-caused incident could trigger a regulatory shock.
- **Measurement gaps.** There is no Australian data on AI-generated output volumes or review times, and financial services output is notoriously hard to measure in national accounts.
- **AI-use disclosure.** Document how Claude was used (research, drafting support, code for the interactives) under RMIT guidance.

**Evidence**

- [HAVE] Chen & Stratton's caveats: partial versus general equilibrium, and short-run estimates.
- [HAVE] **Finance output is mostly imputed.** A [Productivity Commission staff note (2016)](https://www.pc.gov.au/inquiries-and-research/productivity-financial-insurance-services) found FISIM (imputed intermediation services) made up about 77% of finance gross output in 2011-12, and insurance and superannuation output was also largely imputed.
    - **Role:** AI gains, or their absence, will be hard to see in official statistics. This is an honest limitation, and it reinforces §1's point that forecasts and measured productivity can diverge. Cite as a structural point, since the figures are dated.
- [HAVE] CSIRO's 2025 trial of Microsoft 365 Copilot in an Australian government agency (about 300 staff): most reported benefits, 30% did not, and even those with gains expected more than they got ([CSIRO](https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky)). Shows self-reported gains are a weak measure.

## Research queue (priority order)

- [x] Australian financial services employment and output growth (Jobs and Skills Australia, ABS)
- [x] Headline Australian AI forecasts to use as a foil (Microsoft/Tech Council; Productivity Commission)
- [x] Australian AI adoption by industry (ABS)
- [x] Cost-of-error and remediation scale ($4.7bn, ASIC)
- [x] Australian bank AI adoption example (CBA)
- [ ] Sector share of GDP (ABS national accounts industry tables)
- [ ] Productivity Commission final report and current federal AI policy (2026)
- [ ] ASIC REP 798 and APRA CPS 230 details
- [ ] Demirer, Musolff & Yang (2026); Becker et al. (2025)
- [ ] Brynjolfsson, Chandar & Chen (2025) entry-level evidence
- [ ] Original sources for the ASIC $4.7bn release and the Experian survey
- [ ] Industry Week claim (from the Week 9 notes)

## Sources (so far)

To be converted to RMIT Harvard style for the final reference list.

| Source | Type | Used in |
| --- | --- | --- |
| Chen, F & Stratton, J 2026, *Artificial Intelligence in the Firm: Bottlenecks in Software Production*, Harvard University job market paper | Research paper | §1–§5, §7 |
| [ABS, *Characteristics of Australian Business, 2024-25*](https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25) | Official data | §3 |
| [ABS, *Australian National Accounts: National Income, Expenditure and Product, June 2026*](https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release) | Official data | §1, §4 |
| [Jobs and Skills Australia, *Financial and Insurance Services*](https://www.jobsandskills.gov.au/data/labour-market-insights/industries/financial-and-insurance-services) | Official data | §4 |
| [Productivity Commission interim report, *Harnessing data and digital technology* (Aug 2025), via ACS Information Age](https://ia.acs.org.au/article/2025/ai-laws-should-be-a-last-resort-productivity-commission.html) | Government report (secondary) | §1, §5 |
| [Productivity Commission staff note, *Productivity in Financial and Insurance Services* (2016)](https://www.pc.gov.au/inquiries-and-research/productivity-financial-insurance-services) | Government research | §7 |
| [Microsoft & Tech Council of Australia, *Australia's Generative AI Opportunity* (2023)](https://news.microsoft.com/en-au/features/generative-ai-could-contribute-115-billion-annually-to-australias-economy-by-2030/) | Industry report | §1 |
| [Whittle, J 2025, *Does AI actually boost productivity? The evidence is murky*, CSIRO](https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky) | Expert commentary | §1, §7 |
| [Australian Broker 2023, *Banks to pay $4.7 billion in compensation* (reporting ASIC)](https://brokernews.com.au/news/breaking-news/banks-to-pay-4-7-billion-in-compensation-to-customers-282142.aspx) | News (replace with ASIC release) | §3 |
| [Australian Broker 2026, *CommBank tops Asia-Pacific AI ranking*](https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx) | News | §3, §4 |
