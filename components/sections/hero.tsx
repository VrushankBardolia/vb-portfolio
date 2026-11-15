"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { TextMorph } from "@/components/ui/role-rotator";
import { site, hero } from "@/data/content";

export function HeroSection() {
  return (
    <section className="mb-0 pt-2">
      {/* Avatar with Status indicator */}
      <Avatar className="hero-animate-avatar w-[76px] h-[76px] rounded-full p-[2px] avatar-ring shadow-sm mb-5">
        <Image
          src="/images/me.webp"
          alt="Vrushank Bardolia"
          width={76}
          height={76}
          priority
          className="w-full h-full object-cover rounded-full"
        />
      </Avatar>

      <h1 className="hero-animate-title font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] uppercase tracking-[-0.03em]">
        Vrushank Bardolia
      </h1>

      <div className="hero-animate-role">
        <TextMorph />
      </div>

      <p className="hero-animate-summary text-[var(--muted)] text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-6 mt-1">
        {hero.summary}
      </p>

      <div className="hero-animate-cta flex flex-wrap items-center gap-3">
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 transition-all shadow-sm group"
        >
          <span>Resume</span>
          <ArrowUpRight className="size-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--line)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--accent)] hover:bg-[var(--line)]/40 transition-all"
        >
          <Mail className="size-3.5 text-[var(--muted)]" />
          <span>Email me</span>
        </a>
      </div>
    </section>
  );
}
