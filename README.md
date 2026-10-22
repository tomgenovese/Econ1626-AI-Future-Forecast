# Generation is cheap, verification is scarce

**How AI will reshape Australian financial services to 2030**
An interactive web essay for ECON1626 Assessment 3 (AI Future Forecast), RMIT University. Tom Genovese, October 2026.

## ▶ View the live essay

**https://tomgenovese.github.io/econ1626-ai-future-forecast/forecast.html**

Best viewed on a laptop or desktop browser. It also works on mobile.

---

## Contents

1. [The argument in brief](#the-argument-in-brief)
2. [How to read the site](#how-to-read-the-site)
3. [Repository structure](#repository-structure)
4. [The scenario model](#the-scenario-model)
5. [Reproducing the results](#reproducing-the-results)
6. [Data and sources](#data-and-sources)
7. [Use of AI](#use-of-ai)

---

## The argument in brief

AI makes producing work cheap, but it does not make checking that work cheap. Evidence from 718 software firms shows AI coding agents raised code output by 30%, while finished work rose by at most 12% because the extra drafts piled up in human review (Chen & Stratton 2026).

This essay forecasts that the same bottleneck will hit **Australian financial services** harder, because an undetected error in lending, advice or compliance costs far more than a software bug. Without deliberate investment in checking capacity, AI will lift the *volume* of work far faster than *finished, compliant output* by 2030. The essay sets out three scenarios and a policy playbook built on existing regulators (ASIC and APRA), and tests a claim from Industry Week speaker Dave Lemphers (Maincode).

## How to read the site

Scroll from top to bottom. The function-key bar (F1 to F7) jumps between sections, and the ticker at the top updates as you go.

| Section | What it argues | What you can do |
| --- | --- | --- |
| F1 The productivity puzzle | Forecasts promise a boom; productivity is flat | **Guess first:** guess the Harvard result before it is revealed |
| F2 What happened in software | Coding output +30%, finished work at most +12% | Step cards highlight the evidence chart |
| F3 Why finance bottlenecks harder | Finance AI use 1% → 24%; errors cost more | **Checkout queue:** a live simulation with four sliders and an ASIC alert |
| F4 Three scenarios to 2030 | Drafts rise ~10% in every future; checking decides the outcome | **Scenario switcher:** four charts update for each scenario |
| F5 Policy playbook | Targeted checking standards, not a new AI law | **Policy dial:** spend three credits on levers and see the 2030 result |
| F6 Methods, data and uncertainty | How the model works and where it could be wrong | **Show the maths:** change key assumptions live |
| F7 References | RMIT Harvard reference list | |

Hover over dotted-underlined terms for plain-English definitions. Every chart has a **Show data table** option.

## Repository structure

```
econ1626-ai-future-forecast/
├── index.html              Redirects to forecast.html
├── forecast.html           The essay (the page markers should read)
├── assets/
│   ├── style.css           Terminal theme and layout
│   ├── model.js            The scenario model (runs in the browser)
│   ├── app.js              Boot sequence, ticker, navigation, charts, scenario switcher
│   └── modules.js          Interactives: step cards, guess first, checkout queue, policy dial, assumptions
├── draft/
│   ├── outline.md          Research outline with evidence status for each section
│   ├── essay.md            Draft 1 of the essay text (superseded by forecast.html)
│   ├── model.md            Full model specification, parameters and sources
│   ├── model_prototype.py  Python prototype of the model, used for calibration
│   └── site-plan.md        Design and interactive specifications
└── README.md               This file
```

The site is plain HTML, CSS and JavaScript, with no frameworks, build step or external libraries beyond Google Fonts.

## The scenario model

The forecast is driven by a small model of the **verification bottleneck**. Each year from 2026 to 2030 it compares:

- **checking demand:** how much checking the AI-boosted volume of drafts needs, and
- **checking capacity:** how much checking people and AI checkers can do.

Whatever cannot be checked becomes backlog, so the **pass-through** (the share of AI's extra work that becomes finished output) is calculated, not assumed.

**Calibration.** With software settings and full adoption, the model reproduces the Harvard results: drafts +30%, checking staff +14%, finished output about +6% (pass-through 0.20).

**Key results for 2030** (versus a world without AI):

| Scenario | Drafts | Finished output | Pass-through | Net after error costs |
| --- | --- | --- | --- | --- |
| Baseline: the review backlog | +9.5% | +1.1% | 0.12 | about 0% |
| Upside: verification catches up | +10.6% | +10.6% | 1.00 | about +8% |
| Downside: slop accumulation | +10.6% | +7.6% | 0.72 | falls to −3.5% in 2029 |

Every input is marked in `draft/model.md` as **sourced**, **calibrated** or an **assumption**. The two assumptions that matter most, the finance checking multiplier (1.5) and the cost of each slipped error (10 drafts), can be changed live in the site's *Show the maths* panel.

## Reproducing the results

The Python prototype prints the full scenario tables. It needs Python 3 and no extra packages:

```bash
python3 draft/model_prototype.py
```

`assets/model.js` is a line-for-line port of the prototype, and produces the same numbers in the browser. To run the site locally, open `forecast.html` in a browser, or serve the folder:

```bash
python3 -m http.server
# then open http://localhost:8000/forecast.html
```

## Data and sources

| Input | Source |
| --- | --- |
| AI effects on coding, review and output | Chen & Stratton (2026), Harvard University job market paper |
| AI adoption by industry, 2024–25 | ABS (2026a), *Characteristics of Australian Business* |
| GDP per hour worked; sector output growth | ABS (2026b), *Australian National Accounts* |
| Sector employment (552,900) | Jobs and Skills Australia (2025) |
| Share of work AI can draft or assist (44%) | Microsoft & Tech Council of Australia (2023) |
| AI governance in finance | ASIC (2024), *REP 798 Beware the gap* |
| Policy settings | National AI Plan (2025); Productivity Commission (2025); APRA CPS 230 |
| Industry Week claim | Lemphers (2026), Industry Week presentation; Lemphers (2025), *Forbes Australia* |

The full RMIT Harvard reference list is in section F7 of the essay.

## Use of AI

In line with the assessment's guidance, AI tools were used and are acknowledged here. I used Claude (Anthropic) to help find and summarise sources, structure the argument, draft text that I then edited, and write the code for the model, charts and interactives. I checked every figure against its original source.
