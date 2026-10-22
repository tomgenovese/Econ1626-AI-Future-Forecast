/* Verification-bottleneck scenario model (port of draft/model_prototype.py).
   Spec, sources and assumptions: draft/model.md.
   All outputs are indexes relative to a world without AI (= 1.0). */

const Model = (() => {
  const YEARS = [2026, 2027, 2028, 2029, 2030];

  // Sourced inputs
  const SOURCED = {
    taskGain: 0.30,        // Chen & Stratton (2026): lines of code +30%
    exposure: 0.44,        // Microsoft & Tech Council (2023): 44% of task hours
    employment: 552900,    // Jobs and Skills Australia (2025)
  };

  // Default assumptions (editable in the assumptions panel)
  const DEFAULTS = {
    finMult: 1.5,          // finance multiplier on extra checking per AI draft
    humanCatch: 0.90,
    baseError: 0.05,
    remediationCost: 10,   // drafts' worth of output lost per extra slipped error
    clampdownCheck: 1.05,
    checkShare: 0.25,      // starting share of staff in checking roles
  };

  // Calibration to software: full adoption, reviewers +14%, finished ~ +6%
  const Q = 1.14 / 1.06 - 1;
  const REALLOC_SW = 0.14 / ((1 + SOURCED.taskGain) * (1 + Q) - 1);

  const PRESETS = {
    baseline: {
      label: "Baseline: the review backlog",
      adoption: [0.30, 0.42, 0.55, 0.65, 0.72],
      realloc: REALLOC_SW,
      aiShare: [0, 0, 0, 0, 0],
      aiCatch: 0.60,
    },
    upside: {
      label: "Upside: verification catches up",
      adoption: [0.30, 0.45, 0.60, 0.72, 0.80],
      realloc: 0.70,
      aiShare: [0, 0.05, 0.10, 0.15, 0.20],
      aiCatch: 0.85,
    },
    downside: {
      label: "Downside: slop accumulation",
      adoption: [0.30, 0.45, 0.62, 0.75, 0.80],
      realloc: REALLOC_SW,
      aiShare: [0.10, 0.25, 0.40, 0.15, 0.15],
      aiCatch: 0.50,
      clampdownYear: 2029,
      juniorCutYear: 2028,
    },
  };

  function run(preset, overrides = {}) {
    const p = { ...DEFAULTS, ...SOURCED, ...preset, ...overrides };
    let H = 1, backlog = 0, remediationDue = 0;
    const rows = [];
    YEARS.forEach((year, i) => {
      const s = p.adoption[i] * p.exposure;
      const drafts = 1 + s * p.taskGain;
      let perDraft = 1 + Q * p.finMult * s;
      if (p.clampdownYear && year >= p.clampdownYear) perDraft *= p.clampdownCheck;
      const demand = drafts * perDraft;
      let Hn = 1 + p.realloc * (demand - 1);
      if (p.juniorCutYear && year >= p.juniorCutYear) Hn = Math.min(H, Hn) * 0.99;
      H = Hn;
      const a = p.aiShare[i];
      const finished = Math.min(drafts, H / ((1 - a) * perDraft));
      backlog += drafts - finished;
      const slip = p.baseError * (1 + s) * ((1 - a) * (1 - p.humanCatch) + a * (1 - p.aiCatch));
      const net = finished - remediationDue;
      const baseSlip = p.baseError * (1 - p.humanCatch);
      remediationDue = p.remediationCost * Math.max(0, slip - baseSlip) * finished;
      rows.push({
        year,
        adoption: p.adoption[i],
        drafts,
        finished,
        passThrough: (finished - 1) / (drafts - 1),
        backlog,
        checkers: H,
        checkJobs: Math.round(p.employment * p.checkShare * H),
        slippedPer1000: slip * 1000,
        net,
      });
    });
    return rows;
  }

  return { YEARS, SOURCED, DEFAULTS, PRESETS, run, calibration: { Q, REALLOC_SW } };
})();
