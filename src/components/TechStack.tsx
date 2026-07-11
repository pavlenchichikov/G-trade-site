import { useI18n } from "../i18n";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function TechStack() {
  const { s } = useI18n();
  return (
    <Section id="tech" className="py-16">
      <SectionHeading kicker={s.tech.kicker} title={s.tech.heading} sub={s.tech.sub} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.tech.groups.map((g, i) => (
          <Reveal key={g.group} delay={(i % 4) * 80} className="h-full">
          <div className="panel h-full rounded-xl p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-neon">
              {g.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-md border border-line bg-ink px-2.5 py-1 text-sm text-ink-text"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
