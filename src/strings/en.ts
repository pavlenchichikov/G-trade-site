import type { Strings } from "./types";

export const en: Strings = {
  nav: {
    features: "Features",
    how: "How it works",
    research: "Research agent",
    universe: "Universe",
    screenshots: "Screenshots",
    tech: "Tech",
    github: "GitHub",
  },
  hero: {
    badge: "Signals only. Human-in-the-loop.",
    tagline: "Multi-asset machine-learning trading-signal engine",
    summary:
      "G-Trade trains a dedicated ensemble - CatBoost, LSTM, Transformer and TCN - for each of ~181 markets across crypto, US, European and Russian equities, indices, forex and commodities. A walk-forward backtest with commissions, slippage and a leakage embargo picks the champion; its probabilities are calibrated against realized moves, sized by Kelly, and gated by a Taleb tail-risk index. A FastAPI dashboard reads the results instantly, and an autonomous, statistically-gated research agent keeps looking for genuine edge - without ever touching production on its own.",
    highlights: [
      "Calibrated probabilities",
      "Walk-forward selection",
      "Tail-risk gating",
      "Live accuracy tracking",
    ],
    ctaPrimary: "View on GitHub",
    ctaSecondary: "See it in action",
    note: "Research and educational project. Not financial advice.",
  },
  metrics: {
    heading: "Built for scale",
    items: [
      { value: "~181", label: "assets, one model each" },
      { value: "4", label: "models per asset ensemble" },
      { value: "6", label: "asset classes covered" },
      { value: "~343", label: "automated tests" },
      { value: "15y", label: "of daily and weekly history" },
      { value: "0", label: "auto-execution - signals only" },
    ],
  },
  features: {
    kicker: "Capabilities",
    heading: "What it does",
    sub: "Every claim maps to the open-source repository.",
    items: [
      {
        title: "Calibrated signals",
        body: "BUY / SELL / WAIT with a probability calibrated to real up-move frequency, per-asset tuned thresholds, and a live accuracy track record that reconciles every prediction against the realized next move - so the confidence number means something.",
      },
      {
        title: "Risk-managed by design",
        body: "Kelly-based position sizing, drawdown stops, sector-exposure and correlation checks, and a Taleb tail-risk index that shrinks size above a soft cap and blocks new buys above a hard cap. Risk is a first-class part of the signal, not an afterthought.",
      },
      {
        title: "Four models per asset",
        body: "Each asset trains its own ensemble of CatBoost, LSTM, Transformer and TCN, fused by a stacking meta-classifier. The champion is chosen by a walk-forward backtest with commissions, slippage and an embargo against look-ahead leakage.",
      },
      {
        title: "Autonomous research agent",
        body: "A quality-diversity (MAP-Elites) search over features, labels and transforms, gated by a held-out adoption test so nothing is adopted on noise. It proposes and screens candidates on its own but never promotes to production automatically.",
      },
      {
        title: "Instant dashboard",
        body: "A FastAPI web UI reads ready-made predictions from the database, so it starts immediately without loading any models: signal radar, per-asset detail, portfolio analytics, an interactive risk manager and a what-if backtester.",
      },
      {
        title: "Value overlay",
        body: "A Guru Council (Lynch, Buffett, Graham, Munger) as a long-term fundamentals overlay for real stocks, tracked at a 60-day horizon while the machine-learning signal stays primary.",
      },
    ],
  },
  how: {
    kicker: "Pipeline",
    heading: "How it works",
    sub: "From raw quotes to a risk-checked signal.",
    steps: [
      {
        title: "Data",
        body: "Up to 15 years of daily and weekly quotes from Yahoo Finance and MOEX land in a local SQLite database, with a read-only audit for freshness and gaps.",
      },
      {
        title: "Features",
        body: "Returns and volatility, tail risk (kurtosis / skew / VaR), RSI / MACD / SMA / ATR, weekly and cross-asset correlation, lead-lag, calendar position and a macro regime read.",
      },
      {
        title: "Ensemble",
        body: "CatBoost, LSTM, Transformer and TCN are combined by a stacking meta-classifier, and the champion is selected by walk-forward backtest.",
      },
      {
        title: "Signal",
        body: "The calibrated probability becomes BUY / SELL / WAIT against per-asset tuned thresholds, with an untrusted-champion guard.",
      },
      {
        title: "Risk gate",
        body: "Kelly sizing and the Taleb tail-risk gate decide whether, and how large, a position may be before the signal is shown.",
      },
    ],
    terminalCaption: "Example console output from predict.py",
  },
  research: {
    kicker: "Always improving",
    heading: "Autonomous research agent",
    sub: "It looks for edge on its own - and proves it before believing it.",
    lead: "Most of the pipeline is fixed once trained. The research agent is where G-Trade keeps improving: a quality-diversity search that illuminates the space of features, labels and transforms, remembers every experiment across runs, and holds each candidate to a strict statistical bar before it counts as a finding.",
    points: [
      {
        title: "MAP-Elites search",
        body: "A quality-diversity (MAP-Elites) illumination over feature, label and transform genomes - not just the single best config, but a diverse archive of what works where.",
      },
      {
        title: "Cheap pre-screen",
        body: "A CatBoost-only pass drops the obvious losers fast, so the expensive full evaluation is spent only on promising candidates.",
      },
      {
        title: "Permanent memory",
        body: "Cross-run journals mean no candidate is ever re-tested and base trainings are reused until new data arrives - every run buys new experiments.",
      },
      {
        title: "Compounding wiki",
        body: "An optional LLM distills findings into a self-maintained knowledge base that the proposer reads back, so insight accumulates instead of scrolling away.",
      },
    ],
    gateTitle: "The adoption gate",
    gateBody:
      "A candidate is flagged only after clearing a separate held-out set under a one-sided Wilcoxon signed-rank test, with a practical effect-size floor, a Benjamini-Hochberg correction across candidates, and a cross-run replication requirement. It is designed to reject improvements that are only noise - and adopting a flagged winner still takes a manual retrain.",
  },
  universe: {
    kicker: "Coverage",
    heading: "Asset universe",
    sub: "One model per asset, across six classes.",
    classes: [
      { name: "Crypto", count: "15", examples: "BTC, ETH, SOL, XRP, TON" },
      { name: "US equities", count: "45+", examples: "NVDA, AAPL, JPM, LLY, PLTR" },
      { name: "European", count: "26", examples: "ASML, LVMH, SAP, DAX, FTSE100" },
      { name: "Russian / MOEX", count: "51", examples: "SBER, GAZP, LKOH, YNDX, OZON" },
      { name: "Forex", count: "34", examples: "EURUSD, USDJPY, GBPUSD, USDRUB" },
      { name: "Commodities & indices", count: "11", examples: "GOLD, OIL, SP500, VIX, DXY" },
    ],
  },
  shots: {
    kicker: "The product",
    heading: "Inside the dashboard",
    sub: "The FastAPI web UI - the same signals, live.",
    captions: [
      {
        title: "Signal radar",
        body: "Market regime and sentiment gauges, breadth, accuracy leaders, and the strongest live signals with their track record.",
      },
      {
        title: "Per-asset detail",
        body: "Candles with the model recommendation, tuned thresholds and the champion's trust status.",
      },
      {
        title: "Signals on the price",
        body: "Historical BUY / SELL calls plotted on the price line over a selectable range.",
      },
    ],
  },
  tech: {
    kicker: "Under the hood",
    heading: "Tech stack",
    sub: "Python end to end.",
    groups: [
      { group: "Machine learning", items: ["CatBoost", "TensorFlow / Keras", "scikit-learn", "Optuna", "scipy"] },
      { group: "Serving and UI", items: ["FastAPI", "Uvicorn", "Jinja2", "Streamlit"] },
      { group: "Data", items: ["pandas", "numpy", "SQLite", "Yahoo Finance", "MOEX"] },
      { group: "Research and tooling", items: ["MAP-Elites search", "Ruff", "pytest", "GitHub Actions"] },
    ],
  },
  footer: {
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "G-Trade is a research and educational project. Its output is a set of model predictions, not financial advice and not a recommendation to buy or sell any security. Markets carry risk and you can lose money. The software is provided as is, without warranty of any kind.",
    license: "Licensed under CC BY-NC 4.0 (non-commercial).",
    repo: "Source on GitHub",
    contact: "Contact",
    builtWith: "Built with React, Vite and Tailwind CSS.",
  },
};
