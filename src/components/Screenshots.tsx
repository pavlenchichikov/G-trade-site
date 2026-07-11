import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { asset } from "../config";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const IMAGES = [
  "screenshot-radar.png",
  "screenshot-asset.png",
  "screenshot-signals.png",
];

export function Screenshots() {
  const { s } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="screenshots" className="py-16">
      <SectionHeading kicker={s.shots.kicker} title={s.shots.heading} sub={s.shots.sub} />
      <div className="grid gap-6 lg:grid-cols-3">
        {s.shots.captions.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="h-full">
            <figure className="panel h-full overflow-hidden rounded-xl">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block w-full cursor-zoom-in overflow-hidden"
                aria-label={c.title}
              >
                <img
                  src={asset(IMAGES[i])}
                  alt={c.title}
                  loading="lazy"
                  className="w-full border-b border-line transition-transform duration-300 hover:scale-[1.03]"
                />
              </button>
              <figcaption className="p-5">
                <h3 className="font-semibold text-ink-text">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={s.shots.captions[open].title}
        >
          <img
            src={asset(IMAGES[open])}
            alt={s.shots.captions[open].title}
            className="max-h-[90vh] max-w-[95vw] rounded-lg border border-line shadow-2xl"
          />
        </div>
      )}
    </Section>
  );
}
