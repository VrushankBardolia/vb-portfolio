"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Avatar } from "@/components/ui/avatar";
import { TextMorph } from "@/components/ui/role-rotator";
import { site, hero } from "@/data/content";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-avatar",
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, clearProps: "all" }
      )
        .fromTo(
          ".hero-title",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, clearProps: "all" },
          "-=0.25"
        )
        .fromTo(
          ".hero-summary",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, clearProps: "all" },
          "-=0.2"
        )
        .fromTo(
          ".hero-cta",
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="mb-0 pt-2">
      {/* Avatar with Status indicator */}
      <Avatar className="hero-avatar w-[76px] h-[76px] rounded-full p-[2px] avatar-ring shadow-sm mb-5">
        <Image
          src="/images/me.webp"
          alt="Vrushank Bardolia"
          width={76}
          height={76}
          priority
          className="w-full h-full object-cover rounded-full"
        />
      </Avatar>

      <h1 className="hero-title font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] uppercase tracking-[-0.03em]">
        Vrushank Bardolia
      </h1>

      <TextMorph />

      <p className="hero-summary text-[var(--muted)] text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-6 mt-1">
        {hero.summary}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 transition-all shadow-sm group"
        >
          <span>Resume</span>
          <ArrowUpRight className="size-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
        <a
          href={`mailto:${site.email}`}
          className="hero-cta inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--line)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--accent)] hover:bg-[var(--line)]/40 transition-all"
        >
          <Mail className="size-3.5 text-[var(--muted)]" />
          <span>Email me</span>
        </a>
      </div>
    </section>
  );
}
