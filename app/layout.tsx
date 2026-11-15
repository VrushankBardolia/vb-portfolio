import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1b1d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Vrushank Bardolia | Flutter & Frontend Developer",
    template: "%s | Vrushank Bardolia",
  },
  description: site.description,
  alternates: {
    canonical: site.url,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
  keywords: [
    "Vrushank Bardolia",
    "Flutter Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Mobile Developer",
    "Dart Developer",
    "UI UX Designer",
    "Tailwind CSS",
    "Android App Developer",
    "Surat Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "Vrushank Bardolia | Flutter & Frontend Developer",
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Vrushank Bardolia | Flutter & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Vrushank_VB",
    creator: "@Vrushank_VB",
    title: "Vrushank Bardolia | Flutter & Frontend Developer",
    description: site.description,
    images: ["/images/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profilepage`,
      url: site.url,
      name: `${site.name} | Flutter & Frontend Developer`,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}/images/me.webp`,
      jobTitle: site.role,
      description: site.description,
      sameAs: [
        "https://github.com/VrushankBardolia",
        "https://linkedin.com/in/vrushank-bardolia",
        "https://x.com/Vrushank_VB",
      ],
      knowsAbout: [
        "Flutter",
        "Dart",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Figma",
        "Android Studio",
        "Xcode",
        "Mobile App Development",
        "Frontend Development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
