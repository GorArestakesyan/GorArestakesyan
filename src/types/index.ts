export type Theme = "light" | "dark";

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  categories: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Contact {
  phone: string;
  email: string;
  github: string;
  portfolio: string;
  linkedin: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface NavItem {
  id: string;
  label: string;
}

