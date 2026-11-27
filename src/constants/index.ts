import type { NavItem } from "../types";

// Theme constants
export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK_CLASS = "dark";
export const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";
export const THEME_LIGHT = "light" as const;
export const THEME_DARK = "dark" as const;

export const NAV_ITEMS: NavItem[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export const PERSONAL_INFO = {
  NAME: "Gor Arestakesyan",
  COPYRIGHT_YEAR: new Date().getFullYear(),
} as const;
