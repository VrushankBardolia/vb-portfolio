export const site = {
  name: "Vrushank Bardolia",
  role: "Flutter & Frontend Developer",
  url: "https://vrushank.pages.dev",
  email: "vrushankbardolia.dev@gmail.com",
  resume: "https://vrushankbardolia.github.io/resume/",
  description:
    "Portfolio of Vrushank Bardolia, a Flutter & Frontend developer building high-performance mobile apps and modern Next.js web experiences.",
} as const;

export const hero = {
  greeting: "Hi, I am Vrushank Bardolia",
  summary:
    "Developer and designer crafting pixel-perfect mobile apps with Flutter and modern web experiences with Next.js & React and taking ideas from Figma to production.",
} as const;

export const tools = [
  "Flutter",
  "Dart",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Figma",
  "Git & GitHub",
  "Android Studio",
  "Xcode",
] as const;

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    title: "Budgetly",
    tagline: "Budget and expense tracking Android app",
    description:
      "Successfully developed and launched Budgetly as a solo project, creating a user-friendly app that helps individuals manage their finances effectively. The app features intuitive expense tracking, income monitoring, and provides valuable insights to support better financial planning.",
    stack: ["Flutter", "GetX", "Firebase"],
    href: "https://github.com/VrushankBardolia/budgetly/releases",
  },
  {
    title: "Free Claude Skills",
    tagline: "Curated collection of free AI agent skills",
    description:
      "A web directory built with Next.js showcasing a curated collection of free, open-source Claude and AI agent skills from Git repositories, helping developers discover and integrate modular capabilities into their agents.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    href: "https://free-skills-collection.vercel.app/",
  },
  {
    title: "Budgetly Landing Page",
    tagline: "Landing page for Budgetly app",
    description:
      "Successfully developed a landing page for Budgetly app that showcases its features and benefits to potential users.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://app-budgetly.vercel.app/",
  },
];

export const about = {
  text: "I am a mobile and frontend developer based in Surat, building in public and crafting both Flutter mobile apps and Next.js web applications. I design most of my own interfaces in Figma before writing code, focusing on clean architecture, micro-interactions, and responsive design. Looking for a junior mobile or frontend/product engineering role where I can keep learning and shipping high-quality software.",
  facts: [
    "2 apps shipped to Play Store",
    "7+ projects across mobile & web",
    "Building with Flutter, Next.js & React",
  ],
  availability: "Available for new opportunities",
} as const;

export const contact = {
  heading: "Let's build something.",
  text: "I am open to junior mobile & frontend developer roles, freelance web/app projects, or just discussing Flutter & Next.js.",
  links: [
    { label: "GitHub", href: "https://github.com/VrushankBardolia" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vrushank-bardolia" },
    { label: "X", href: "https://x.com/Vrushank_VB" },
  ],
} as const;
