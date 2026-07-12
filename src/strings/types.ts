export interface Metric {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface PipelineStep {
  title: string;
  body: string;
}

export interface ResearchPoint {
  title: string;
  body: string;
}

export interface AssetClass {
  name: string;
  count: string;
  examples: string;
}

export interface ShotCaption {
  title: string;
  body: string;
}

export interface TechGroup {
  group: string;
  items: string[];
}

export interface Strings {
  nav: {
    features: string;
    how: string;
    research: string;
    universe: string;
    signals: string;
    screenshots: string;
    tech: string;
    github: string;
  };
  hero: {
    badge: string;
    tagline: string;
    summary: string;
    highlights: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  metrics: {
    heading: string;
    items: Metric[];
  };
  features: {
    kicker: string;
    heading: string;
    sub: string;
    items: FeatureItem[];
  };
  how: {
    kicker: string;
    heading: string;
    sub: string;
    steps: PipelineStep[];
    terminalCaption: string;
  };
  research: {
    kicker: string;
    heading: string;
    sub: string;
    lead: string;
    points: ResearchPoint[];
    gateTitle: string;
    gateBody: string;
  };
  universe: {
    kicker: string;
    heading: string;
    sub: string;
    classes: AssetClass[];
  };
  shots: {
    kicker: string;
    heading: string;
    sub: string;
    captions: ShotCaption[];
  };
  tech: {
    kicker: string;
    heading: string;
    sub: string;
    groups: TechGroup[];
  };
  footer: {
    disclaimerTitle: string;
    disclaimer: string;
    license: string;
    repo: string;
    contact: string;
    builtWith: string;
  };
  signals: {
    kicker: string;
    heading: string;
    sub: string;
    asOf: string;
    buy: string;
    sell: string;
    wait: string;
    accuracy: string;
    breadth: string;
    signInCta: string;
    emailPlaceholder: string;
    consent: string;
    privacyLink: string;
    send: string;
    sending: string;
    linkSent: string;
    signedInAs: string;
    signOut: string;
    pending: string;
    colAsset: string;
    colAction: string;
    colProb: string;
    colMode: string;
    colTaleb: string;
    colAcc: string;
    empty: string;
    notConfigured: string;
    disclaimer: string;
  };
  privacy: {
    heading: string;
    body: string;
  };
}
