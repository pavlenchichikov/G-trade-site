import { useI18n } from "../i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Metrics() {
  const { s } = useI18n();
  return (
    <Section className="py-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {s.metrics.items.map((m, i) => (
          <Reveal key={m.label} delay={i * 70}>
            <div className="panel h-full rounded-xl p-6 text-center">
              <CountUp
                value={m.value}
                className="font-mono text-3xl font-bold text-neon glow sm:text-4xl"
              />
              <div className="mt-2 text-sm text-muted">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
