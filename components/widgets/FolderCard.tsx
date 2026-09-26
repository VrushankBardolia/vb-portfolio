"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, FileText, Sparkle } from "@phosphor-icons/react";
import Image from "next/image";
import type { DesignFolder, DesignScreen } from "@/lib/data";

// Crisp inline app badge icons matching macOS folder badges
function DriveIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 87.3 78" className="inline-block">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="M43.65 25 29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.55C.4 49.95 0 51.5 0 53.05h27.5z" fill="#00ac47" />
      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.15z" fill="#ea4335" />
      <path d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53.05-16.15-28-16.15 28z" fill="#2684fc" />
      <path d="M73.55 76.8H27.5L41.25 53.05h33.5c0 1.55-.4 3.1-1.2 4.5z" fill="#ffba00" />
    </svg>
  );
}

function NotionIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.087-.8c.42 0 .56.186.42.56l-1.587 11.22c-.14.98-.7 1.446-1.82 1.446l-11.414.7c-.746.046-1.12-.28-1.12-.933L3.99 4.908c-.046-.42.093-.7.469-.7zm3.08 3.127c-.42 0-.606.186-.606.606v8.448c0 .42.186.607.606.607h.7c.42 0 .607-.187.607-.607V9.757l5.368 7.234c.28.373.56.467.933.467h.747c.42 0 .607-.187.607-.607V8.308c0-.42-.187-.607-.607-.607h-.7c-.42 0-.607.187-.607.607v6.627L8.785 7.7c-.28-.373-.56-.467-.933-.467h-.313z" />
    </svg>
  );
}

