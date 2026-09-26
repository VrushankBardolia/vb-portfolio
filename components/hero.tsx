import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { heroData } from "@/lib/data";
import { GridBackground } from "./grid-background";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="hero relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center pb-10"
    >
      <GridBackground />
      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <div className="relative mb-2 inline-flex max-w-[90vw] items-center gap-2 rounded-full border border-border-strong bg-bg-elevated px-3.5 py-1.5 text-xs font-medium text-text-primary shadow-lg backdrop-blur-sm sm:px-4 sm:text-sm md:text-base">
          <span className="text-sm sm:text-base">👋</span>
          <span className="truncate">{heroData.callout}</span>
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border-strong bg-bg-elevated"
          />
        </div>

        <div className="relative mb-4 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44">
          <Image
            src={heroData.meImage}
            alt={heroData.name}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
            className="rounded-full object-cover shadow-2xl"
            priority
          />
        </div>

        <h1 className="max-w-4xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          I <span className="underline decoration-accent-bright/70 decoration-[2px] underline-offset-8">design and develop</span> mobile apps with <span className="text-accent-bright">pixel perfection</span>.
        </h1>

        <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg md:mt-5 trailing-none">
          {heroData.description}
        </p>

        <div className="mt-4 mb-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://vrushankbardolia.github.io/resume/"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-all hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {heroData.ctaPrimary}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-border-strong hover:bg-bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {heroData.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}