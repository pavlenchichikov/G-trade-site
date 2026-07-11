import type { ComponentType } from "react";
import { useI18n } from "../i18n";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import {
  SignalIcon,
  ShieldIcon,
  LayersIcon,
  FlaskIcon,
  GaugeIcon,
  CompassIcon,
} from "./icons";

const ICONS: ComponentType<{ className?: string }>[] = [
  SignalIcon,
  ShieldIcon,
  LayersIcon,
  FlaskIcon,
  GaugeIcon,
  CompassIcon,
];

export function Features() {
  const { s } = useI18n();
  return (
    <Section id="features" className="py-16">
      <SectionHeading kicker={s.features.kicker} title={s.features.heading} sub={s.features.sub} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.features.items.map((f, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={f.title} delay={(i % 3) * 90} className="h-full">
              <div className="panel group h-full rounded-xl p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-neon/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon/30 bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-text">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
