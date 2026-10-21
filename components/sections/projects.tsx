"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.from(".projects-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".project-item", {
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 85%",
        },
        y: 28,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="work" className="mt-16 scroll-mt-20">
      <h2 className="projects-heading font-display text-[0.8125rem] font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Projects
      </h2>
      <ul className="projects-list list-none p-0 m-0">
        {projects.map((project) => (
          <li
            key={project.title}
            className="project-item py-6 border-t border-[var(--line)] last:border-b"
          >
            <h3 className="font-sans text-[1.0625rem] font-semibold mb-1 text-[var(--fg)]">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-silver inline-flex items-center gap-1 group"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-[var(--muted)] mb-2">{project.tagline}</p>
            <p className="mb-2 leading-relaxed">{project.description}</p>
            <p className="text-[0.9rem] text-[var(--muted)] m-0">
              {project.stack.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
