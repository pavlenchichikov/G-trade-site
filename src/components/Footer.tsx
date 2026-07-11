import { useI18n } from "../i18n";
import { LINKS } from "../config";
import { Section } from "./Section";
import { Logo } from "./Logo";
import { GitHubIcon, MailIcon } from "./icons";

export function Footer() {
  const { s } = useI18n();
  return (
    <footer className="border-t border-line bg-panel2">
      <Section className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              {s.footer.disclaimerTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {s.footer.disclaimer}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-ink-text transition-colors hover:text-neon"
            >
              <GitHubIcon />
              {s.footer.repo}
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 text-ink-text transition-colors hover:text-neon"
            >
              <MailIcon />
              {s.footer.contact}
            </a>
            <span className="text-muted">{s.footer.license}</span>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <Logo />
          <span>{s.footer.builtWith}</span>
        </div>
      </Section>
    </footer>
  );
}
