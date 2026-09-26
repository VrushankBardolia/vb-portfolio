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
  meImage: "/images/me.png",
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
    { name: "Flutter", image: "flutter.png", scale: "scale-90" },
    { name: "Dart", image: "dart.png", scale: "scale-105" },
    { name: "Firebase", image: "firebase.png", scale: "scale-90" },
    { name: "Figma", image: "figma.png", scale: "scale-85" },
    { name: "Antigravity", image: "antigravity.png", scale: "scale-110" },
    { name: "Git & Github", image: "git.png", scale: "scale-110" },
    { name: "Android Studio", image: "android_studio.webp", scale: "scale-110" },
    { name: "XCode", image: "xcode.png", scale: "scale-135" },
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
    slug: "ledger",
    name: "Ledger",
    tagline: "Expense and payment tracking for small shop owners",
    problem:
      "Local shop owners were tracking daily sales and dues in notebooks, with no easy way to see who owed what.",
    role: "Designed the UI in Figma and built the full app solo end to end.",
    stack: ["Flutter", "GetX", "Firebase", "Firestore"],
    outcome:
      "Built as a self-directed project to learn real-time data sync. Handles offline entries and syncs once the shop is back online.",
    image: "https://picsum.photos/seed/ledger-app/800/600",
    featured: true,
  },
  {
    slug: "slate",
    name: "Slate",
    tagline: "Booking and scheduling for solo service providers",
    problem:
      "Freelance tutors and stylists were juggling WhatsApp messages to manage appointments, leading to double bookings.",
    role: "Built the booking flow, calendar logic, and reminder system.",
    stack: ["Flutter", "Cloud Functions", "Firebase Auth"],
    outcome:
      "Cut manual back-and-forth by giving clients a shareable booking link with live slot availability.",
    image: "https://picsum.photos/seed/slate-booking/800/600",
  },
  {
    slug: "recess",
    name: "Recess",
    tagline: "A gentle screen-time and focus tracker",
    problem:
      "Existing screen-time apps felt punishing. Wanted something that nudges instead of nags.",
    role: "Designed and built the app, including the local usage-tracking layer.",
    stack: ["Flutter", "Hive", "Local Notifications"],
    outcome:
      "Fully local-first, no account needed. Used daily by a small group of friends for three months and counting.",
    image: "https://picsum.photos/seed/recess-app/800/600",
  },
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
