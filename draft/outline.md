# Draft outline — "Generation is cheap, verification is scarce"

**ECON1626 Assessment 3 — AI Future Forecast**
Scope: Australian financial services, 2026–2030, using software engineering as the leading-indicator case study.
Target length: 2,000 words (±10%). Word budgets below are guides, not limits.

Legend: **[HAVE]** evidence already in hand · **[RESEARCH]** needs sourcing · **[VERIFY]** I believe this but it must be checked before it goes in

---

## 1. Landing / Thesis (~200 words)

**Core claim:** By 2030, AI will lift the *volume* of work produced in Australian financial services far faster than it lifts *finished, compliant output*. The binding constraint shifts from generating work to verifying it — and finance, where errors carry legal and financial liability, is where this constraint bites hardest.

Main points:
- The hype frame: AI as "a country of geniuses in a data centre" / "white-collar bloodbath". Both assume task gains pass straight through to output and jobs.
- Our frame: production is a chain of complementary tasks (O-ring / weak-link logic). Speed up one link and the slowest remaining link sets the pace.
- Forecast headline (to calibrate): large task-level productivity gains, modest measured sector productivity gains, a shift of labour *toward* review rather than mass displacement — unless verification capacity is built deliberately.
- Why 2030: long enough for agentic tools to diffuse through banks and super funds; short enough that regulation, workforce pipelines and review practices are still adjusting (structural break risk discussed in §7).

