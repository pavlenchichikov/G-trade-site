import { useI18n } from "../i18n";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ShieldIcon } from "./icons";

export function Research() {
  const { s } = useI18n();
  return (
    <div className="border-y border-line bg-panel2/40">
      <Section id="research" className="py-16">
        <SectionHeading kicker={s.research.kicker} title={s.research.heading} sub={s.research.sub} />
        <p className="max-w-3xl leading-relaxed text-muted">{s.research.lead}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {s.research.points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90} className="h-full">
              <div className="panel h-full rounded-xl p-6">
                <div className="font-mono text-xs text-neon">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-semibold text-ink-text">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-neon/30 bg-neon/5 p-6">
          <div className="flex items-center gap-2 text-neon">
            <ShieldIcon className="h-5 w-5" />
            <h3 className="font-semibold">{s.research.gateTitle}</h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-text">
            {s.research.gateBody}
          </p>
        </div>
      </Section>
    </div>
  );
}
