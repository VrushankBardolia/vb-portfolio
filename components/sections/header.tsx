"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.from(headerRef.current, {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex justify-between items-center -mx-5 mb-8 py-3 px-5 bg-[var(--bg)]/80 backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center" aria-label="Vrushank Bardolia Home">
        <Image
          src="/images/vb-white.svg"
          alt="Vrushank Bardolia"
          width={37}
          height={24}
          priority
          className="h-6 w-auto logo-vb"
        />
      </Link>
      <div className="flex items-center gap-5 max-[26rem]:gap-4">
        <nav className="flex items-center gap-5 max-[26rem]:gap-4" aria-label="Main navigation">
          <Link href="#work" className="nav-link-silver text-[var(--muted)]">
            Work
          </Link>
          <Link href="#about" className="nav-link-silver text-[var(--muted)]">
            About
          </Link>
          <Link href="#contact" className="nav-link-silver text-[var(--muted)]">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
