import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { LINKS } from "../config";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { GitHubIcon, MenuIcon, CloseIcon } from "./icons";

export function Nav() {
  const { s } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: s.nav.features },
    { href: "#how", label: s.nav.how },
    { href: "#research", label: s.nav.research },
    { href: "#universe", label: s.nav.universe },
    { href: "#signals", label: s.nav.signals },
    { href: "#screenshots", label: s.nav.screenshots },
    { href: "#tech", label: s.nav.tech },
  ];

  // Close the mobile menu on Escape or once the viewport grows to desktop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => {
            const live = l.href === "#signals";
            return (
              <a
                key={l.href}
                href={l.href}
                className={`inline-flex items-center gap-1.5 transition-colors ${
                  live ? "text-neon" : "hover:text-ink-text"
                }`}
              >
                {live && (
                  <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-neon" />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-ink-text transition-colors hover:border-neon/60 hover:text-neon sm:inline-flex"
          >
            <GitHubIcon />
            <span className="hidden sm:inline">{s.nav.github}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-text transition-colors hover:border-neon/60 hover:text-neon md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-ink md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-1 sm:px-8">
            {links.map((l) => {
              const live = l.href === "#signals";
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 border-b border-line/50 py-3 text-sm transition-colors hover:text-neon ${
                    live ? "text-neon" : "text-ink-text"
                  }`}
                >
                  {live && (
                    <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-neon" />
                  )}
                  {l.label}
                </a>
              );
            })}
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 py-3 text-sm text-neon"
            >
              <GitHubIcon />
              {s.nav.github}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
