"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { about } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        defaults: { ease: "power2.out" },
      });

      tl.from(".about-heading", {
        y: 16,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".about-bio",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".about-fact",
          {
            y: 12,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".about-availability",
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );

      // Subtle breathing pulse for availability dot
      gsap.to(".availability-dot", {
        scale: 1.35,
        opacity: 0.6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="mt-16 scroll-mt-20">
      <h2 className="about-heading font-display text-[0.8125rem] font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        About
      </h2>
      <p className="about-bio mb-4 leading-relaxed">{about.text}</p>
      <ul className="list-none p-0 my-4 text-[var(--muted)] space-y-1">
        {about.facts.map((fact) => (
          <li key={fact} className="about-fact">
            {fact}
          </li>
        ))}
      </ul>
      <div className="about-availability flex items-center gap-2">
        <span
          className="availability-dot w-2 h-2 rounded-full bg-[var(--silver)] shrink-0"
          aria-hidden="true"
        />
        <span>{about.availability}</span>
      </div>
    </section>
  );
}
