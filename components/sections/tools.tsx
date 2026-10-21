"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { tools } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.from(".tools-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".tools-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="mt-16 scroll-mt-20">
      <h2 className="tools-heading font-display text-[0.8125rem] font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Tools I work with
      </h2>
      <p className="tools-content leading-relaxed">{tools.join(", ")}</p>
    </section>
  );
}
