import { useI18n } from "../i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function PrivacyNotice() {
  const { s } = useI18n();
  return (
    <Section id="privacy" className="py-12">
      <Reveal>
        <div className="panel rounded-xl p-6">
          <h2 className="font-mono text-xs uppercase tracking-wider text-neon">
            {s.privacy.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {s.privacy.body}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
