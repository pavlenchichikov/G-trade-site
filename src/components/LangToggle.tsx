import { useI18n, type Lang } from "../i18n";

const OPTS: Lang[] = ["en", "ru"];

export function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="inline-flex rounded-md border border-line p-0.5 font-mono text-xs"
      role="group"
      aria-label="Language"
    >
      {OPTS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded px-2 py-1 transition-colors ${
            lang === l
              ? "bg-neon text-ink"
              : "text-muted hover:text-ink-text"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
