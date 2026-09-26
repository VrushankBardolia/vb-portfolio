import type { Metadata } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { socials } from "@/lib/data";

const panton = localFont({
  src: "../public/fonts/panton.black-caps.otf",
  variable: "--font-panton",
  display: "swap",
});

const tanker = localFont({
  src: "../public/fonts/Tanker-Regular.woff",
  variable: "--font-tanker",
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const SITE_URL = "https://vrushank.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vrushank Bardolia | Flutter Developer & Mobile UI Designer",
    template: "%s | Vrushank Bardolia",
  },
  description:
    "Portfolio of Vrushank Bardolia, a Flutter developer and UI/UX designer building high-performance mobile applications and beautiful user interfaces.",
  keywords: [
    "Vrushank Bardolia",
    "Flutter Developer",
    "Mobile Developer",
    "Dart Developer",
    "UI UX Designer",
    "Figma to Flutter",
    "Next.js Portfolio",
    "Android App Developer",
    "iOS Developer",
    "Surat Developer",
  ],
  authors: [{ name: "Vrushank Bardolia", url: SITE_URL }],
  creator: "Vrushank Bardolia",
  publisher: "Vrushank Bardolia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Vrushank Bardolia | Flutter Developer & Mobile UI Designer",
    description:
      "I design and develop mobile apps with pixel perfection. Explore my projects, UI designs, and tech stack.",
    siteName: "Vrushank Bardolia Portfolio",
    images: [
      {
        url: "/images/me.webp",
        width: 800,
        height: 800,
        alt: "Vrushank Bardolia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrushank Bardolia | Flutter Developer & Mobile UI Designer",
    description:
      "I design and develop mobile apps with pixel perfection. Explore my projects, UI designs, and tech stack.",
    images: ["/images/me.webp"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Vrushank Bardolia",
      jobTitle: "Flutter Developer & UI Designer",
      url: SITE_URL,
      image: `${SITE_URL}/images/me.webp`,
      description:
        "Flutter developer who designs apps and turns Figma designs into production-ready mobile apps.",
      sameAs: [
        socials[0].href,
        socials[1].href,
        socials[2].href,
      ],
      knowsAbout: [
        "Flutter",
        "Dart",
        "Firebase",
        "Figma",
        "Mobile App Development",
        "UI/UX Design",
        "Android Development",
        "iOS Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vrushank Bardolia Portfolio",
      description:
        "Portfolio of Vrushank Bardolia, showcasing mobile projects and UI designs.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${panton.variable} ${tanker.variable} ${instrument.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg text-text-primary">{children}</body>
    </html>
  );
}
