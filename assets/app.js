/* Page behaviour: boot sequence, ticker, section nav, charts, scenario switcher. */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Boot sequence (plays on every load, about 4 seconds) ---------- */
  function boot() {
    const el = document.getElementById("boot");
    if (!el) return;
    const lines = [
      ["> connecting to engineering analytics data", "718 firms"],
      ["> loading worker records", "725,938 workers"],
      ["> loading ABS business survey 2024-25", "ok"],
      ["> calibrating verification model", "pass-through 0.20"],
      ["> running forecast: australian financial services, 2026-2030", "ready"],
    ];
    if (reduceMotion) { el.remove(); return; }
    let i = 0;
    const next = () => {
      if (i < lines.length) {
        const p = document.createElement("p");
        p.innerHTML = `${lines[i][0]} <span class="ok">... ${lines[i][1]}</span>`;
        el.appendChild(p);
        i++;
        setTimeout(next, 620);
      } else {
        const p = document.createElement("p");
        p.className = "cursor";
        el.appendChild(p);
        setTimeout(() => { el.classList.add("is-done"); setTimeout(() => el.remove(), 600); }, 700);
      }
    };
    setTimeout(next, 250);
  }

  /* ---------- Ticker: content changes with the section in view ---------- */
  const ticker = document.getElementById("ticker-track");
  function setTicker(text) {
    if (!ticker || !text) return;
    const items = text.split("|").map(t => `<span class="ticker__item">${t.trim()}</span>`).join("");
    ticker.innerHTML = items + items;
  }

  /* ---------- Function-key nav: highlight current section ---------- */
  function watchSections() {
    const links = [...document.querySelectorAll(".fkeys a")];
    const sections = [...document.querySelectorAll("[data-ticker]")];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        setTicker(e.target.dataset.ticker);
        links.forEach(a => a.setAttribute("aria-current", a.hash === "#" + e.target.id ? "true" : "false"));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));
    setTicker(sections[0]?.dataset.ticker);
  }

  /* ---------- Line chart (SVG, hover crosshair, table view) ---------- */
  const SVGNS = "http://www.w3.org/2000/svg";
  const mk = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(SVGNS, tag);
    Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
    if (parent) parent.appendChild(n);
    return n;
  };

  function lineChart(host, { years, series, fmt, yMin, yMax, ariaLabel }) {
    host.innerHTML = "";
    const W = 520, H = 260, m = { t: 14, r: 92, b: 26, l: 48 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const all = series.flatMap(s => s.values);
    const rawLo = yMin ?? Math.min(...all), rawHi = yMax ?? Math.max(...all);
    // nice ticks: pick a round step, then snap the domain to it
    const span = (rawHi - rawLo) || Math.abs(rawHi) * 0.1 || 1;
    const mag = Math.pow(10, Math.floor(Math.log10(span / 4)));
    const step = [1, 2, 2.5, 5, 10].map(f => f * mag).find(s => span / s <= 5);
    let lo = yMin ?? Math.floor(rawLo / step) * step;
    let hi = yMax ?? Math.ceil(rawHi / step) * step;
    if (yMax == null && hi === rawHi) hi += step;
    const x = i => m.l + (i / (years.length - 1)) * iw;
    const y = v => m.t + (1 - (v - lo) / (hi - lo)) * ih;

    const svg = mk("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": ariaLabel });
    // grid + y ticks
    const g = mk("g", { class: "grid" }, svg);
    for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + 1e-9; v += step) {
      mk("line", { x1: m.l, x2: m.l + iw, y1: y(v), y2: y(v) }, g);
      const t = mk("text", { x: m.l - 8, y: y(v) + 4, "text-anchor": "end" }, svg);
      t.textContent = fmt(v);
    }
    // x axis
    const ax = mk("g", { class: "axis" }, svg);
    mk("line", { x1: m.l, x2: m.l + iw, y1: m.t + ih, y2: m.t + ih }, ax);
    years.forEach((yr, i) => {
      const t = mk("text", { x: x(i), y: H - 6, "text-anchor": "middle" }, svg);
      t.textContent = yr;
    });
    // series lines + direct labels (end of line)
    const ends = [];
    series.forEach(s => {
      const d = s.values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
      mk("path", {
        d, fill: "none", stroke: s.color, "stroke-width": s.width || 2,
        "stroke-dasharray": s.dash || "none", "stroke-linecap": "round", "stroke-linejoin": "round",
        opacity: s.muted ? 0.45 : 1,
      }, svg);
      ends.push({ s, yy: y(s.values[s.values.length - 1]) });
    });
    // nudge end labels apart
    ends.sort((a, b) => a.yy - b.yy);
    for (let k = 1; k < ends.length; k++) if (ends[k].yy - ends[k - 1].yy < 14) ends[k].yy = ends[k - 1].yy + 14;
    ends.forEach(({ s, yy }) => {
      mk("rect", { x: m.l + iw + 6, y: yy - 1, width: 10, height: 2, fill: s.color }, svg);
      const t = mk("text", { x: m.l + iw + 20, y: yy + 4, class: "lbl" }, svg);
      t.textContent = s.name;
    });

    // hover layer
    const cross = mk("line", { class: "crosshair", y1: m.t, y2: m.t + ih, visibility: "hidden" }, svg);
    const dots = series.map(s => mk("circle", { r: 4, fill: s.color, stroke: "#000", "stroke-width": 2, visibility: "hidden" }, svg));
    const hit = mk("rect", { x: m.l, y: m.t, width: iw, height: ih, fill: "transparent" }, svg);
    host.appendChild(svg);
    const tip = document.createElement("div");
    tip.className = "tip";
    host.appendChild(tip);

    const show = i => {
      cross.setAttribute("x1", x(i)); cross.setAttribute("x2", x(i)); cross.setAttribute("visibility", "visible");
      dots.forEach((d, k) => { d.setAttribute("cx", x(i)); d.setAttribute("cy", y(series[k].values[i])); d.setAttribute("visibility", "visible"); });
      tip.innerHTML = `<b>${years[i]}</b><br>` + series.map(s =>
        `<span class="sw" style="background:${s.color}"></span>${s.name}: ${fmt(s.values[i])}`).join("<br>");
      tip.style.display = "block";
      const rect = svg.getBoundingClientRect();
      const px = (x(i) / W) * rect.width;
      tip.style.left = Math.min(px + 14, rect.width - tip.offsetWidth - 4) + "px";
      tip.style.top = "8px";
    };
    const hide = () => { cross.setAttribute("visibility", "hidden"); dots.forEach(d => d.setAttribute("visibility", "hidden")); tip.style.display = "none"; };
    hit.addEventListener("mousemove", e => {
      const rect = svg.getBoundingClientRect();
      const sx = ((e.clientX - rect.left) / rect.width) * W;
      show(Math.max(0, Math.min(years.length - 1, Math.round(((sx - m.l) / iw) * (years.length - 1)))));
    });
    hit.addEventListener("mouseleave", hide);

    // table view for accessibility
    const det = document.createElement("details");
    det.innerHTML = `<summary>Show data table</summary><table><tr><th>Year</th>${series.map(s => `<th>${s.name}</th>`).join("")}</tr>` +
      years.map((yr, i) => `<tr><td>${yr}</td>${series.map(s => `<td>${fmt(s.values[i])}</td>`).join("")}</tr>`).join("") + "</table>";
    host.appendChild(det);
  }

  /* ---------- Scenario dashboard ---------- */
  const C = {
    green: "var(--s-green)", amber: "var(--s-amber)", red: "var(--s-red)", dim: "#5f7d69",
  };
  const pct = v => `${v >= 1 ? "+" : ""}${((v - 1) * 100).toFixed(1)}%`;
  const SCEN_COLOR = { baseline: C.amber, upside: C.green, downside: C.red };
  const CARDS = {
    baseline: { name: "Baseline: the review backlog",
      what: "Today's trends continue. Agents spread across most large firms by 2028, but senior reviewers stay scarce and each finance draft needs more checking than code. Drafts rise 9.5%; finished output just 1.1%. Pass-through is 0.12, against 0.20 in software.",
      trigger: "None: this is the default path.", watch: "Approval times and assurance hiring." },
    upside: { name: "Upside: verification catches up",
      what: "Checking goes right. Firms invest in checking and auditable AI handles routine checks, so almost every extra draft gets through: finished output rises 10.6%, about 8% after error costs.",
      trigger: "ASIC and APRA guidance under existing powers.", watch: "AI error rates falling." },
    downside: { name: "Downside: slop accumulation",
      what: "Checking goes wrong. Firms let AI rubber-stamp AI, so output looks strong at first. Then errors surface as breaches and remediation, and junior cuts shrink future checking capacity. By 2029 net output is 3.5% below a world without AI.",
      trigger: "An AI-caused incident revives the paused guardrails.", watch: "72% of financial institutions use AI agents in underwriting, but only 3% say their data is fully ready (Australian Broker 2026)." },
  };
  const DETAIL = {
    drafts: "Dashed: drafts produced. Solid: finished output. The gap is work stuck in checking.",
    backlog: "Unchecked work piling up, as a % of one year's pre-AI output.",
    jobs: "Total sector jobs stay about flat; this is the number doing checking and assurance.",
  };
  let curKey = "baseline", curTab = "drafts";

  function renderDetail() {
    const rows = Model.run(Model.PRESETS[curKey]), years = Model.YEARS, col = SCEN_COLOR[curKey];
    document.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === curTab ? "true" : "false"));
    document.getElementById("detail-sub").textContent = DETAIL[curTab];
    const host = document.getElementById("chart-detail");
    if (curTab === "drafts") lineChart(host, { years, fmt: pct, yMin: 1, yMax: 1.12, ariaLabel: "Drafts versus finished output",
      series: [{ name: "Drafts", values: rows.map(r => r.drafts), color: C.dim, dash: "5 4" }, { name: "Finished", values: rows.map(r => r.finished), color: col }] });
    if (curTab === "backlog") lineChart(host, { years, fmt: v => (v * 100).toFixed(0), yMin: 0, yMax: 0.4, ariaLabel: "Backlog of unchecked work",
      series: [{ name: "Backlog", values: rows.map(r => r.backlog), color: col }] });
    if (curTab === "jobs") lineChart(host, { years, fmt: v => `${Math.round(v / 1000)}k`, yMin: 130000, yMax: 155000, ariaLabel: "Checking and assurance jobs",
      series: [{ name: "Checking jobs", values: rows.map(r => r.checkJobs), color: col }] });
  }

  function renderScenario(key) {
    curKey = key;
    const years = Model.YEARS;
    document.querySelectorAll("[data-scenario]").forEach(b => b.setAttribute("aria-pressed", b.dataset.scenario === key ? "true" : "false"));
    const c = CARDS[key], card = document.getElementById("scenario-card");
    card.dataset.k = key;
    card.innerHTML = `<h3>${c.name}</h3><p>${c.what}</p><dl class="readout"><div><dt>Trigger</dt><dd>${c.trigger}</dd></div><div><dt>Watch</dt><dd>${c.watch}</dd></div></dl>`;
    const all = Object.keys(Model.PRESETS).map(k => ({ k, rows: Model.run(Model.PRESETS[k]) }));
    lineChart(document.getElementById("chart-net"), {
      years, fmt: pct, yMin: 0.95, yMax: 1.12,
      ariaLabel: "Net output after error costs, all three scenarios",
      series: [
        { name: "All ship", values: all[0].rows.map(r => r.drafts), color: C.dim, dash: "2 4", muted: true },
        ...all.map(({ k, rows: rr }) => ({
          name: k[0].toUpperCase() + k.slice(1), values: rr.map(r => r.net), color: SCEN_COLOR[k],
          width: k === key ? 3.5 : 1.25, muted: k !== key,
        })),
      ],
    });
    renderDetail();
  }

  function initTiles() {
    ["baseline", "upside", "downside"].forEach(k => {
      const rows = Model.run(Model.PRESETS[k]);
      const worst = rows.reduce((a, r) => (r.net < a.net ? r : a));
      const useWorst = k === "downside";
      const v = useWorst ? worst.net : rows[4].net;
      const n = (v - 1) * 100;
      document.getElementById(`tile-${k}`).textContent = Math.abs(n) < 0.5 ? "≈ 0%" : `${n > 0 ? "+" : "−"}${Math.abs(n).toFixed(n > 0 ? 0 : 1)}%`;
      document.getElementById(`tile-${k}-l`).textContent = useWorst ? `net output at the worst (${worst.year})` : "net output by 2030";
    });
  }

  function initScenarios() {
    const btns = document.querySelectorAll("[data-scenario]");
    if (!btns.length) return;
    btns.forEach(b => b.addEventListener("click", () => renderScenario(b.dataset.scenario)));
    document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => { curTab = b.dataset.tab; renderDetail(); }));
    initTiles();
    renderScenario("baseline");
  }

  /* ---------- Static evidence charts ---------- */
  function initEvidence() {
    const host = document.getElementById("chart-adoption");
    if (!host) return;
    // ABS (2026a): share of businesses using AI, 2024-25
    const data = [
      ["Info, media & telecoms", 38], ["Financial & insurance", 24], ["Professional services", 24],
      ["Mining", 18], ["Health care", 17], ["All businesses", 12], ["Retail", 9], ["Construction", 6],
    ];
    const W = 520, rowH = 26, m = { l: 168, r: 44, t: 6 };
    const H = m.t + data.length * rowH + 6, iw = W - m.l - m.r;
    const svg = mk("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Share of businesses using AI by industry, 2024-25" });
    data.forEach(([name, v], i) => {
      const yy = m.t + i * rowH;
      const fin = name.startsWith("Financial"), avg = name.startsWith("All");
      const t = mk("text", { x: m.l - 10, y: yy + 16, "text-anchor": "end", class: fin ? "lbl" : "" }, svg);
      t.textContent = name;
      mk("rect", { x: m.l, y: yy + 5, width: Math.max(2, (v / 40) * iw), height: 14, rx: 2,
        fill: fin ? "var(--s-green)" : avg ? "transparent" : "#1f4a2c", stroke: avg ? "#5f7d69" : "none", "stroke-dasharray": avg ? "3 3" : "none" }, svg);
      const vt = mk("text", { x: m.l + (v / 40) * iw + 6, y: yy + 16, class: fin ? "lbl" : "" }, svg);
      vt.textContent = v + "%";
    });
    host.appendChild(svg);
  }

  function initHarvard() {
    const host = document.getElementById("chart-harvard");
    if (!host) return;
    // Chen & Stratton (2026): effects of AI agents
    const data = [
      ["Lines of code", 30, "write"], ["Pull requests", 23, "write"], ["Commits", 20, "write"],
      ["Finished work (upper bound)", 12, "ship"],
      ["Review time", 49, "review"], ["Comments per PR", 35, "review"], ["Staff doing review", 14, "review"],
    ];
    const W = 520, rowH = 26, m = { l: 190, r: 44, t: 6 };
    const H = m.t + data.length * rowH + 6, iw = W - m.l - m.r;
    const col = { write: "#5f7d69", ship: "var(--s-green)", review: "var(--s-amber)" };
    const svg = mk("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Effects of AI coding agents on writing, shipping and reviewing code" });
    data.forEach(([name, v, kind], i) => {
      const yy = m.t + i * rowH;
      const t = mk("text", { x: m.l - 10, y: yy + 16, "text-anchor": "end", class: kind === "ship" ? "lbl" : "" }, svg);
      t.textContent = name;
      const g = mk("g", { "data-kind": kind, class: "hv" }, svg);
      g.appendChild(t);
      mk("rect", { x: m.l, y: yy + 5, width: (v / 50) * iw, height: 14, rx: 2, fill: col[kind] }, g);
      const vt = mk("text", { x: m.l + (v / 50) * iw + 6, y: yy + 16, class: kind === "ship" ? "lbl" : "" }, g);
      vt.textContent = (kind === "ship" ? "≤ " : "+") + v + "%";
    });
    host.appendChild(svg);
  }

  window.Viz = { lineChart, pct, mk, SCEN_COLOR, C };
  window.highlightHarvard = kind => {
    document.querySelectorAll("#chart-harvard .hv").forEach(g => {
      g.style.opacity = kind === "all" || g.dataset.kind === kind ? 1 : 0.22;
      g.style.transition = "opacity .3s";
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    boot();
    watchSections();
    initEvidence();
    initHarvard();
    initScenarios();
  });
})();
