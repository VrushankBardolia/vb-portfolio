"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { tools } from "@/data/content";
import { ToolIcon } from "@/components/ui/tool-icons";

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
        clearProps: "all",
      });

      gsap.fromTo(
        ".tool-item",
        { y: 12, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".tools-content",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.4,
          delay: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="mt-16 scroll-mt-20">
      <h2 className="tools-heading font-display text-[0.8125rem] font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Tools I work with
      </h2>
      <ul
        className="tools-content flex flex-wrap items-center gap-2 list-none p-0 m-0"
        aria-label="Tools I work with"
      >
        {tools.map((tool) => (
          <li key={tool} className="tool-item">
            <div
              tabIndex={0}
              aria-label={tool}
              className="group relative flex size-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--line)]/40 hover:text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] focus-visible:border-[var(--accent)] focus-visible:text-[var(--fg)]"
            >
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[var(--fg)] px-2.5 py-1 text-xs font-medium text-[var(--bg)] opacity-0 shadow-sm transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                {tool}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[3px] left-1/2 size-1.5 -translate-x-1/2 rotate-45 bg-[var(--fg)]"
                />
              </span>
              <ToolIcon
                name={tool}
                className="size-5 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="sr-only">{tool}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
