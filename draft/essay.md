# Generation is cheap, verification is scarce

## How AI will reshape Australian financial services to 2030

*Draft 1 of the essay text for the web essay, 22 Oct 2026. Figures marked [MODEL] are illustrative until the scenario model is built and must be confirmed. Charts and interactives are marked [CHART] or [INTERACTIVE] where they will sit on the site.*

## 1. The productivity puzzle

In 2023, Microsoft and the Tech Council of Australia estimated that generative AI could add up to $115 billion a year to the Australian economy by 2030 (Microsoft & Tech Council of Australia 2023). The Productivity Commission's final report on data and digital technology expects multifactor productivity gains above 2.3% over the next decade, worth about $116 billion (Productivity Commission 2025). Yet in the year to June 2026, Australia's GDP per hour worked fell 0.2% (ABS 2026b). AI is everywhere except in the productivity statistics.

[CHART: forecasts versus measured productivity]

This essay argues that the gap is not just a matter of time. It is a bottleneck. AI makes producing work cheap, but it does not make checking that work cheap. Production is a chain of complementary tasks, and when one link speeds up, the slowest remaining link sets the pace (Kremer 1993; Jones & Tonetti 2026). In knowledge work, that slowest link is increasingly human verification.

My forecast is that by 2030, AI will lift the *volume* of work produced in Australian financial services far faster than it lifts *finished, compliant output*. Gains at the task level will be large, measured gains in sector productivity modest, and labour will shift toward review rather than disappear, unless verification capacity is deliberately built. Finance is where this constraint bites hardest, because an undetected error there costs more than almost anywhere else.

I use 2030 as the horizon because it is long enough for AI agents to spread through banks, insurers and super funds, but short enough that regulation, training pipelines and review practices will still be catching up.

## 2. What happened in software

Software engineering is where AI agents arrived first and hardest, which makes it a preview of what is coming for other knowledge work. The clearest evidence comes from Chen and Stratton (2026), who tracked about 726,000 workers across 718 firms and compared firms before and after they adopted AI coding agents.

The agents worked. Lines of code per worker rose 30%, commits 20% and pull requests (packages of code submitted for review) 23%. But finished output did not follow. The number of completed work items barely moved, and the estimates rule out any increase larger than 12%. At most, then, around 0.4 of the coding gain reached the final product.

[CHART: coding activity up, finished output flat]

The missing gains piled up in review. After firms adopted agents, the time from submitting code to approving it rose 49%, from about 7 to 10.5 days. The share of submissions sent back for changes nearly doubled, from 13% to about 25%, and reviewers left 35% more comments on each one. Firms responded by moving people into checking: the share of workers doing code review rose 14%, while overall employment did not change.

AI review tools have not solved the problem. By March 2026 nearly 80% of the firms had used them, yet only 23% of review comments were written by AI (Chen & Stratton 2026). Humans remain the gatekeepers.

Chen and Stratton's model explains why. AI raises the *volume* of draft work, so there is more to check, and it can lower its *quality*, so each draft needs more checking. Hiring more reviewers fixes the first problem. Only better technology fixes the second. The result is what many workers would recognise as "AI slop": a growing pile of unchecked output on human desks, and no more finished products leaving the building.

## 3. Why finance will bottleneck harder

Financial services is the next industry in line. AI use among Australian financial and insurance businesses jumped from 1% in 2021–22 to 24% in 2024–25, the fastest rise of any industry and double the all-business average of 12% (ABS 2026a). Banks are also large software employers in their own right: the Commonwealth Bank ranks first in Asia-Pacific for AI maturity and is training its engineers in AI coding (Australian Broker 2026). The software bottleneck is arriving in finance directly.

[CHART: AI adoption by industry]

The mechanism runs the same way. AI agents draft credit assessments, statements of advice, compliance reports and customer responses, so there are more drafts per worker. But every draft must be checked against legal duties such as responsible lending, the best-interests duty and anti-money-laundering rules, and the checking is done by senior, accountable staff. Finished, compliant output can grow only as fast as that checking capacity allows.

