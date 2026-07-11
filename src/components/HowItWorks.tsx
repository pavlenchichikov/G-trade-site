import { useI18n } from "../i18n";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Terminal } from "./Terminal";

export function HowItWorks() {
  const { s } = useI18n();
  return (
    <Section id="how" className="py-16">
      <SectionHeading kicker={s.how.kicker} title={s.how.heading} sub={s.how.sub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {s.how.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 80} className="h-full">
            <div className="panel h-full rounded-xl p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-neon/40 bg-neon/10 font-mono text-sm text-neon">
                {i + 1}
              </div>
              <h3 className="mt-3 font-semibold text-ink-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl">
        <Terminal />
        <p className="mt-3 text-center font-mono text-xs text-muted">
          {s.how.terminalCaption}
        </p>
      </Reveal>
    </Section>
  );
}
