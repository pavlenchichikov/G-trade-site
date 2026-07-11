import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  value: string;
  className?: string;
}

const reduce = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Counts a numeric value up from zero when it scrolls into view, preserving any
 * non-numeric prefix/suffix (e.g. "~181", "15y", "45+"). Static under reduced
 * motion or when the value has no number.
 */
export function CountUp({ value, className }: Props) {
  const parts = value.match(/^(\D*)(\d+)(.*)$/);
  const { ref, inView } = useInView<HTMLSpanElement>();
  const target = parts ? parseInt(parts[2], 10) : 0;
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !parts || reduce()) return;
    started.current = true;
    const duration = 1100;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, parts]);

  if (!parts || reduce()) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parts[1]}
      {n}
      {parts[3]}
    </span>
  );
}