Here the finance case goes further than the software evidence. In Chen and Stratton's model, the right amount of checking per draft rises with the cost of an undetected error. In software, a missed bug means a fix and a delay. In finance, it can mean regulatory penalties and customer remediation: over eight years of remediation, six major institutions paid or offered $4.7 billion in compensation for fees charged for no service and for non-compliant advice (Australian Broker 2023). Because errors cost so much, review already takes a larger share of a finance firm's costs, and the model shows the shortfall in finished output grows with that share. The bottleneck should therefore be *bigger* in finance than in software.

The regulator's own evidence points the same way. ASIC reviewed 624 AI use cases across 23 licensees and found that adoption is outrunning governance: of the 14 licensees planning to expand AI, only one had upgraded its governance first (ASIC 2024). Generative AI made up 5% of use cases in production but 22% of those in development, so the larger wave of generated drafts is still to come.

The structural consequence is concentration. Firms with deep review capacity, such as the big four banks, can absorb more AI output, so the gap between them and smaller lenders is likely to widen.

## 4. Three scenarios to 2030

The scenarios start from today's sector: 552,900 workers, 3.8% of Australian employment (Jobs and Skills Australia 2025), with output up 4.8% over the year to June 2026 (ABS 2026b). They differ on two things: how fast checking capacity grows, and whether the quality of AI output improves. The summary number for each is its *pass-through rate*, the share of AI's task-level gains that reaches finished output. Assuming AI lifts output per worker in exposed tasks by about 30% by 2030, in line with the software evidence, each scenario turns that into a different gain in finished output. [MODEL: all scenario figures to be confirmed]

[INTERACTIVE: scenario switcher]

**Baseline: the review backlog.** AI agents spread across most large financial firms by about 2028, but senior reviewers remain scarce and slow to retrain. Pass-through stays near the software level of 0.3 to 0.4, so the 30% task gain becomes a finished-output gain of roughly 10% [MODEL]. Jobs shift toward review and assurance with little net loss, but graduate hiring softens. Signposts: longer approval times and a rising share of staff in assurance roles.

**Upside: verification catches up.** Firms invest in automated testing and checking and redesign their workflows, while regulators set clear expectations for checking AI output. Better AI also means fewer errors per draft, so each one needs less review. Pass-through rises toward 0.7, a finished-output gain of about 20% [MODEL], and shared checking tools let smaller firms keep up. Trigger: ASIC and APRA issue AI assurance guidance under their existing powers.

**Downside: slop accumulation.** Firms ship under-checked output to capture the volume gains. Errors surface as complaints and breaches, followed by remediation and enforcement. Meanwhile, junior roles are cut because AI seems to do their work, which shrinks the pool of future senior reviewers. By 2030 the bottleneck is structural, and finished output is flat or lower once remediation costs are counted [MODEL]. Trigger: a major AI-caused incident brings the government's paused mandatory guardrails back as a blunt fix. The warning signs are already visible: one industry survey found 72% of Australian financial institutions use AI agents in underwriting, but only 3% say their data is fully ready (Australian Broker 2026).

**Testing the Industry Week claim.** At Industry Week, Dave Lemphers of Maincode argued that AI will change work profoundly, but that the opportunities it creates will outweigh what it displaces (Lemphers 2026). He has elsewhere described AI as "a productivity lift for Australian businesses" (Lemphers 2025). The evidence here supports his view on jobs, since the software firms that adopted agents saw no fall in employment. But it qualifies his view on productivity. A lift in tasks is not a lift in output: on the software evidence, less than half of the gain gets through. Lemphers' optimism holds in full only in the upside scenario, which makes the investment in checking capacity the hinge between his forecast and the baseline.

## 5. Policy playbook

Australia has chosen not to pass a dedicated AI law. The National AI Plan put the proposed mandatory guardrails "on hold" and left AI risk to existing laws and regulators, supported by a new AI Safety Institute (Department of Industry, Science and Resources 2025). The Productivity Commission agreed that AI-specific regulation should be a last resort, and called instead for gap analyses of existing frameworks (Productivity Commission 2025).

