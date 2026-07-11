import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

interface HeadingProps {
  kicker?: string;
  title: string;
  sub?: string;
}

export function SectionHeading({ kicker, title, sub }: HeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      {kicker && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-neon to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="bg-gradient-to-br from-white via-white to-muted bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}
