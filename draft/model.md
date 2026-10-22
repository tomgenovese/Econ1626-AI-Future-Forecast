# Scenario model — working notes

*Working document, 22 Oct 2026. Specification for the scenario model behind the web essay's charts and interactives. Numbers in "Prototype results" come from a first-pass Python prototype and will be tuned when the model is rebuilt in JavaScript for the site.*

## 1. What the model does

The model forecasts AI's effect on **Australian financial and insurance services from 2026 to 2030**, compared with a world without AI.

Its key feature is that **pass-through is not assumed. It emerges from the bottleneck.** Each year the model compares:

- **checking demand**: how much checking the AI-boosted volume of drafts needs, and
- **checking capacity**: how much checking people (and AI checkers) can actually do.

If capacity keeps up, extra drafts become finished output. If not, the excess piles up as a **backlog** and pass-through falls by itself.

*Analogy for the site:* AI speeds up how fast items go onto the supermarket conveyor belt; checking is the cashiers. The model counts the items and the cashiers, and works out how many get through and how long the queue gets.

## 2. How it ties to the essay's findings

| Essay finding | Where it lives in the model |
| --- | --- |
| Harvard: drafts +30%, finished output at most +12%, reviewers +14% (Section 2) | **Calibration test.** With software settings, the model must reproduce these numbers |
| Volume channel vs quality channel (Section 2) | Two separate inputs: **draft volume** and **extra checking per AI draft** |
| Finance bottlenecks harder: high cost of an undetected error, $4.7bn remediation (Section 3) | **Finance multiplier** on extra checking per AI draft, and a **remediation cost** on errors that slip through |
| ABS: finance AI adoption 1% → 24% (Section 3) | **Adoption path** starts from the ABS figure |
| ASIC REP 798: governance lagging adoption (Section 3) | Checking capacity **starts behind** demand and reallocates slowly |
| Junior pipeline risk (Section 4 downside) | After 2028, downside capacity **shrinks** as fewer juniors become senior reviewers |
| Lemphers: AI as a productivity lift (Section 4) | Holds only when capacity keeps pace, which is visible in the upside |
| Lemphers: opaque black-box models (Section 5) | **Auditability** improves how well AI checkers catch errors |
| AI checking as a partial fix (Section 5) | **AI checking share** lever, with a slip-through rate and a human sign-off cap |

## 3. Model structure

Each year *t* from 2026 to 2030. All quantities are indexes where the no-AI world = 1.

1. **Share of work AI drafts:** `s = adoption × exposure`
2. **Draft volume:** `D = 1 + s × task_gain`
3. **Checking per draft:** `r = 1 + q × finance_multiplier × s`, where *q* is the extra checking an AI draft needs (the quality channel)
4. **Checking demand:** `Cd = D × r`
5. **Human checking capacity:** `H = 1 + reallocation × (Cd − 1)`. Firms move staff into checking, but only part of the way (in the downside, capacity shrinks after 2028)
6. **Finished output:** `F = min(D, H ÷ ((1 − ai_check_share) × r))`. AI checkers take a share of the checking load
7. **Pass-through:** `(F − 1) ÷ (D − 1)`
8. **Backlog:** running total of `D − F` (unchecked drafts)
9. **Errors that slip through** (per 1,000 finished items): `base_error × (1 + s) × [(1 − ai_share) × (1 − human_catch) + ai_share × (1 − ai_catch)]`
10. **Net output:** `F` minus next year's **remediation cost** on errors above the pre-AI level. This is what the "measured productivity" chart shows

## 4. Parameters

| Parameter | Value | Source or basis | Status |
| --- | --- | --- | --- |
| Task gain on AI-drafted work | 0.30 | Chen & Stratton (2026): lines of code +30% | Sourced |
| Exposed share of work | 0.44 | Microsoft & Tech Council (2023): 44% of Australian task hours could be automated or augmented | Sourced (economy-wide, not finance-specific) |
| Starting adoption | 0.24 (2024–25) | ABS (2026a) | Sourced |
| Extra checking per AI draft, *q* | 0.075 | **Calibrated** so software reproduces finished output +6% with reviewers +14% | Calibrated |
| Reallocation rate (baseline) | 0.35 | **Calibrated**: reviewers +14% against a 40% rise in checking demand in the Harvard data | Calibrated |
| Finance multiplier | 1.5 | Cost of an undetected error is higher in finance (Section 3) | **Assumption, sensitivity-test 1.0–2.0** |
| Human catch rate | 0.90 | Illustrative | **Assumption** |
| AI catch rate | 0.50–0.85 by scenario | Lower than humans; rises with auditability | **Assumption** |
| Base error rate | 5 per 100 drafts | Illustrative | **Assumption** |
| Remediation cost | 10 drafts' worth per extra slipped error, one-year lag | Illustrative, motivated by the $4.7bn remediation | **Assumption, sensitivity-test 5–15** |
| Sector employment, 2025 | 552,900 | Jobs and Skills Australia (2025) | Sourced |
| Starting checking share of staff | ~25% | Harvard baseline review share 29% | **Assumption for finance** |

