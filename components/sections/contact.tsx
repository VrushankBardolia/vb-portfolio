"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { contact, site } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactSection() {
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

      tl.from(".contact-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".contact-heading",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".contact-text",
          {
            y: 14,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".contact-email",
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".contact-link",
          {
            y: 10,
            opacity: 0,
            stagger: 0.08,
            duration: 0.4,
          },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="contact" className="mt-16 scroll-mt-20">
      <h2 className="contact-eyebrow font-display text-[0.8125rem] font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Contact
      </h2>
      <p className="contact-heading font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--fg)] mb-4">
        {contact.heading}
      </p>
      <p className="contact-text mb-4 leading-relaxed">{contact.text}</p>
      <p className="contact-email mb-6">
        <a href={`mailto:${site.email}`} className="link-silver">
          {site.email}
        </a>
      </p>
      <div className="flex flex-wrap gap-5">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link link-silver inline-block transition-transform duration-200 hover:-translate-y-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
