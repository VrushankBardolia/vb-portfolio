import Image from "next/image";
import { techStackData } from "@/lib/data";
import { Reveal } from "./reveal";

export function TechStack() {
  return (
    <section className="border-t border-border text-center">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <Reveal>
          <h2 className="font-serif tracking-tight md:text-3xl">
            {techStackData.title}
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-1 sm:gap-6">
          {techStackData.stack.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="group relative flex items-center justify-center">
                {/* Custom Tooltip */}
                <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:-bottom-9 group-hover:opacity-100 z-20">
                  <div className="relative whitespace-nowrap rounded-lg border border-border-strong bg-bg-elevated px-3 py-1 text-xs font-medium text-text-primary shadow-2xl backdrop-blur-md">
                    {item.name}
                    <span
                      aria-hidden="true"
                      className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-t border-l border-border-strong bg-bg-elevated"
                    />
                  </div>
                </div>

                {/* Icon Box */}
                <div className="relative flex h-12 w-12 md:h-20 md:w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
                  <div className={`flex items-center justify-center ${"scale" in item ? item.scale : ""}`}>
                    <Image
                      src={`/teckstack/${item.image}`}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
