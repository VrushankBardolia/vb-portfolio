"use client";

import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { stats, aboutData, personalInfo } from "@/lib/data";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <Reveal>
          <h2 className="font-serif tracking-tight md:text-3xl text-center">
            {aboutData.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8"> 
            {/* Main Content */}
            <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
              {aboutData.bio}
            </p>

            {/* Clean Stats Row */}
            <div className="grid grid-cols-1 gap-6 pt-6 border-t border-border/70 sm:grid-cols-3 sm:gap-8 mt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-text-primary tabular-nums">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs sm:text-sm text-text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}