I accept that approach, but argue that in finance the gap is already clear: no one is responsible for checking AI-generated output at scale. ASIC's finding that only one in 14 expanding licensees upgraded its governance first (ASIC 2024) is the gap analysis the Commission asked for. The policy goal should be to move the sector from the baseline to the upside scenario, using instruments that already exist.

[INTERACTIVE: policy dial]

| Lever | Who acts | What it fixes | Trade-off | What to measure |
| --- | --- | --- | --- | --- |
| Guidance on checking AI-generated output | ASIC, APRA | Sets the standard firms must meet | Mandatory human sign-off on everything would *deepen* the bottleneck | AI-related breach reports; approval times |
| Build checking capacity | Firms, supported by training incentives | More drafts to check (volume) | Costs land before gains appear | Review times; share of staff in assurance |
| Protect the junior pipeline | Firms, with government support for graduate review roles | Future supply of senior reviewers | Short-run cost while juniors look replaceable | Graduate intake; entry-level vacancies |
| Fund shared verification tools | Government with industry | Error-prone drafts (quality) | Public money for private benefit | Error and rework rates |
| Measure finished output, not drafts | Firms, ABS | Stops gains being misread | Harder to measure | Adoption of finished-output metrics |

The most natural home for the first lever is APRA's operational risk standard, CPS 230, in force since July 2025. It already requires banks, insurers and super funds to define critical operations, manage material service providers and report incidents (Brightlaw 2025). It does not mention AI, but AI systems that support critical operations would sit within its scope.

**Extending the Industry Week claim.** Lemphers warns that without local capability Australia is "exposed to... opaque black-box systems" (Lemphers 2025). He frames this as a sovereignty problem, but it is also a *checking* problem. A model a firm cannot inspect is harder to verify, and 30% of the AI use cases ASIC reviewed relied on models built by third parties (ASIC 2024). Transparent, auditable models, whether built locally or required by contract, lower the cost of checking each draft. That turns his argument into a policy lever: auditability should count as part of AI assurance, because it is one of the few things that attacks the quality problem directly.

The EU shows the cost of the opposite approach. Its AI Act classes credit scoring as high-risk, but compliance has already been pushed back from August 2026 to December 2027 (Gibson Dunn 2026). Comprehensive AI laws are slow to implement; targeted guidance through existing regulators can move faster.

## 6. Methods, data and uncertainty

**Method.** The forecast calibrates a simple scenario model to Australian data. It starts from 2026 employment and output for financial and insurance services (ABS 2026b; Jobs and Skills Australia 2025), and applies each scenario's pass-through rate to an assumed 30% task-level gain, taken from the software evidence (Chen & Stratton 2026). All assumptions and data are in the project repository. [MODEL: link to data files once built]

**Limitations.** Four uncertainties matter most.

- *Transferability.* The core evidence comes from software firms, mostly outside Australia. Finance tasks differ, so applying the pass-through rate here is an assumption, not a measurement.
- *Timing.* The software estimates cover roughly the first year after adoption. Firms may reorganise around AI over time, as they did with earlier general-purpose technologies (Brynjolfsson, Rock & Syverson 2018), which would push outcomes toward the upside.
- *Structural breaks.* A step-change in AI reliability would shrink the quality problem and invalidate the baseline. A major AI-caused incident could trigger a sudden regulatory response.
- *Measurement.* Much of what banks and insurers produce is imputed in the national accounts rather than measured directly from sales (Gordon et al. 2016). AI's effects, or their absence, will therefore be hard to see in official statistics. Self-reported gains are no substitute: in a CSIRO trial of an AI assistant, 30% of users reported no productivity benefit (Whittle 2025).

**Use of AI.** I used Claude (Anthropic) to help find and summarise sources, structure the argument, draft text that I then edited, and write the code for the site's charts and interactives. I checked every figure against its original source. [Tom: adjust to match how you actually used it]

## References

*RMIT Harvard style. Run each through RMIT Easy Cite before submission. Items marked [PRIMARY] currently cite a secondary summary and should be swapped for the original document.*

ABS (Australian Bureau of Statistics) (2026a) *Characteristics of Australian Business, 2024-25*, ABS website, accessed 22 October 2026. https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/2024-25

