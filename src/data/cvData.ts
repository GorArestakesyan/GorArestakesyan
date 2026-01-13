import type { Experience, Education, Contact, Language } from "../types";

export type { Experience, Education, Contact, Language };

export const personalInfo = {
  name: "Gor Arestakesyan",
  title: "Front-End & React Native Engineer",
  contact: {
    email: "gorarestakesyan0@gmail.com",
    github: "https://github.com/GorArestakesyan",
    portfolio:
      "https://notion.so/Projects-Portfolio-Gor-Arestakesyan-2b48806d3359802181f2f1c0888d37fe",
    linkedin: "https://www.linkedin.com/in/gor-arestakesyan/",
  } as Contact,
};

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Nutreva AI",
    period: "Sep 2025 – Dec 2025",
    categories: ["AI", "Health Tech", "Fitness Tech"],
    achievements: [
      "Built real-time post creation using Supabase cron jobs, improving content update speed by 40%.",
      "Added promo code support and subscription payments via Apple Pay & Google Pay, enhancing user engagement and simplifying checkout.",
      "Integrated ML models for portion detection, achieving 92%+ accuracy.",
      "Developed nutrition & wellness features: calorie tracking, food scanning, and AI-powered meal analysis",
    ],
  },
  {
    title: "Front End Engineer",
    company: "ShellLogix",
    location: "Yerevan, Armenia",
    period: "Jan 2024 – Dec 2025",
    categories: [
      "E-Commerce",
      "Marketplace Platforms",
      "Booking & Reservation Systems",
      "Social Platforms",
      "Wellness",
      "Health-Tech",
      "Medical",
      "Enterprise Software",
      "FinTech & Payment Integrations",
    ],
    achievements: [
      "Implemented Firebase Analytics & Crashlytics for user behavior tracking.",
      "Deployed Mercure real-time event system for live updates, reducing user wait time for notifications by 50%.",
      "Introduced feature flags for remote feature control, accelerating feature rollout and testing cycles by ~30%.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Webex Technologies",
    location: "Yerevan, Armenia",
    period: "Jun 2022 – Nov 2023",
    categories: ["AI", "Fashion-Tech"],
    achievements: [
      "Added WebSocket support and REST APIs, enabling real-time communication for users.",
      "Developed interactive map features, improving user navigation flow.",
      "Engineered multiplayer game interactions across multiple devices, increasing user retention in competitive modes.",
    ],
  },
  {
    title: "React Native Developer",
    company: "Wearify",
    location: "Yerevan, Armenia",
    period: "Nov 2020 – Jun 2022",
    categories: ["Fashion-Tech", "Mobile"],
    achievements: [
      "Executed multiple project redesigns, enhancing user experience and increasing task completion rate by 20%.",
      "Assisted in testing and deploying updates, ensuring smooth version rollouts.",
      "Added a color-matching algorithm for user style analysis, delivering personalized style recommendations and boosting feature adoption by 30%.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Network Administration",
    institution: "Yerevan State College of Informatics (YSCI)",
    period: "2016 – 2019",
  },
  {
    degree: "Front End Engineering",
    institution: "Armenian Code Academy (ACA)",
    period: "Mar 2020 – Jun 2020",
  },
  {
    degree: "Software Development",
    institution: "InnovallT School",
    period: "Jul 2019 – Jan 2020",
  },
];

export const technicalSkills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "React Native",
  "Expo",
  "React Navigation",
  "MobX",
  "Redux",
  "Redux Toolkit",
  "GraphQL",
  "REST APIs",
  "Supabase",
  "Firebase (Auth, Analytics, Crashlytics)",
  "CI/CD",
  "Bitbucket",
  "TanStack Query",
  "Jest",
  "React Testing Library",
  "Sentry",
  "GitHub",
  "GitLab",
  "Git",
  "Styled Components",
  "Figma",
  "WebSockets",
  "Feature Flags",
  "Mercure",
  "Apple Pay",
  "Google Pay",
  "Tailwind",
  "Jira",
  "Node.js",
  "PostgreSQL",
  "Vite",
  "Webpack",
  "ESLint",
  "Postman",
  "Responsive Design",
  "PWA",
];

export const softSkills = [
  "Logical Thinking",
  "Communication",
  "Time Management",
  "Adaptability",
  "Teamwork",
  "Critical Thinking",
  "Collaboration",
  "Problem Solving",
];

export const languages: Language[] = [
  { name: "English", level: "B2 Upper Intermediate" },
  { name: "Russian", level: "B2 – Upper Intermediate" },
  { name: "Armenian", level: "Native" },
];
