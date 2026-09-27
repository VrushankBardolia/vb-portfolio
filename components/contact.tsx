"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  DribbbleLogo,
  XLogo,
  Copy,
  Check,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { socials, contactData, personalInfo } from "@/lib/data";
import { Reveal } from "./reveal";

const iconMap = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  dribbble: DribbbleLogo,
  twitter: XLogo,
} as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20 text-center">
        <Reveal>
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span>Available for new opportunities</span>
          </div>

          {/* Section Title */}
          <h2 className="font-serif tracking-tight text-3xl md:text-4xl text-text-primary">
            {contactData.title}
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-text-secondary">
            {contactData.description}
          </p>

          {/* Action CTAs: Direct Email & Copy Button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contactData.email}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <EnvelopeSimple size={18} />
              <span>{contactData.cta}</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-3 text-sm font-mono text-text-secondary transition-all hover:border-border-strong hover:bg-bg-elevated-2 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 text-xs">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className="text-xs">{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
