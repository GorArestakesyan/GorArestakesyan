import type {
  Experience,
  Project,
  Education,
  Contact,
  Language,
  SkillGroup,
} from "../types";

export const personalInfo = {
  name: "Gor Arestakesyan",
  title: "Senior Frontend Engineer",
  location: "Yerevan, Armenia",
  availability: "Open to senior frontend roles",
  workPreference: "On-site or hybrid in Armenia, or remote for companies abroad.",
  cvUrl: "/Gor_Arestakesyan_CV.pdf",
  intro:
    "I build real-time web and mobile products with React and TypeScript, and I make them fast.",
  summary:
    "Six years of commercial work across React, Next.js and React Native. Lately that means live updates and in-app games for 1,000+ concurrent users, Mercure event layers that halved notification wait times, and the monitoring to keep it all healthy. I review code, mentor junior developers, and work closely with product and design.",
  contact: {
    email: "gorarestakesyan0@gmail.com",
    github: "https://github.com/GorArestakesyan",
    portfolio:
      "https://app.notion.com/p/gorarestakesyan/Gor-Arestakesyan-Portfolio-4248806d33598097b077c3e12f49bd63",
    linkedin: "https://www.linkedin.com/in/gor-arestakesyan/",
  } satisfies Contact,
};

export const experiences: Experience[] = [
  {
    id: "koreez",
    about: "Ed-tech platform with a React web app, a mobile app and real-time in-app games.",
    title: "Senior Frontend Engineer",
    company: "Koreez Ed Tech",
    location: "Yerevan, Armenia",
    period: "Feb 2026 – Present",
    start: "2026-02",
    note: "React and React Native",
    achievements: [
      "Optimized performance of real-time features, including in-app games, for 1,000+ concurrent users.",
      "Deliver features across the React web platform and mobile app, from Figma designs to production release.",
      "Led development of a React Native app from scratch, now in deployment; designed its navigation, state and API layer.",
      "Review pull requests and mentor junior developers on React, TypeScript and code quality.",
      "Integrated Firebase Crashlytics with Slack alerts for real-time crash monitoring and faster incident response.",
    ],
  },
  {
    id: "nutreva",
    about: "US company building an AI nutrition and wellness app.",
    title: "Senior Full Stack Engineer",
    company: "Nutreva AI",
    location: "Chicago, IL (remote)",
    period: "Sep 2025 – Feb 2026",
    start: "2025-09",
    end: "2026-02",
    partTime: true,
    note: "Part-time, alongside a full-time role",
    achievements: [
      "Built live feed updates on a Mercure real-time event system, cutting notification wait times by about 50%.",
      "Engineered real-time post creation with Supabase cron jobs, speeding up content updates by 40%.",
      "Added subscription payments and promo codes via Apple Pay and Google Pay, plus feature flags for remote rollout.",
    ],
  },
  {
    id: "shelllogix",
    about: "Software company; I worked on ESG, crypto and real-money gaming products.",
    title: "Senior Frontend Engineer",
    company: "ShellLogix",
    location: "Yerevan, Armenia",
    period: "Nov 2023 – Dec 2025",
    start: "2023-11",
    end: "2025-12",
    note: "Promoted twice: React Native Developer, then Frontend Developer, then Senior Frontend Engineer",
    steps: [
      { title: "React Native Developer", short: "RN", start: "2023-11", end: "2024-01" },
      { title: "Frontend Developer", short: "Frontend Dev", start: "2024-01", end: "2025-01" },
      { title: "Senior Frontend Engineer", short: "Senior Frontend", start: "2025-01", end: "2025-12" },
    ],
    achievements: [
      "Implemented a Mercure-based real-time event layer for live updates, cutting notification wait times by about 50%.",
      "Built responsive, reusable React and TypeScript UI components for an ESG metrics web platform in an Nx monorepo.",
      "Introduced feature flags for remote feature control, speeding up rollout and testing cycles by about 30%.",
      "Rolled out Firebase Analytics and Crashlytics across web and React Native projects.",
      "Developed a crypto news and market data app with TypeScript, REST APIs and Apollo GraphQL.",
      "Built a real-money gaming app in React Native: gameplay flows, rewards, cash-out and KYC onboarding.",
    ],
  },
  {
    id: "webex",
    about: "Enterprise web and mobile apps with real-time communication and maps.",
    title: "Middle Frontend Engineer",
    company: "Webex Technologies",
    location: "Yerevan, Armenia",
    period: "Sep 2021 – Oct 2023",
    start: "2021-09",
    end: "2023-10",
    note: "React and React Native",
    achievements: [
      "Built real-time communication features with WebSocket APIs for enterprise web and mobile apps.",
      "Developed interactive map and location-based features in agile teams.",
    ],
  },
  {
    id: "wearify",
    about: "Fashion-tech app with personalized style recommendations.",
    title: "Junior React Native Developer",
    company: "Wearify",
    location: "Yerevan, Armenia",
    period: "Aug 2020 – Sep 2021",
    start: "2020-08",
    end: "2021-09",
    achievements: [
      "Redesigned UI for multiple projects, increasing user task completion by 20%.",
      "Integrated a color-matching algorithm for personalized style recommendations, increasing feature adoption by 30%.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { label: "Frameworks", items: ["React", "Next.js (SSR)", "React Native", "Expo"] },
  {
    label: "State and data",
    items: ["Redux Toolkit", "TanStack Query", "MobX", "Apollo GraphQL", "REST", "WebSockets", "Mercure (SSE)"],
  },
  {
    label: "Performance and monitoring",
    items: ["Web Vitals", "Lazy loading", "Code splitting", "Chrome DevTools", "Sentry", "Firebase Analytics", "Crashlytics"],
  },
  {
    label: "UI",
    items: ["Material UI", "Tailwind CSS", "Styled Components", "Responsive design", "Chart libraries", "Figma"],
  },
  {
    label: "Architecture and delivery",
    items: ["Nx monorepos", "Yarn Workspaces", "Feature flags", "Jest", "React Testing Library", "CI/CD", "Code review", "Git"],
  },
];

export const education: Education[] = [
  { degree: "Front End Engineering", institution: "Armenian Code Academy (ACA)", period: "Mar 2020 – Jun 2020" },
  { degree: "Software Development", institution: "InnovaIT School", period: "Jul 2019 – Jan 2020" },
  { degree: "Network Administration", institution: "Yerevan State College of Informatics (YSCI)", period: "2016 – 2019" },
];

export const languages: Language[] = [
  { name: "Armenian", level: "Native" },
  { name: "English", level: "B2, upper-intermediate" },
  { name: "Russian", level: "B2, upper-intermediate" },
];

export const highlights = [
  { value: 1000, suffix: "+", label: "concurrent users on real-time features I optimized" },
  { value: 50, suffix: "%", label: "shorter notification wait times with Mercure event layers" },
  { value: 6, suffix: "+", label: "years shipping React and React Native products" },
  { value: 2, suffix: "×", label: "promoted at ShellLogix in two years" },
];

export const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Expo",
  "Redux Toolkit",
  "TanStack Query",
  "GraphQL",
  "WebSockets",
  "Mercure",
  "Nx",
  "Tailwind CSS",
  "Sentry",
  "Firebase",
  "Jest",
];

export const projects: Project[] = [
  {
    title: "Ed-tech mobile app",
    company: "Koreez Ed Tech",
    summary:
      "React Native app built from scratch alongside the React web platform, with live in-app games.",
    role: "Led development: navigation, state and API layer; performance of real-time features.",
    outcome: "Real-time games tuned for 1,000+ concurrent users",
    stack: ["React Native", "React", "TypeScript", "Firebase Crashlytics"],
    featured: true,
  },
  {
    title: "Live event layer",
    company: "ShellLogix and Nutreva AI",
    summary:
      "Mercure (SSE) real-time event layer behind live feed updates and notifications.",
    role: "Implemented the event layer and the live updates built on it.",
    outcome: "About 50% shorter notification wait times",
    stack: ["Mercure", "SSE", "React", "TypeScript"],
  },
  {
    title: "ESG metrics platform",
    company: "ShellLogix",
    summary: "ESG metrics web platform, built from reusable components in an Nx monorepo.",
    role: "Built responsive UI components and introduced feature flags.",
    outcome: "About 30% faster rollout and testing cycles",
    stack: ["React", "TypeScript", "Nx", "Feature flags"],
  },
  {
    title: "Real-money gaming app",
    company: "ShellLogix",
    summary: "Mobile gaming app with gameplay flows, rewards, cash-out and KYC onboarding.",
    role: "Built the app's core flows in React Native.",
    stack: ["React Native", "TypeScript", "KYC"],
  },
  {
    title: "Crypto news and market data",
    company: "ShellLogix",
    summary: "Crypto news and market data app.",
    role: "Developed the app and its data layer.",
    stack: ["TypeScript", "REST", "Apollo GraphQL"],
  },
];