Evidence:
- [HAVE] Chen & Stratton (2026), Harvard JMP — framing quotes from intro (Amodei references).
- [HAVE] Kremer (1993) O-ring; Gans & Goldfarb (2026) O-ring automation; Jones & Tonetti (2026) weak links (cited in Chen & Stratton).
- [RESEARCH] One headline AU forecast to push against (e.g. a consultancy/Treasury/Tech Council estimate of AI's GDP contribution) — so the thesis has a foil.

---

## 2. The evidence hook: what happened in software (~300 words)

**Main point:** Software is where AI agents arrived first and hardest, so it shows us the future of other knowledge work. The result: more drafts, not more finished product.

Key findings to present (and chart):
- [HAVE] AI agents raise coding activity: +30% lines of code, +20% commits, +23% pull requests (718 firms, staggered diff-in-diff).
- [HAVE] Finished output (Jira issues resolved) shows no significant rise; CI rules out gains above ~12% — i.e. **pass-through of at most ~0.4**.
- [HAVE] Review is the jam: time-to-merge +49%, share of PRs needing changes ~doubles (13% → ~25%), comments per PR +35%.
- [HAVE] Firms respond by moving people into review (+14% share of workers reviewing); no significant employment effect overall or by seniority.
- [HAVE] AI review tools don't dissolve it: ~80% of firms use them, but only ~23% of review comments are AI-generated; humans stay in the loop.
- [HAVE] Two channels (their model): *volume* (more drafts to check) and *quality* (higher bug rate → more checking per draft). Extra reviewers fix the first; only better technology fixes the second.
- [RESEARCH] Corroborating source: Demirer, Musolff & Yang (2026) NBER — "writing code vs shipping code" (open-source evidence of the same gap).
- [RESEARCH] Counterpoint: Becker et al. (2025, METR) — experienced developers *slower* with AI. Shows the evidence isn't one-sided.

Tom's angle to weave in: "AI slop" — a pile of unchecked output landing on human desks, with no increase in final products shipped.

---

## 3. From capabilities to economic channels in AU finance (~350 words)

**Main point:** The mechanism transfers to finance — and is *stronger* there, because the cost of an undetected error is higher.

Channel map (capability → task → output → economy):
1. **Generation capability** — agents draft code, credit memos, advice documents (SOAs), compliance reports, customer responses.
2. **Productivity channel** — more drafts per worker.
3. **Verification channel** — every draft must be checked against legal duties (responsible lending, best-interests duty, AML/CTF, disclosure). Checking is done by senior, accountable staff.
4. **Output** — finished, compliant products/decisions are capped by verification throughput.
5. **Labour & structure** — staffing shifts toward review/assurance; returns to senior judgement rise; firms with strong review infrastructure (big four banks) pull ahead of smaller players → concentration effect.

The finance twist, using the paper's own model:
- In the model, optimal review effort rises with the loss per undetected error (ℓ). Finance has very high ℓ (regulatory penalties, remediation, reputational damage).
- So review already takes a larger share of costs (s_R high) → the bottleneck shortfall (∝ λ·s_R) is *bigger* in finance than in software. This is an original extension worth highlighting for the economics criterion.

Evidence:
- [HAVE] 16% of Chen & Stratton's sample are financial services/insurance firms; finance firms were *later* adopters of AI assistants (balance table).
- [RESEARCH] Size of AU financial & insurance services: share of GDP, employment, labour productivity trend (ABS national accounts / Labour Force).
- [RESEARCH] AU bank AI adoption examples (e.g. CBA, NAB, ANZ, Westpac public statements on AI in engineering/operations/customer service).
- [RESEARCH] Cost-of-error evidence: scale of AU remediation programs post-Hayne Royal Commission (shows ℓ is large).
- [RESEARCH] ASIC REP 798 "Beware the gap" (2024) — licensees' AI governance lagging AI adoption. [VERIFY report number/year]
- [RESEARCH] APRA CPS 230 Operational Risk Management (in force 2025) — accountability for technology and third-party risk. [VERIFY]
- [RESEARCH] Tech-sector employment share inside banks (banks as large software employers — links software evidence to finance directly).

---

## 4. Three scenarios to 2030 (~450 words)

Common structure for each: key drivers → mechanism → outcomes (task productivity, finished output, employment mix, industry structure) → signposts to watch.

**Baseline — "The review backlog"**
- Agentic AI diffuses across most large AU financial firms by ~2028.
- Verification capacity grows slowly (senior staff scarce, slow reallocation).
- Pass-through calibrated to the Harvard result (~0.3–0.4 of task gains reach finished output).
- Labour shifts toward review/assurance; little net job loss; junior hiring softens.
- Measured sector productivity: modest uplift, well below vendor claims.

**Upside — "Verification catches up"**
- Investment in testing/automated checking, workflow redesign, clear regulatory guidance on AI assurance.
- AI quality improves (bug-rate channel falls) so review per unit drops.
- Pass-through rises toward ~0.7+; productivity gains become visible in sector data.
- Smaller firms can access shared assurance tools → less concentration.

**Downside — "Slop accumulation"**
- Firms ship under-verified AI output to capture the volume gains.
- Error incidents → remediation costs, enforcement action, regulatory clampdown (mandatory human sign-off), which re-tightens the bottleneck.
- Junior pipeline hollows out (fewer entry roles) → fewer future senior reviewers by 2030 → bottleneck becomes structural.
- Productivity flat or negative after remediation; trust costs.

Evidence / modelling to do:
- [HAVE] Pass-through calibration from Chen & Stratton.
- [RESEARCH] Baseline sector labour productivity growth (ABS / Productivity Commission) to anchor the 2026 starting point.
- [RESEARCH] Entry-level evidence: Brynjolfsson, Chandar & Chen (2025) "Canaries in the coal mine" (young workers in AI-exposed jobs) — note tension with Chen & Stratton's null junior effect.
- [RESEARCH] Precedent for downside: an AU or global incident of automated-system failure in finance (e.g. Robodebt as a public-sector automation-without-verification analogue; any bank algorithm/AML failures). [VERIFY details]
- [TO BUILD] Simple scenario model (spreadsheet → JSON) producing 2026–2030 paths for the scenario switcher; assumptions documented in Methods.

---

## 5. Policy playbook (~350 words)

Organise as: lever → who acts → when → effect on each scenario → trade-off / unintended consequence → KPI to track.

1. **AI assurance standards** (ASIC/APRA guidance on verifying AI-generated outputs)
   - Pushes toward upside; trade-off: too prescriptive (mandatory human sign-off on everything) *worsens* the bottleneck. KPI: AI-related breach reports, time-to-approval.
2. **Invest in verification capacity** (firms; possibly tax incentives for assurance tooling/training)
   - Fixes the *volume* channel. KPI: review cycle times, share of staff in assurance roles.
3. **Protect the junior-to-senior pipeline** (graduate programs, apprenticeship-style review roles)
   - Prevents the downside's structural bottleneck; trade-off: short-run cost when juniors look "replaceable". KPI: graduate intake, entry-level vacancies (Jobs and Skills Australia).
4. **Fund verification technology R&D / shared tools** (government + industry)
   - Only lever that fixes the *quality* channel; also reduces concentration. KPI: error/rework rates.
5. **Measurement reform** (firms & ABS) — stop judging AI by drafts produced; measure finished output.
   - Directly from Chen & Stratton's managerial implication.

Evidence:
- [RESEARCH] Australian Government AI policy status: Voluntary AI Safety Standard; proposals for mandatory guardrails in high-risk settings; any 2025–26 national AI plan. [VERIFY current status — this has moved]
- [RESEARCH] Productivity Commission work on AI and data (2025).
- [RESEARCH] EU AI Act treatment of credit scoring as high-risk (comparison point).

---

## 6. Industry Week engagement (~150 words, woven in — not a stand-alone box)

**PLACEHOLDER — waiting on friend's Week 9 notes.**
Requirement: engage with ≥1 specific idea/claim from a Week 9 speaker, attribute it, and either test it against our evidence, extend it into a mechanism/scenario, or push back. A name-drop fails.
Plan: pick the claim that most directly speaks to productivity/jobs/verification, then
- if the speaker is optimistic about AI productivity → test it against the Harvard pass-through evidence;
- if they flag risk/governance → extend it into the downside scenario or a policy lever.

---

## 7. Uncertainty, methods & data (~200 words)

Main points:
- **External validity:** software → finance transfer is an assumption; mostly US firms in the Harvard data; finance tasks differ.
- **Short-run evidence:** paper covers ~12 months post-agent adoption; firms may reorganise over time (productivity J-curve — Brynjolfsson, Rock & Syverson 2018).
- **Structural breaks:** a step-change in AI reliability would collapse the quality channel and invalidate the baseline; a major AI-caused incident could trigger a regulatory shock.
- **Measurement gaps:** no AU data on AI-generated output volumes or review times; financial services output is notoriously hard to measure in national accounts.
- **AI-use disclosure:** document how Claude was used (research, drafting support, code for interactives) per RMIT guidance.

Evidence:
- [HAVE] Chen & Stratton caveats (partial vs general equilibrium, short-run).
- [RESEARCH] ABS note on measuring financial services output (FISIM) — supports the measurement-gap point.

---

## Research queue (priority order)
1. AU financial services size, employment, productivity (ABS/PC)
2. ASIC REP 798 + APRA CPS 230 details
3. Current Australian Government AI policy position (2026)
4. Demirer, Musolff & Yang (2026); Becker et al. (2025)
5. Brynjolfsson, Chandar & Chen (2025) entry-level evidence
6. AU bank AI adoption statements
7. Cost-of-error / remediation scale in AU finance
8. A headline AU AI-GDP forecast to use as a foil
9. Industry Week claim (from friend's notes)
