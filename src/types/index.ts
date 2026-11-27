export type Theme = "light" | "dark";

/** Month in "YYYY-MM" form, used to place bars on the career trace. */
export type YearMonth = `${number}-${string}`;

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  start: YearMonth;
  /** Omitted for the current role. */
  end?: YearMonth;
  /** One line of company context for readers who don't know the company. */
  about?: string;
  note?: string;
  partTime?: boolean;
  /** Role steps inside one company, drawn as child bars on the trace. */
  steps?: { title: string; short?: string; start: YearMonth; end: YearMonth }[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Contact {
  email: string;
  github: string;
  portfolio: string;
  linkedin: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  /** featured: full-width card; main: detailed card; more: short store-listing card. */
  tier: "featured" | "main" | "more";
  title: string;
  company?: string;
  /** e.g. "Live", "In development", "Private (NDA)". */
  status?: string;
  summary: string;
  role?: string;
  highlights?: string[];
  outcome?: string;
  links?: { label: string; href: string }[];
  stack?: string[];
}
