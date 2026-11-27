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
  availability: "Open to React Native and frontend roles",
  workPreference: "On-site or hybrid in Armenia, or remote for companies abroad.",
  cvUrl: "/Gor_Arestakesyan_CV.pdf",
  intro:
    "I build real-time mobile and web products with React Native, React and TypeScript, and I make them fast.",
  summary:
    "Six years of commercial work across React Native, React and Next.js. Lately that means live updates and in-app games for 1,000+ concurrent users, Mercure event layers that halved notification wait times, and the monitoring to keep it all healthy. I review code, mentor junior developers, and work closely with product and design.",
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
    about: "Armenian ed-tech company: student competitions (koreez.am), a teacher platform and learning apps.",
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

// Sources: CV, Notion portfolio (skills + project stacks) and the previous site.
export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  {
    label: "Web",
    items: ["React", "Next.js (SSR)", "Vite", "Webpack", "PWA", "Responsive design"],
  },
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo",
      "React Navigation",
      "Reanimated",
      "Gesture Handler",
      "Native modules",
      "Push notifications",
      "Offline storage (AsyncStorage)",
    ],
  },
  {
    label: "State and data",
    items: ["Redux Toolkit", "Redux", "TanStack Query", "MobX", "Apollo GraphQL", "GraphQL", "REST", "WebSockets", "Mercure (SSE)"],
  },
  {
    label: "Backend and services",
    items: ["Firebase (Auth, Analytics, Crashlytics)", "Supabase", "NestJS", "Node.js", "PostgreSQL"],
  },
  {
    label: "Payments and sign-in",
    items: ["In-app payments", "Subscriptions", "Promo codes", "Apple Pay", "Google Pay", "Idram", "Telcell", "KYC onboarding", "VK ID", "Yandex ID"],
  },
  {
    label: "Performance and monitoring",
    items: ["Web Vitals", "Lazy loading", "Code splitting", "Chrome DevTools", "Sentry", "Firebase Crashlytics", "Slack alerts"],
  },
  {
    label: "UI and design",
    items: ["Material UI", "Tailwind CSS", "Styled Components", "Chart libraries", "Figma"],
  },
  {
    label: "Testing",
    items: ["Jest", "React Testing Library", "React Native Testing Library"],
  },
  {
    label: "Release and CI/CD",
    items: ["EAS", "Fastlane", "Mobile CI/CD", "CI/CD", "App Store", "Google Play", "RuStore"],
  },
  {
    label: "Architecture and delivery",
    items: ["Nx monorepos", "Yarn Workspaces", "Feature flags", "A/B testing", "Code review", "Mentoring"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Postman", "ESLint"],
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

// Sources: CV, the Notion portfolio and the live sites. Only add facts that appear
// in one of them. Order = strongest first.
export const projects: Project[] = [
  {
    tier: "featured",
    title: "Umolyot",
    company: "Koreez Ed Tech",
    status: "Live",
    summary:
      "Learning app for schoolchildren: short assignments, quizzes and game-based lessons that adapt to each student's level.",
    role: "React Native engineer in a team of 10. Built the app from scratch and owned its store releases.",
    highlights: [
      "Built the app from scratch and implemented the UI from the designs",
      "VK ID and Yandex ID sign-in, plus native modules such as sound",
      "GitLab feature flags for A/B testing and remote rollout",
      "Released to the App Store, Google Play and RuStore, with Fastlane automating builds",
      "Also took NestJS backend tasks",
    ],
    stack: ["React Native", "TypeScript", "NestJS", "Fastlane", "GitLab feature flags", "VK ID", "Yandex ID", "Native modules"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/ru/app/id6802281905" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.umolet" },
      { label: "RuStore", href: "https://www.rustore.ru/catalog/app/com.umolet" },
    ],
  },
  {
    tier: "featured",
    title: "Nutreva AI",
    company: "Nutreva AI",
    status: "Live",
    summary: "AI nutrition app: meal tracking, food scanning, calorie goals and a community feed.",
    role: "React Native engineer (part-time, remote) in a team of 6.",
    highlights: [
      "Real-time post creation with Supabase cron jobs, about 40% faster content updates",
      "Live post updates on a Mercure real-time event system",
      "ML models for portion detection and AI meal analysis",
      "Subscriptions and promo codes with Apple Pay and Google Pay",
      "Feature flags for remote rollout",
    ],
    outcome: "About 50% shorter notification wait times",
    stack: ["React Native", "TypeScript", "Supabase", "Mercure (SSE)", "Apple Pay", "Google Pay", "Feature flags", "ML models"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/nutreva-nutrition-companion/id6746819437" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.nuetreva.app" },
    ],
  },
  {
    tier: "featured",
    title: "Koreez mobile app",
    company: "Koreez Ed Tech",
    status: "In development",
    summary: "React Native companion to the Koreez web platform, with real-time in-app games.",
    role: "Led development from scratch: navigation, state and API layer, real-time performance, builds and store submission.",
    highlights: [
      "Real-time in-app games tuned for 1,000+ concurrent users",
      "Idram and Telcell payments",
      "EAS and Fastlane builds and store submission",
      "Crashlytics crash alerts sent to Slack",
    ],
    outcome: "Real-time games for 1,000+ concurrent users",
    stack: ["React Native", "Expo", "TypeScript", "Idram", "Telcell", "EAS", "Fastlane", "Firebase Crashlytics"],
  },

  // Main projects, in pairs of similar size so the two-column grid stays even.
  {
    tier: "main",
    title: "Saymoji",
    company: "Personal project",
    status: "Live",
    summary:
      "Offline party game: one player explains a secret word with emojis only, and the team guesses on one shared phone.",
    role: "Solo developer.",
    highlights: [
      "Full game loop: team setup, turns, timer, scoring, rounds and win conditions",
      "Fully offline, with player stats and achievements stored on the device",
      "Searchable emoji picker that auto-bans emojis giving the word away",
      "English, Russian and Armenian UI with device language detection",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Reanimated", "Gesture Handler", "React Navigation", "AsyncStorage"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.saymoji.app" }],
  },
  {
    tier: "main",
    title: "Real-money gaming app",
    company: "ShellLogix",
    status: "Private (NDA)",
    summary: "React Native app where players complete missions, earn rewards and cash out real money.",
    role: "Built the app's core flows in React Native.",
    highlights: [
      "Missions, gameplay flows and rewards",
      "Cash-out flow for real-money winnings",
      "KYC onboarding to verify player identity",
      "Live updates over a Mercure real-time layer",
    ],
    stack: ["React Native", "TypeScript", "Mercure (SSE)", "KYC onboarding", "Cash-out payments"],
  },
  {
    tier: "main",
    title: "koreez.am",
    company: "Koreez Ed Tech",
    status: "Live",
    summary:
      "Armenia's educational competitions platform for grades 1 to 12: registration, competitions, schedules and leaderboards.",
    role: "Deliver features on the React web platform, from Figma designs to production release.",
    highlights: [
      "58,000+ students have taken part in Koreez competitions",
      "Competition registration, schedules and leaderboards",
    ],
    stack: ["React", "TypeScript", "Figma"],
    links: [{ label: "Website", href: "https://www.koreez.am" }],
  },
  {
    tier: "main",
    title: "Koreez Teacher",
    company: "Koreez Ed Tech",
    status: "Live",
    summary:
      "Free platform where teachers assign homework from ready-made questions, share a link with the class and see results.",
    role: "Deliver features on the React web platform, from Figma designs to production release.",
    highlights: [
      "150,000+ ready-made questions for grades 1 to 10",
      "Assign homework to a class in about 2 minutes",
    ],
    stack: ["React", "TypeScript", "Figma"],
    links: [{ label: "Website", href: "https://teacher.koreez.am" }],
  },
  {
    tier: "main",
    title: "Crypto news and market data",
    company: "ShellLogix",
    status: "Private (NDA)",
    summary: "React Native app bringing crypto news and market data together in one place.",
    role: "Developed the app and its data layer.",
    highlights: [
      "Crypto news feed and market data screens",
      "Data layer combining REST APIs and Apollo GraphQL",
    ],
    stack: ["React Native", "TypeScript", "REST APIs", "Apollo GraphQL"],
  },
  {
    tier: "main",
    title: "ESG metrics platform",
    company: "ShellLogix",
    status: "Private (NDA)",
    summary: "ESG metrics web platform, built from reusable components in an Nx monorepo.",
    role: "Built responsive UI components and introduced feature flags.",
    highlights: [
      "Reusable, responsive React and TypeScript components",
      "Feature flags for remote feature control",
    ],
    outcome: "About 30% faster rollout and testing cycles",
    stack: ["React", "TypeScript", "Nx monorepo", "Feature flags"],
  },

  // More live apps (the portfolio lists only a description and store links).
  {
    tier: "more",
    title: "Style DNA",
    status: "Live",
    summary: "AI styling and color analysis app with outfit recommendations based on the user's appearance.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/style-dna-ai-stylist-closet/id1358319821" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=style.dna.app" },
    ],
  },
  {
    tier: "more",
    title: "Cadastre Mobile",
    status: "Live",
    summary: "Armenia's official cadastre app: property applications, ownership information and restrictions.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/am/app/cadastre-mobile/id6450672543" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.cadastreapp" },
    ],
  },
  {
    tier: "more",
    title: "Moni",
    status: "Live",
    summary: "Crypto portfolio tracking app: assets, market performance and portfolio changes.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/moni-income-expense-tracker/id6740729952" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=lat.moni.app" },
    ],
  },
];
