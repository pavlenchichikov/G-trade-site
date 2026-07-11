type Sig = "BUY" | "SELL" | "WAIT";

interface Row {
  asset: string;
  sig: Sig;
  p: string;
  extra?: string;
}

const ROWS: Row[] = [
  { asset: "BTC", sig: "BUY", p: "p=0.62", extra: "STACK  taleb=0.3" },
  { asset: "ETH", sig: "WAIT", p: "p=0.51", extra: "STACK" },
  { asset: "NVDA", sig: "BUY", p: "p=0.66", extra: "STACK  taleb=0.4" },
  { asset: "SBER", sig: "SELL", p: "p=0.38", extra: "STACK  taleb=1.2" },
  { asset: "EURUSD", sig: "WAIT", p: "p=0.49", extra: "STACK" },
  { asset: "GOLD", sig: "BUY", p: "p=0.58", extra: "STACK  taleb=0.2" },
];

function sigColor(sig: Sig): string {
  if (sig === "BUY") return "text-neon";
  if (sig === "SELL") return "text-danger";
  return "text-muted";
}

export function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel2 font-mono text-xs sm:text-sm">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
        <span className="ml-2 text-muted">predict.py</span>
      </div>
      <div className="overflow-x-auto p-4 leading-6">
        <div className="whitespace-pre text-muted">$ python predict.py</div>
        <div className="whitespace-pre text-muted">
          {"  REAL-TIME RADAR  |  2026-07-11 20:23"}
        </div>
        <div className="whitespace-pre text-muted">{" "}</div>
        {ROWS.map((r) => (
          <div key={r.asset} className="whitespace-pre">
            {"  "}
            <span className="text-ink-text">{r.asset.padEnd(9)}</span>
            <span className={sigColor(r.sig)}>{r.sig.padEnd(6)}</span>
            <span className="text-muted">
              {r.p.padEnd(9)}
              {r.extra ?? ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
