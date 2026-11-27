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
  title: string;
  company: string;
  summary: string;
  role: string;
  outcome?: string;
  stack: string[];
  featured?: boolean;
}
