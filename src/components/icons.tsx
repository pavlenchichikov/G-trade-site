import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

const S = ({ children, className = "h-5 w-5" }: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export function GitHubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <S className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </S>
  );
}

export function SignalIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M21 7v5h-5" />
    </S>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </S>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </S>
  );
}

export function FlaskIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3" />
      <path d="M7.5 14h9" />
    </S>
  );
}

export function GaugeIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <path d="M12 13 16 9" />
      <path d="M4 18a8 8 0 1 1 16 0" />
      <circle cx="12" cy="13" r="1" />
    </S>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <S className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 4-4 2 2-4 4-2Z" />
    </S>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <S className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </S>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <S className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </S>
  );
}
