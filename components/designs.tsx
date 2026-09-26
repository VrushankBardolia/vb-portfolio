"use client";

import { useState } from "react";
import { designFolders, designsData, type DesignFolder } from "@/lib/data";
import { Reveal } from "./reveal";
import { FolderCard, FolderScreensModal } from "./widgets/FolderCard";

export function Designs() {
  const [activeFolder, setActiveFolder] = useState<DesignFolder | null>(null);

  return (
    <section id="designs" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif tracking-tight md:text-3xl">
              {designsData.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              {designsData.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Folder Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {designFolders.map((folder, i) => (
            <Reveal key={folder.name} delay={i * 0.1}>
              <FolderCard
                folder={folder}
                onClick={() => setActiveFolder(folder)}
              />
            </Reveal>
          ))}
        </div>

        {/* Interactive Folder Gallery Modal */}
        <FolderScreensModal
          folder={activeFolder}
          onClose={() => setActiveFolder(null)}
        />
      </div>
    </section>
  );
}