ABS (Australian Bureau of Statistics) (2026b) *Australian National Accounts: National Income, Expenditure and Product, June 2026*, ABS website, accessed 22 October 2026. https://www.abs.gov.au/statistics/economy/national-accounts/australian-national-accounts-national-income-expenditure-and-product/latest-release

ASIC (Australian Securities and Investments Commission) (2024) *REP 798 Beware the gap: Governance arrangements in the face of AI innovation*, ASIC, accessed 22 October 2026. https://download.asic.gov.au/media/mtllqjo0/rep-798-published-29-october-2024.pdf

Australian Broker (2023) 'Banks to pay $4.7 billion in compensation to customers', *Australian Broker*, 10 March, accessed 22 October 2026. https://brokernews.com.au/news/breaking-news/banks-to-pay-4-7-billion-in-compensation-to-customers-282142.aspx [PRIMARY: ASIC media release]

Australian Broker (2026) 'CommBank tops Asia-Pacific AI ranking, fast-tracks engineer training', *Australian Broker*, 8 October, accessed 22 October 2026. https://www.brokernews.com.au/news/breaking-news/commbank-tops-asiapacific-ai-ranking-fasttracks-engineer-training-290113.aspx

Brightlaw (2025) 'APRA prudential standard on operational risk management commences', *Brightlaw*, accessed 22 October 2026. https://www.brightlaw.com.au/apra-prudential-standard-on-operational-risk-management-commences/ [PRIMARY: APRA CPS 230]

Brynjolfsson E, Rock D and Syverson C (2018) *The productivity J-curve: How intangibles complement general purpose technologies*, NBER Working Paper 25148, National Bureau of Economic Research. https://www.nber.org/papers/w25148

Chen F and Stratton J (2026) *Artificial intelligence in the firm: Bottlenecks in software production* [job market paper], Harvard University, current version 4 August 2026.

Department of Industry, Science and Resources (2025) *National AI Plan*, Australian Government. [PRIMARY: confirm publisher and URL; currently sourced via Region (2025)]

Gibson Dunn (2026) *EU AI Act omnibus agreement: Postponed high-risk deadlines and other key changes*, Gibson Dunn, accessed 22 October 2026. https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/

Gordon J, Zhao S, Barnes P, Munoz M and Hunter J (2016) *Productivity in financial and insurance services*, Productivity Commission staff research note, Productivity Commission. https://www.pc.gov.au/inquiries-and-research/productivity-financial-insurance-services

Jobs and Skills Australia (2025) *Financial and Insurance Services*, Jobs and Skills Australia, accessed 22 October 2026. https://www.jobsandskills.gov.au/data/labour-market-insights/industries/financial-and-insurance-services

Jones C and Tonetti C (2026) *Past automation and future A.I.: How weak links tame the growth explosion* [working paper].

Kremer M (1993) 'The O-ring theory of economic development', *The Quarterly Journal of Economics*, 108(3):551–575. https://doi.org/10.2307/2118400

Lemphers D (2025) ''If we don't build our own stack, we become someone else's customer': Australia's AI warning', *Forbes Australia*, 22 September, accessed 22 October 2026. https://www.forbes.com.au/news/innovation/the-sovereign-ai-race-is-on-and-australia-cant-afford-to-sit-it-out/

Lemphers D (2026) 'AI and the future of work' [Industry Week presentation], ECON1626, RMIT University, Melbourne, 23 September.

Microsoft and Tech Council of Australia (2023) *Australia's generative AI opportunity*, Microsoft and Tech Council of Australia, accessed 22 October 2026. https://news.microsoft.com/en-au/features/generative-ai-could-contribute-115-billion-annually-to-australias-economy-by-2030/

Productivity Commission (2025) *Harnessing data and digital technology*, Inquiry report, Productivity Commission, December. [PRIMARY: confirm URL; currently sourced via King & Wood Mallesons (2025)]

Whittle J (2025) 'Does AI actually boost productivity? The evidence is murky', *CSIRO*, 15 July, accessed 22 October 2026. https://www.csiro.au/en/news/all/articles/2025/july/does-ai-actually-boost-productivity-the-evidence-is-murky
