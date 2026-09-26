export const personalInfo = {
  name: "Vrushank Bardolia",
  displayName: "VRUSHANK BARDOLIA",
  role: "Flutter Developer",
  location: "Surat",
  email: "vrushankbardolia.dev@gamail.com",
} as const;

export const heroData = {
  name: "Vrushank Bardolia",
  callout: "Hii, I am Vrushank Bardolia",
  meImage: "/images/me.webp",
  headline: "I design and develop mobile apps with pixel perfection.",
  description:
    "Flutter developer who can design apps and can turn an app from a Figma file to a working app in the Play Store.",
  ctaPrimary: "Resume",
  ctaSecondary: "Get in touch",
};

export const aboutData = {
  title: "About",
  bio: "I am a mobile developer based in Surat, still early in my career and building in public. I started with Flutter about a year and a half ago and now design most of my own screens before writing a line of code. I like small, focused apps that solve one problem well, and I am looking for a junior mobile or product engineering role where I can keep learning from people ahead of me.",
} as const;

export const workData = {
  title: "Projects",
  subtitle: "A few things I built to learn, and kept polishing after.",
  viewCodeLabel: "View code",
} as const;

export const designsData = {
  title: "Designs",
  subtitle: "UI work from Figma, grouped by the kind of screen.",
} as const;

export const techStackData = {
title: "Tools I work with",
  stack: [
    { name: "Flutter", image: "flutter.webp", scale: "scale-90" },
    { name: "Dart", image: "dart.webp", scale: "scale-105" },
    { name: "Firebase", image: "firebase.webp", scale: "scale-90" },
    { name: "Figma", image: "figma.webp", scale: "scale-85" },
    { name: "Antigravity", image: "antigravity.webp", scale: "scale-110" },
    { name: "Git & Github", image: "git.webp", scale: "scale-110" },
    { name: "Android Studio", image: "android_studio.webp", scale: "scale-110" },
    { name: "XCode", image: "xcode.webp", scale: "scale-135" },
  ],
} as const;

export const contactData = {
  title: "Let's build something.",
  description:
    "I am open to junior mobile developer and UI roles, freelance work, or just talking Flutter.",
  cta: "Get in touch",
  email: "mailto:hello@yourdomain.com",
} as const;

export const footerData = {
  text: "Built with Next.js and Tailwind.",
  author: "Vrushank",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { label: "Dribbble", href: "https://dribbble.com/yourusername", icon: "dribbble" },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
] as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Designs", href: "#designs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    group: "Languages & Frameworks",
    items: ["Dart", "Flutter", "GetX", "Provider", "JavaScript"],
  },
  {
    group: "Backend & Cloud",
    items: ["Firebase", "Firestore", "Cloud Functions", "Firebase Auth", "REST APIs"],
  },
  {
    group: "Design",
    items: ["Figma", "Auto Layout", "Prototyping", "Design Systems"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  outcome: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "budgetly",
    name: "Budgetly",
    tagline: "Budget and expense tracking Android app",
    problem:
      "People often lose track of their daily expenses and struggle to save money due to a lack of proper budgeting tools. Budgetly addresses this by providing a simple yet effective platform to monitor income and expenses, helping users make informed financial decisions.",
    role: "Developed the whole application from planning to deployment as a solo developer.",
    stack: ["Flutter", "GetX", "Firebase",],
    outcome:
      "Successfully developed and launched Budgetly as a solo project, creating a user-friendly app that helps individuals manage their finances effectively. The app features intuitive expense tracking, income monitoring, and provides valuable insights to support better financial planning.",
    image: "/projects/budgetly.webp",
    featured: true,
  },
  {
    slug: "budgetly-landing-page",
    name: "Budgetly Landing Page",
    tagline: "Landing page for Budgetly app",
    problem:
      "I wanted to create a landing page for Budgetly app to showcase its features and benefits to potential users.",
    role: "Developed the landing page for Budgetly app.",
    stack: ["HTML", "CSS", "JavaScript"],
    outcome:
      "Successfully developed a landing page for Budgetly app that showcases its features and benefits to potential users.",
    image: "/projects/budgetly-landing-page.webp",
    featured: true,
  },
  // {
  //   slug: "recess",
  //   name: "Recess",
  //   tagline: "A gentle screen-time and focus tracker",
  //   problem:
  //     "Existing screen-time apps felt punishing. Wanted something that nudges instead of nags.",
  //   role: "Designed and built the app, including the local usage-tracking layer.",
  //   stack: ["Flutter", "Hive", "Local Notifications"],
  //   outcome:
  //     "Fully local-first, no account needed. Used daily by a small group of friends for three months and counting.",
  //   image: "https://picsum.photos/seed/recess-app/800/600",
  // },
];

export type DesignScreen = {
  app: string;
  screen: string;
  seed: string;
};

export type DesignFolder = {
  name: string;
  screens: DesignScreen[];
};

export const designFolders: DesignFolder[] = [
  {
    name: "Onboarding",
    screens: [
      { app: "Ledger", screen: "Welcome", seed: "ledger-onboarding-1" },
      { app: "Slate", screen: "Walkthrough", seed: "slate-onboarding-1" },
      { app: "Recess", screen: "Get started", seed: "recess-onboarding-1" },
    ],
  },
  {
    name: "Auth",
    screens: [
      { app: "Ledger", screen: "Sign in", seed: "ledger-auth-1" },
      { app: "Slate", screen: "Create account", seed: "slate-auth-1" },
      { app: "Recess", screen: "Login", seed: "recess-auth-1" },
    ],
  },
  {
    name: "Dashboards",
    screens: [
      { app: "Ledger", screen: "Overview", seed: "ledger-dashboard-1" },
      { app: "Slate", screen: "Calendar", seed: "slate-dashboard-1" },
      { app: "Recess", screen: "Weekly stats", seed: "recess-dashboard-1" },
    ],
  },
];

export const stats = [
  { label: "Apps shipped to Play Store", value: "2" },
  { label: "Personal projects built", value: "9" },
  { label: "Months of hands-on Flutter", value: "14" },
];
