import type { NavItem } from "../types";

// Theme constants
export const THEME_STORAGE_KEY = "theme";
export const THEME_DARK_CLASS = "dark";
export const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";
export const THEME_LIGHT: "light" = "light";
export const THEME_DARK: "dark" = "dark";

// Navigation constants
export const NAV_OFFSET = 80;
export const SCROLL_THRESHOLD = 100;
export const MOBILE_BREAKPOINT = 768;

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Skills categories
export const SKILL_CATEGORIES = {
  FRONTEND: [
    "React.js",
    "Next.js",
    "React Native",
    "Expo",
    "React Navigation",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Styled Components",
  ],
  STATE_MANAGEMENT: ["Redux", "Redux Toolkit", "MobX", "TanStack Query"],
  BACKEND: [
    "GraphQL",
    "REST APIs",
    "Supabase",
    "Firebase (Auth, Analytics, Crashlytics)",
    "WebSockets",
    "Mercure",
  ],
  DEV_TOOLS: [
    "CI/CD",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jest",
    "Sentry",
    "Jira",
    "Figma",
  ],
  PAYMENT: ["Apple Pay", "Google Pay"],
} as const;

// Language level percentages
export const LANGUAGE_LEVELS = {
  NATIVE: 100,
  B2: 75,
  B1: 50,
  DEFAULT: 25,
} as const;

// Personal info
export const PERSONAL_INFO = {
  NAME: "Gor Arestakesyan",
  COPYRIGHT_YEAR: new Date().getFullYear(),
} as const;

