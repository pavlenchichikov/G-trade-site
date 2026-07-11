import { useI18n } from "../i18n";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Universe() {
  const { s } = useI18n();
  return (
    <Section id="universe" className="py-16">
      <SectionHeading kicker={s.universe.kicker} title={s.universe.heading} sub={s.universe.sub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.universe.classes.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 80} className="h-full">
            <div className="panel h-full rounded-xl p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-neon/40">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-ink-text">{c.name}</h3>
                <CountUp
                  value={c.count}
                  className="font-mono text-lg font-bold text-neon glow"
                />
              </div>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
                {c.examples}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
