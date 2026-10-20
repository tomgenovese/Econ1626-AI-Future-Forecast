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
- [RESEARCH] One headline Australian forecast to push against, such as a consultancy, Treasury or Tech Council estimate of AI's GDP contribution. This gives the thesis a foil.

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
- [RESEARCH] Size of Australian financial and insurance services: share of GDP, employment and labour productivity trend (ABS national accounts and Labour Force).
- [RESEARCH] Australian bank AI adoption examples, from public statements by CBA, NAB, ANZ and Westpac on AI in engineering, operations and customer service.
- [RESEARCH] Cost-of-error evidence: the scale of Australian remediation programs after the Hayne Royal Commission, showing ℓ is large.
- [RESEARCH] [VERIFY] ASIC REP 798, "Beware the gap" (2024): licensees' AI governance lagging their AI adoption.
- [RESEARCH] [VERIFY] APRA CPS 230 Operational Risk Management (in force 2025): accountability for technology and third-party risk.
- [RESEARCH] Tech-sector employment inside banks. Banks are large software employers, which links the software evidence to finance directly.

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
- [RESEARCH] Baseline sector labour productivity growth (ABS and Productivity Commission) to anchor the 2026 starting point.
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

- [RESEARCH] [VERIFY] Current Australian Government AI policy: the Voluntary AI Safety Standard, the proposals for mandatory guardrails in high-risk settings, and any 2025 or 2026 national AI plan. This has moved recently.
- [RESEARCH] Productivity Commission work on AI and data (2025).
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
- [RESEARCH] The ABS note on measuring financial services output (FISIM), supporting the measurement-gap point.

## Research queue (priority order)

- [ ] Australian financial services size, employment and productivity (ABS, Productivity Commission)
- [ ] ASIC REP 798 and APRA CPS 230 details
- [ ] Current Australian Government AI policy position (2026)
- [ ] Demirer, Musolff & Yang (2026); Becker et al. (2025)
- [ ] Brynjolfsson, Chandar & Chen (2025) entry-level evidence
- [ ] Australian bank AI adoption statements
- [ ] Cost-of-error and remediation scale in Australian finance
- [ ] A headline Australian AI-GDP forecast to use as a foil
- [ ] Industry Week claim (from the Week 9 notes)
