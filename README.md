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
4. [Use of AI](#use-of-ai)

---

## The argument in brief

AI makes producing work cheap, but it does not make checking that work cheap. Evidence from 718 software firms shows AI coding agents raised code output by 30%, while finished work rose by at most 12% because the extra drafts piled up in human review (Chen & Stratton 2026).

This essay forecasts that the same bottleneck will hit **Australian financial services** harder, because an undetected error in lending, advice or compliance costs far more than a software bug. Without deliberate investment in checking capacity, AI will lift the *volume* of work far faster than *finished, compliant output* by 2030. The essay sets out three scenarios and a policy playbook built on existing regulators (ASIC and APRA), and tests a claim from Industry Week speaker Dave Lemphers (Maincode).

## How to read the site

Scroll from top to bottom. The function-key bar (F1 to F7) jumps between sections, and the ticker at the top updates as you go.

| Section | What it argues | What you can do |
| --- | --- | --- |
| F1 The productivity puzzle | Forecasts promise a boom; productivity is flat | **Guess first:** guess the Harvard result before it is revealed |
| F2 What happened in software | Coding output +30%, finished work at most +12% | **Approve the drafts:** a 60-second reviewing game |
| F3 Why finance bottlenecks harder | Finance AI use 1% → 24%; errors cost more | **Checkout queue:** a live simulation with four sliders and an ASIC alert |
| F4 Three scenarios to 2030 | Drafts rise ~10% in every future; checking decides the outcome | **Scenario switcher:** four charts update for each scenario |
| F5 Policy playbook | Targeted checking standards, not a new AI law | **Policy dial** and **You're the regulator** |
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
│   └── modules.js          Interactives: guess first, drafts game, checkout queue, policy dial, regulator, assumptions
├── Content/
│   ├── outline.md          Research outline with evidence status for each section
│   ├── essay-final.md      The final essay text in one readable file (mirrors the website)
│   ├── essay.md            Draft 1 of the essay text (superseded)
│   ├── model.md            Full model specification, parameters and sources
│   ├── model_prototype.py  Python prototype of the model (run: python3 Content/model_prototype.py)
│   └── site-plan.md        Design and interactive specifications
└── README.md               This file
```

The site is plain HTML, CSS and JavaScript, with no frameworks or build step.

## Use of AI

I used Claude (Anthropic) throughout this assessment. The bottleneck idea (that checking, not producing, limits AI's gains) came from reading the Chen & Stratton (2026) Harvard paper on AI coding agents. Applying it to Australian financial services for this assessment was my own idea, and I made that paper the central evidence. Claude helped me find the other sources, and I verified each one against the original; this caught errors, including a figure that had to be re-sourced. Claude expanded my outline and edits into fuller drafts, which I then revised and cut to length. Claude wrote the code for the scenario model, charts and interactives. Over many rounds of back-and-forth, I directed the design, tested each interactive and asked for changes until the site worked as I intended. I take responsibility for every claim in this essay.

The same statement appears on the website, just above the references.
