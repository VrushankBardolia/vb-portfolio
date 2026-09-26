import { stats, aboutData } from "@/lib/data";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {aboutData.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            {aboutData.bio}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