export function FolderCard({
  folder,
  onClick,
}: {
  folder: DesignFolder;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center focus:outline-none"
    >
      {/* Folder Container */}
      <div className="relative aspect-[1.32/1] w-full max-w-[340px] cursor-pointer select-none transition-all duration-300 ease-out group-hover:-translate-y-1.5">
        {/* Ambient accent glow on hover matching website theme */}
        <div className="absolute inset-4 -bottom-2 rounded-full bg-accent/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        
        {/* Soft realistic drop shadow under folder */}
        <div className="absolute inset-x-6 -bottom-3 h-8 rounded-full bg-black/80 blur-xl transition-opacity duration-300 group-hover:opacity-90" />

        {/* 1. BACK FOLDER BASE */}
        <div className="absolute inset-0 overflow-hidden rounded-[26px] bg-bg-elevated border border-border shadow-2xl transition-colors duration-300 group-hover:border-border-strong">
          {/* Subtle gradient matching website surface tokens */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg-elevated-2 via-[#161820] to-bg-elevated" />
        </div>

        {/* 2. PEEKING DOCUMENT PAPERS (Themed Dark Cards with Accent Blue Highlights) */}
        <div className="absolute inset-x-0 top-0 h-full pointer-events-none">
          {/* Left Sheet */}
          <motion.div
            className="absolute left-6 top-3 w-[45%] aspect-[1/1.2] rounded-[14px] bg-[#1a1d26] p-2.5 shadow-xl border border-white/10 origin-bottom-left"
            initial={false}
            animate={
              isHovered
                ? { y: -22, rotate: -8, scale: 1.02 }
                : { y: -6, rotate: -4, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <div className="flex h-full w-full flex-col justify-between rounded-[8px] bg-bg-elevated-2/80 p-2 border border-white/5">
            </div>
          </motion.div>

          {/* Right Sheet */}
          <motion.div
            className="absolute right-7 top-4 w-[48%] aspect-[1/1.2] rounded-[14px] bg-[#1d212c] p-2.5 shadow-2xl border border-white/10 origin-bottom-right"
            initial={false}
            animate={
              isHovered
                ? { y: -26, rotate: 6, scale: 1.03 }
                : { y: -8, rotate: 3, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <div className="flex h-full w-full flex-col justify-between rounded-[8px] bg-bg-elevated-2/80 p-2 border border-white/5"></div>
          </motion.div>
        </div>

        {/* 3. FRONT FOLDER FLAP (Vector SVG themed with website palette) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 320 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-[0_-5px_14px_rgba(0,0,0,0.65)]"
          >
            <defs>
              <linearGradient id={`folderGrad-${folder.name}`} x1="160" y1="25" x2="160" y2="235" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#242834" />
                <stop offset="35%" stopColor="#1a1d26" />
                <stop offset="100%" stopColor="#111216" />
              </linearGradient>
              <linearGradient id={`folderBorder-${folder.name}`} x1="160" y1="25" x2="160" y2="235" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.18)" />
                <stop offset="50%" stopColor="rgba(81, 127, 192, 0.25)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
              </linearGradient>
            </defs>

            {/* Folder Front Flap Path: Tab on left curving down smoothly to the right */}
            <path
              d="
                M 0 54
                C 0 38 12 26 28 26
                L 112 26
                C 134 26 142 54 168 54
                L 292 54
                C 308 54 320 66 320 82
                L 320 207
                C 320 223 308 235 292 235
                L 28 235
                C 12 235 0 223 0 207
                Z
              "
              fill={`url(#folderGrad-${folder.name})`}
              stroke={`url(#folderBorder-${folder.name})`}
              strokeWidth="1.2"
            />
          </svg>

          {/* 4. BOTTOM-LEFT FOLDER INFO (Themed Typography & Badge) */}
          <div className="absolute bottom-5 left-6 flex flex-col pointer-events-auto">
            <div className="flex items-center gap-1.5">
              {/* <span className="h-1.5 w-1.5 rounded-full bg-accent-bright opacity-80" /> */}
              <h3 className="font-serif text-sm lg:text-lg font-medium tracking-tight text-text-primary transition-colors duration-200 ">
                {folder.name}
              </h3>
            </div>
            <p className="mt-0.5 font-mono text-[11px] text-text-tertiary">
              {folder.screens.length} {folder.screens.length === 1 ? "screen" : "screens"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Gallery Modal for Folder Screens
export function FolderScreensModal({
  folder,
  onClose,
}: {
  folder: DesignFolder | null;
  onClose: () => void;
}) {
  const [selectedScreen, setSelectedScreen] = useState<DesignScreen | null>(null);

  if (!folder) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#12141a] text-text-primary shadow-2xl"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bg-elevated-2 border border-border">
                <Sparkle size={20} className="text-accent-bright" weight="duotone" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  {folder.name}
                </h2>
                <p className="font-mono text-xs text-text-tertiary">
                  {folder.screens.length} Design Screens
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-text-secondary transition-colors hover:bg-white/10 hover:text-text-primary"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body - Screens Grid */}
          <div className="scrollbar-none overflow-y-auto p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {folder.screens.map((screen) => (
                <div
                  key={`${screen.app}-${screen.screen}`}
                  onClick={() => setSelectedScreen(screen)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-bg-elevated transition-all hover:border-accent-bright/50 hover:shadow-lg cursor-pointer"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-bg-elevated-2">
                    <Image
                      src={`https://picsum.photos/seed/${screen.seed}/600/1066`}
                      alt={`${screen.app} - ${screen.screen}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="rounded-md border border-border/80 bg-bg/80 px-2 py-0.5 font-mono text-[10px] text-accent-bright backdrop-blur-sm">
                          {screen.app}
                        </span>
                        <h4 className="mt-1 font-display text-sm font-semibold text-text-primary">
                          {screen.screen}
                        </h4>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox for Single Screen */}
        {selectedScreen && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedScreen(null)}
          >
            <div className="relative max-h-[90vh] w-auto max-w-[420px] overflow-hidden rounded-3xl border border-white/20 bg-bg-elevated shadow-2xl">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedScreen(null);
                }}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black"
              >
                <X size={16} />
              </button>
              <div className="relative aspect-[9/16] w-[340px] sm:w-[380px]">
                <Image
                  src={`https://picsum.photos/seed/${selectedScreen.seed}/800/1422`}
                  alt={`${selectedScreen.app} - ${selectedScreen.screen}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="font-mono text-xs text-accent-bright">
                  {selectedScreen.app}
                </span>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {selectedScreen.screen}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
