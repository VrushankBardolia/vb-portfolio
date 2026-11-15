"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type TextMorphProps = {
  words?: string[];
  interval?: number;
  className?: string;
};

const defaultWords = ["Flutter Developer", "Frontend Developer"];

export function TextMorph({
  words = defaultWords,
  interval = 2500,
  className,
}: TextMorphProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!words.length) return;

    const timer = setInterval(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const chars = containerRef.current?.querySelectorAll(".morph-char");
      if (!chars || chars.length === 0) {
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      // Animate out
      gsap.to(chars, {
        y: -6,
        opacity: 0,
        filter: "blur(4px)",
        stagger: 0.015,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
        },
      });
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const chars = containerRef.current?.querySelectorAll(".morph-char");
    if (chars && chars.length > 0) {
      gsap.fromTo(
        chars,
        { y: 6, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  const currentWord = words[index] ?? "";
  const chars = Array.from(currentWord);

  if (!words.length) return null;

  return (
    <div
      ref={containerRef}
      className="h-8 sm:h-9 flex items-center my-1.5 overflow-hidden"
    >
      <span className="flex gap-[0.5px] items-center">
        {chars.map((char, i) => (
          <span
            key={`${index}-${i}`}
            className={cn(
              "morph-char inline-block font-sans text-lg sm:text-xl font-medium silver-gradient-text tracking-tight",
              className
            )}
            style={{
              backgroundSize: `${chars.length * 100}% 100%`,
              backgroundPosition: `${
                chars.length > 1 ? (i / (chars.length - 1)) * 100 : 0
              }% 0`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </div>
  );
}

export default TextMorph;
