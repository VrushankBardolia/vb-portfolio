import type { Metadata } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Vrushank | Mobile Developer & Designer",
  description:
    "Portfolio of Vrushank, a mobile developer and UI/UX designer building Flutter apps end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${panton.variable} ${tanker.variable} ${instrument.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text-primary">{children}</body>
    </html>
  );
}
