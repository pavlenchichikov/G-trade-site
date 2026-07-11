import { useI18n } from "../i18n";
import { LINKS, asset } from "../config";
import { Section } from "./Section";
import { GitHubIcon } from "./icons";

export function Hero() {
  const { s } = useI18n();
  return (
    <div id="top" className="grid-bg border-b border-line">
      <Section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-3 py-1 font-mono text-xs text-neon">
            <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-neon" />
            {s.hero.badge}
          </span>
          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-neon/80 bg-clip-text text-4xl font-bold leading-[1.08] tracking-tight text-transparent sm:text-6xl">
            {s.hero.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-text/90 sm:text-xl">
            {s.hero.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-neon px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <GitHubIcon />
              {s.hero.ctaPrimary}
            </a>
            <a
              href="#screenshots"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-medium text-ink-text transition-colors hover:border-neon/60 hover:text-neon"
            >
              {s.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {s.hero.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-muted"
              >
                {h}
              </span>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted">{s.hero.note}</p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl reveal">
          <div className="overflow-hidden rounded-xl border border-line bg-panel2 shadow-[0_0_60px_-15px_rgba(45,227,160,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
            </div>
            <img
              src={asset("screenshot-radar.png")}
              alt={s.shots.captions[0].title}
              loading="eager"
              className="w-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
