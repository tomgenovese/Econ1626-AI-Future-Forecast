# Website plan — forecast.html

*Working document, 22 Oct 2026. Agreed design and interactives for the web essay.*

## Look and feel

- **Theme:** trading terminal. Black background, neon-green primary, amber for backlog and warnings, red for the downside scenario and alerts.
- **Type:** monospace for numbers, labels, tickers and the terminal UI; a clean sans-serif for the essay text so 2,000 words stay readable.
- **Layout:** scrollytelling. Essay text on one side, a sticky panel on the other that animates with each paragraph. Collapses to one column on mobile.
- **Plain English:** no unexplained symbols. Jargon gets a hover glossary tooltip.

## Page flow

| # | Section (essay) | Interactive |
| --- | --- | --- |
| 0 | Opening | **Terminal boot sequence** (plays every time, about 4 seconds), then the thesis types out. **Ticker tape** pinned at the top for the whole page |
| 1 | The productivity puzzle | **"Guess first"**: reader guesses how much finished output rose when code rose 30%, then the reveal (at most 12%) and the forecasts-vs-productivity chart |
| 2 | What happened in software | **Approve-the-drafts game** (60 seconds), then the Harvard results chart |
| 3 | Why finance bottlenecks harder | **Conveyor animation** running on the real model, with sliders, including the **AI checker** slider and **ASIC alert**; ABS adoption chart |
| 4 | Three scenarios to 2030 | **Scenario switcher**: four charts animate (drafts vs finished, backlog, jobs mix, measured productivity) |
| 5 | Policy playbook | **Policy dial with a 3-credit budget**, then **You're the regulator** (5 decisions, 2026 to 2030) |
| 6 | Methods, data, uncertainty | **Assumptions panel**: change key assumptions and see results shift |
| — | References | Plain RMIT Harvard list; in-text (Author year) citations |
| — | Throughout | **Hover glossary** |

## Interactive specs

### Ticker tape
Scrolling header. Values change with the section in view, e.g. `DRAFTS ▲ +30% │ SHIPPED ▬ ≤12% │ REVIEW TIME ▲ +49% │ FINANCE AI USE ▲ 24%`.

### Terminal boot sequence
Typed lines such as `> connecting to 718 firms…`, `> loading 726,000 workers…`, `> running forecast to 2030…`, then the title and thesis type out. Plays on every load, about 4 seconds.

### "Guess first"
A slider from 0% to +30%: "Coders wrote 30% more code. How much more finished work did firms ship?" On submit: the reveal (at most 12%), the gap between the reader's guess and the answer, and a transition into the thesis.

### Approve-the-drafts game (60 seconds)
- Drafts arrive in a queue and the arrival rate speeds up over time. The first half is **code pull requests**; at the halfway mark it switches to **finance documents** (loan applications, statements of advice, compliance reports), with a banner such as `> AI AGENTS NOW DEPLOYED IN FINANCE`.
- Each draft shows a short summary. Some contain a visible error. The reader clicks **APPROVE** or **REJECT**.
- Live counters: queue length, approved, rejected, errors missed.
- End screen: "You approved X drafts, missed Y errors, and Z were still waiting. That's the bottleneck." Then it links to the Harvard numbers.
- Skip button for readers who don't want to play.

### Conveyor animation (the simulator)
- Items flow onto a belt; cashiers (checkers) process them; a queue forms when the belt outruns the cashiers.
- Sliders: **AI drafting speed**, **number of checkers**, **AI error rate**, **AI checking share**.
- Counters: finished output, backlog, errors slipped through.
- Past a threshold on AI checking with a poor catch rate, a flashing `⚠ ASIC ENFORCEMENT ACTION` alert fires.
- Runs on the same model code as the scenario charts.

### Scenario switcher
Buttons: Baseline / Upside / Downside. The four charts animate between scenarios. Short caption per scenario with its trigger and signposts.

### Policy dial (3-credit budget)
Five levers, each costing one credit: guidance on checking AI output, build checking capacity, protect the junior pipeline, fund shared verification tools, auditable models. Measurement reform is free and switches the chart view. Pulling a lever shifts specific model inputs (see model.md section 6) and the charts update. A trade-off note appears for each lever.

### You're the regulator (5 decisions)
One decision per year from 2026 to 2030, e.g. "A bank wants AI to sign off small loans without human review: allow or block?" Each choice moves model inputs. The end screen shows which scenario the reader produced, with their 2030 outcome.

### Assumptions panel
Collapsible "Show the maths": sliders for finance multiplier, remediation cost, exposure share and AI catch rate. Shows formulas in plain English and links to the model files.

### Hover glossary
Dotted underline on terms like *pass-through*, *checking capacity*, *backlog*, *remediation*, *CPS 230*. Tooltip with a one-line plain-English definition.

## Files

| File | Contents |
| --- | --- |
| `forecast.html` | The essay page |
| `assets/style.css` | Terminal theme |
| `assets/model.js` | The scenario model (port of `Content/model_prototype.py`) |
| `assets/app.js` | Interactives and charts |
| `data/scenarios.json` | Scenario presets |
| `data/sources.json` | Sourced inputs: ABS adoption by industry, Harvard results, forecasts |

## Build order (cut from the bottom if time runs short)

1. Page shell, theme, essay text, ticker, boot sequence
2. `model.js` and scenario switcher with the four charts
3. "Guess first" and the Harvard and ABS charts
4. Conveyor animation with sliders and the ASIC alert
5. Policy dial
6. Approve-the-drafts game
7. Assumptions panel and hover glossary
8. You're the regulator

## Essay updates needed

- Section 4: replace the [MODEL] figures with model output (baseline about +1%, upside about +8–10%), and add the 44% exposure share
- Section 5: add about 60 words on AI checkers
- Section 6: link to the model files; add the 44% exposure share to the method