**Calibration check (software, full adoption):** drafts +30%, checking capacity +14%, finished output +6%, pass-through 0.20. This matches Chen & Stratton, where finished output rose by an insignificant amount and at most 12%.

## 5. Scenario settings

| Setting | Baseline: review backlog | Upside: verification catches up | Downside: slop accumulation |
| --- | --- | --- | --- |
| Adoption path 2026→2030 | 30% → 72% | 30% → 80% | 30% → 80% |
| Reallocation into checking | 0.35 (as in software) | 0.70 (deliberate investment) | 0.35, then capacity shrinks 1%/yr from 2028 (junior cuts) |
| AI checking share | Today's level (built into calibration) | Rises to 20%, accountable | Rises to 40% as a rubber stamp, cut to 15% after the clampdown |
| AI catch rate | 0.60 | 0.85 (auditable models) | 0.50 (black-box models) |
| Regulatory shock | None | ASIC/APRA guidance | 2029 clampdown: checking per draft +5% |

## 6. Policy dial and AI checker levers

Each lever on the site moves specific inputs, so readers see why it works.

| Lever (essay Section 5) | Inputs it moves | Expected effect |
| --- | --- | --- |
| Guidance on checking AI output | Raises AI catch rate; caps AI checking share | Fewer slipped errors; avoids the downside clampdown |
| Build checking capacity | Reallocation rate ↑ | Smaller backlog, higher pass-through |
| Protect the junior pipeline | Removes the post-2028 capacity shrink | Stops the downside from becoming structural |
| Fund shared verification tools | Extra checking per AI draft *q* ↓ | Attacks the quality channel directly |
| Auditable models (Lemphers) | AI catch rate ↑ | Lets AI checking go higher safely |
| **AI checker slider** | AI checking share 0–60% | Backlog falls, but slipped errors rise; past ~30% with poor catch rates, remediation outweighs the gain |
| Measurement reform | No change to output | Switches the chart from "drafts" to "finished output" view, which is the point |

## 7. Charts the model drives

1. **Drafts vs finished output** (headline): two lines pulling apart to 2030
2. **Review backlog**: cumulative unchecked work, the "AI slop" visual
3. **Jobs mix**: total jobs roughly flat (Harvard found no employment effect), with checking and assurance roles growing as a share
4. **Measured productivity**: net output path compared with what headline forecasts imply

## 8. Prototype results (first pass)

Finished output by 2030, relative to a world without AI:

| | Drafts | Finished output | Pass-through | Net of remediation |
| --- | --- | --- | --- | --- |
| Baseline | +9.5% | +1.1% | 0.12 | about −0.3% |
| Upside | +10.6% | +10.6% | 1.00 | about +8.3% |
| Downside | +10.6% | +7.6% | 0.72 | +4.5% in 2027, then −3.5% in 2029; about +1.5% by 2030 |

**What this shows:**

- **Baseline pass-through (0.12) is lower than software's (0.20).** That is the finance multiplier at work, and it is the essay's central claim in numbers.
- **The upside only works because checking capacity is built.** Drafts are almost the same as in the baseline; the difference is entirely in checking.
- **The downside looks good first, then bad.** It ships unchecked drafts early (higher apparent output), then remediation and the clampdown hit. That is the "slop accumulation" story.

## 9. Changes this forces in the essay

- **Scenario figures in Section 4 must be updated.** The baseline was "roughly 10%" and becomes **about 1%**; the upside was "about 20%" and becomes **about 8–10%**. The 44% exposure share is what shrinks them.
- **Add the exposure share** (44%, Microsoft & Tech Council 2023) to Sections 4 and 6.
- **Add about 60 words on AI checkers** to Section 5. There is about 120 words of headroom.
- **The pass-through in Section 2** stays as "at most 0.4"; the model's central software estimate is 0.20.

## 10. Open items

- [ ] Tom to review the assumptions table, especially the finance multiplier and the remediation cost
- [ ] Sensitivity runs: finance multiplier 1.0 / 1.5 / 2.0; remediation cost 5 / 10 / 15
- [ ] Decide starting checking share for the jobs-mix chart
- [ ] Rebuild in JavaScript as `model.js`, with scenario presets in `data/scenarios.json`
- [ ] Save sourced inputs (ABS adoption by industry, Harvard results, forecasts) in `data/`
- [ ] Update essay Sections 4, 5 and 6
