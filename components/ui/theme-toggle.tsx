"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
      } else {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(isDark ? "dark" : "light");
      }
    } catch {
      // LocalStorage access may be restricted
    }
  }, []);

  const toggleTheme = () => {
    try {
      const currentTheme =
        document.documentElement.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
    } catch {
      // LocalStorage access may be restricted
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="theme-toggle h-10 w-10 p-0 text-[var(--muted)] hover:text-[var(--accent)] hover:bg-transparent -mr-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      <Moon className="icon-moon size-[18px] stroke-[1.75]" />
      <Sun className="icon-sun size-[18px] stroke-[1.75]" />
    </Button>
  );
}
