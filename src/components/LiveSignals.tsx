import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { useI18n } from "../i18n";
import { supabase, isSupabaseConfigured, authRedirectTo } from "../supabase";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

interface PublicStats {
  n_buy: number | null;
  n_sell: number | null;
  n_wait: number | null;
  accuracy: number | null;
  breadth: number | null;
  regime: string | null;
  sentiment: string | null;
  snapshot_date: string | null;
}

interface SignalRow {
  asset: string;
  action: string;
  prob: number | null;
  mode: string | null;
  taleb: number | null;
  accuracy: number | null;
  snapshot_date: string | null;
}

function actionColor(a: string): string {
  const u = a.toUpperCase();
  if (u === "BUY") return "text-neon";
  if (u === "SELL") return "text-danger";
  return "text-muted";
}

const pct = (v: number | null): string => (v == null ? "-" : `${Math.round(v * 100)}%`);

export function LiveSignals() {
  const { s } = useI18n();
  const [session, setSession] = useState<Session | null>(null);
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [stats, setStats] = useState<PublicStats | null>(null);
  const [rows, setRows] = useState<SignalRow[] | null>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, sess) => {
      setSession(sess);
      setSent(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("public_stats")
      .select("*")
      .eq("id", 1)
      .maybeSingle()
      .then(({ data }) => setStats(data as PublicStats | null));
  }, []);

  useEffect(() => {
    if (!supabase || !session) {
      setAllowed(null);
      setRows(null);
      return;
    }
    supabase.rpc("is_allowed").then(({ data }) => {
      const ok = data === true;
      setAllowed(ok);
      if (ok) {
        supabase!
          .from("signals")
          .select("*")
          .order("asset")
          .then(({ data: sig }) => setRows((sig as SignalRow[]) ?? []));
      }
    });
  }, [session]);

  const sendLink = async () => {
    if (!supabase || !email || !consent) return;
    setSending(true);
    setError(null);
    const { error: e } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: authRedirectTo() },
    });
    setSending(false);
    if (e) setError(e.message);
    else setSent(true);
  };

  const signOut = async () => {
    await supabase?.auth.signOut();
    setRows(null);
    setAllowed(null);
  };

  const asOf = (d: string | null | undefined) =>
    d ? `${s.signals.asOf} ${d}` : null;

  return (
    <div className="border-y border-line bg-panel2/40">
      <Section id="signals" className="py-16">
        <SectionHeading
          kicker={s.signals.kicker}
          title={s.signals.heading}
          sub={s.signals.sub}
        />

        {!isSupabaseConfigured ? (
          <Reveal>
            <div className="panel rounded-xl p-6 text-muted">
              {s.signals.notConfigured}
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            {/* Public teaser */}
            <Reveal className="h-full">
              <div className="panel h-full rounded-xl p-6">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="font-mono text-2xl font-bold text-neon">
                      {stats?.n_buy ?? "-"}
                    </div>
                    <div className="mt-1 text-xs text-muted">{s.signals.buy}</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-danger">
                      {stats?.n_sell ?? "-"}
                    </div>
                    <div className="mt-1 text-xs text-muted">{s.signals.sell}</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-muted">
                      {stats?.n_wait ?? "-"}
                    </div>
                    <div className="mt-1 text-xs text-muted">{s.signals.wait}</div>
                  </div>
                </div>
                <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">{s.signals.accuracy}</span>
                    <span className="font-mono text-ink-text">{pct(stats?.accuracy ?? null)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">{s.signals.breadth}</span>
                    <span className="font-mono text-ink-text">{pct(stats?.breadth ?? null)}</span>
                  </div>
                </div>
                {asOf(stats?.snapshot_date) && (
                  <div className="mt-4 font-mono text-xs text-muted">
                    {asOf(stats?.snapshot_date)}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Gated area */}
            <Reveal delay={80} className="h-full">
              <div className="panel h-full rounded-xl p-6">
                {!session ? (
                  sent ? (
                    <p className="text-neon">{s.signals.linkSent}</p>
                  ) : (
                    <div>
                      <p className="text-ink-text">{s.signals.signInCta}</p>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={s.signals.emailPlaceholder}
                        className="mt-4 w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-ink-text outline-none focus:border-neon/60"
                      />
                      <label className="mt-3 flex items-start gap-2 text-xs text-muted">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-0.5 accent-[color:var(--color-neon)]"
                        />
                        <span>
                          {s.signals.consent}{" "}
                          <a href="#privacy" className="text-neon underline">
                            {s.signals.privacyLink}
                          </a>
                        </span>
                      </label>
                      <button
                        type="button"
                        disabled={!email || !consent || sending}
                        onClick={sendLink}
                        className="mt-4 rounded-md bg-neon px-4 py-2 text-sm font-medium text-ink transition-opacity disabled:opacity-40"
                      >
                        {sending ? s.signals.sending : s.signals.send}
                      </button>
                      {error && <p className="mt-3 text-xs text-danger">{error}</p>}
                    </div>
                  )
                ) : allowed === false ? (
                  <div>
                    <p className="text-muted">{s.signals.pending}</p>
                    <button
                      type="button"
                      onClick={signOut}
                      className="mt-4 text-xs text-muted underline hover:text-neon"
                    >
                      {s.signals.signOut}
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-3 flex items-center justify-between text-xs text-muted">
                      <span className="font-mono">
                        {asOf(rows?.[0]?.snapshot_date) ?? ""}
                      </span>
                      <button
                        type="button"
                        onClick={signOut}
                        className="underline hover:text-neon"
                      >
                        {s.signals.signOut}
                      </button>
                    </div>
                    {rows && rows.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left font-mono text-sm">
                          <thead className="text-xs uppercase tracking-wider text-muted">
                            <tr>
                              <th className="py-1 pr-3">{s.signals.colAsset}</th>
                              <th className="py-1 pr-3">{s.signals.colAction}</th>
                              <th className="py-1 pr-3">{s.signals.colProb}</th>
                              <th className="py-1 pr-3">{s.signals.colMode}</th>
                              <th className="py-1 pr-3">{s.signals.colTaleb}</th>
                              <th className="py-1">{s.signals.colAcc}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((r) => (
                              <tr key={r.asset} className="border-t border-line/60">
                                <td className="py-1.5 pr-3 text-ink-text">{r.asset}</td>
                                <td className={`py-1.5 pr-3 ${actionColor(r.action)}`}>
                                  {r.action}
                                </td>
                                <td className="py-1.5 pr-3 text-muted">{pct(r.prob)}</td>
                                <td className="py-1.5 pr-3 text-muted">{r.mode ?? "-"}</td>
                                <td className="py-1.5 pr-3 text-muted">
                                  {r.taleb == null ? "-" : r.taleb.toFixed(1)}
                                </td>
                                <td className="py-1.5 text-muted">{pct(r.accuracy)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-muted">{s.signals.empty}</p>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        )}

        <p className="mt-4 font-mono text-xs text-muted">{s.signals.disclaimer}</p>
      </Section>
    </div>
  );
}
