"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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

  useEffect(() => {
    if (!words.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const chars = useMemo(() => {
    return Array.from(words[index] ?? "");
  }, [index, words]);

  if (!words.length) return null;

  return (
    <div className="h-8 sm:h-9 flex items-center my-1.5 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className="flex gap-[0.5px] items-center"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              className={cn(
                "inline-block font-sans text-lg sm:text-xl font-medium silver-gradient-text tracking-tight",
                className
              )}
              style={{
                backgroundSize: `${chars.length * 100}% 100%`,
                backgroundPosition: `${chars.length > 1 ? (i / (chars.length - 1)) * 100 : 0}% 0`,
              }}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              transition={{
                delay: i * 0.02,
                duration: 0.25,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const TextMorphMotion = () => {
  return (
    <TextMorph
      words={["blocks", "components", "templates"]}
      className="text-xl sm:text-2xl text-primary"
    />
  );
};

export default TextMorphMotion;
