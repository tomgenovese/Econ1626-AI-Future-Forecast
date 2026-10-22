"""
Prototype of the verification-bottleneck scenario model (ECON1626 A3).

Run:  python3 Content/model_prototype.py
See Content/model.md for the full specification, sources and assumptions.
All outputs are indexes relative to a world without AI (= 1.0).
"""

# ---- Sourced inputs ----
TASK_GAIN = 0.30   # Chen & Stratton (2026): lines of code +30% after AI agents
EXPOSURE = 0.44    # Microsoft & Tech Council (2023): 44% of task hours exposed

# ---- Assumptions (see model.md section 4) ----
FIN_MULT = 1.5     # finance multiplier on extra checking per AI draft
HUMAN_CATCH = 0.90
BASE_ERROR = 0.05
REMEDIATION_COST = 10   # drafts' worth of output lost per extra slipped error
CLAMPDOWN_CHECK = 1.05  # checking per draft after a regulatory clampdown

# ---- Calibration to software (Chen & Stratton 2026) ----
# Full adoption: drafts +30%, reviewers +14%, finished output ~ +6%
Q = 1.14 / 1.06 - 1                                   # extra checking per AI draft
REALLOC_SW = 0.14 / ((1 + TASK_GAIN) * (1 + Q) - 1)   # share of extra demand met by staff moves


def run(name, adoption, realloc, ai_share, ai_catch, clampdown_year=None, junior_cut_year=None):
    H, backlog, remediation_due, rows = 1.0, 0.0, 0.0, []
    for i, year in enumerate(range(2026, 2031)):
        s = adoption[i] * EXPOSURE
        drafts = 1 + s * TASK_GAIN
        per_draft = 1 + Q * FIN_MULT * s
        if clampdown_year and year >= clampdown_year:
            per_draft *= CLAMPDOWN_CHECK
        demand = drafts * per_draft
        H_new = 1 + realloc * (demand - 1)
        if junior_cut_year and year >= junior_cut_year:
            H_new = min(H, H_new) * 0.99
        H = H_new
        a = ai_share[i]
        finished = min(drafts, H / ((1 - a) * per_draft))
        backlog += drafts - finished
        slip = BASE_ERROR * (1 + s) * ((1 - a) * (1 - HUMAN_CATCH) + a * (1 - ai_catch))
        net = finished - remediation_due
        remediation_due = REMEDIATION_COST * max(0.0, slip - BASE_ERROR * (1 - HUMAN_CATCH)) * finished
        rows.append((year, drafts, finished, (finished - 1) / (drafts - 1), backlog, H, slip * 1000, net))
    print(f"\n{name}")
    print("year  drafts  finished  pass-thru  backlog  checkers  slipped/1000  net")
    for r in rows:
        print("{}  {:.3f}   {:.3f}     {:5.2f}     {:.3f}    {:.3f}     {:5.1f}      {:.3f}".format(*r))
    return rows


if __name__ == "__main__":
    print(f"Calibration: extra checking per AI draft q={Q:.3f}, reallocation={REALLOC_SW:.2f}, "
          f"software pass-through={(1.06 - 1) / TASK_GAIN:.2f}")
    run("BASELINE: review backlog", [.30, .42, .55, .65, .72], REALLOC_SW, [0] * 5, 0.60)
    run("UPSIDE: verification catches up", [.30, .45, .60, .72, .80], 0.70, [0, .05, .10, .15, .20], 0.85)
    run("DOWNSIDE: slop accumulation", [.30, .45, .62, .75, .80], REALLOC_SW, [.10, .25, .40, .15, .15], 0.50,
        clampdown_year=2029, junior_cut_year=2028)
