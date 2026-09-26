"use client";

import { useEffect, useState } from "react";
import {
  House,
  SquaresFour,
  PenNib,
  UserCircle,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const navItems = [
  { id: "work", label: "Work", icon: SquaresFour },
  { id: "designs", label: "Designs", icon: PenNib },
  { id: "about", label: "About", icon: UserCircle },
  { id: "contact", label: "Contact", icon: EnvelopeSimple },
] as const;

const allSectionIds = ["home", ...navItems.map((item) => item.id)];

export function BottomNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = allSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isHomeActive = active === "home";

  return (
    <div
      className="fixed left-1/2 z-50 flex -translate-x-1/2 items-center gap-2"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)" }}
    >
      {/* Separate Home Button */}
      <a
        href="#"
        aria-label="Home"
        aria-current={isHomeActive ? "true" : undefined}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center rounded-full border border-border-strong bg-bg-elevated/90 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md"
      >
        <span
          className={"flex h-11 w-11 items-center justify-center rounded-full transition-colors text-text-secondary hover:text-text-primary"}
        >
          <Image src="/images/vb-white.svg" alt="Logo" width={24} height={24} />
        </span>
      </a>

      {/* Main Navigation Pill */}
      <nav className="flex items-center gap-1 rounded-full border border-border-strong bg-bg-elevated/90 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                isActive
                  ? "bg-accent-soft text-accent-bright"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Icon size={20} weight={isActive ? "fill" : "regular"} />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
