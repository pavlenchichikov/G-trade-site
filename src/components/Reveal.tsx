import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades and lifts its children into view on scroll. A no-op (renders visible
 * immediately) when the user prefers reduced motion - see useInView.
 */
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
