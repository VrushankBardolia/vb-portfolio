import Image from "next/image";
import { FolderSimple } from "@phosphor-icons/react/dist/ssr";
import { designFolders, designsData } from "@/lib/data";
import { Reveal } from "./reveal";

export function Designs() {
  return (
    <section id="designs" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {designsData.title}
          </h2>
          <p className="mt-2 max-w-md text-sm text-text-secondary">
            {designsData.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10">
          {designFolders.map((folder, i) => (
            <Reveal key={folder.name} delay={i * 0.08}>
              <div className="mb-4 flex items-center gap-2">
                <FolderSimple size={16} className="text-accent-bright" />
                <h3 className="text-sm font-medium text-text-primary">
                  {folder.name}
                </h3>
                <span className="font-mono text-xs text-text-tertiary">
                  {folder.screens.length} screens
                </span>
              </div>

              <div className="scrollbar-none flex gap-4 overflow-x-auto pb-2">
                {folder.screens.map((s) => (
                  <div
                    key={`${folder.name}-${s.app}-${s.screen}`}
                    className="group relative aspect-[9/16] w-40 flex-none snap-start overflow-hidden rounded-2xl border border-border bg-bg-elevated sm:w-44"
                  >
                    <Image
                      src={`https://picsum.photos/seed/${s.seed}/480/854`}
                      alt={`${s.app} ${s.screen} screen`}
                      fill
                      sizes="176px"
                      className="object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="font-mono text-[11px] text-accent-bright">
                        {s.app}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-text-primary">
                        {s.screen}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
