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
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Vrushank Bardolia | Flutter & Frontend Developer",
  description: site.description,
  alternates: {
    canonical: site.url,
  },
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
        alt: "Vrushank Bardolia | Flutter & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrushank Bardolia | Flutter & Frontend Developer",
    description: site.description,
    images: ["/images/og.png"],
    creator: "@Vrushank_VB",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
