"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowCounterClockwise } from "@phosphor-icons/react/dist/ssr";
import { projects, workData, type Project } from "@/lib/data";
import { Reveal } from "./reveal";
import FlipCard from "./widgets/FlipCard";

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-border/60 bg-bg-elevated-2 px-2.5 py-1 font-mono text-[11px] text-text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectFlipCard({ project }: { project: Project }) {
  const frontContent = (
    <div className="group relative h-full w-full overflow-hidden rounded-[20px] bg-bg-elevated">
      <Image
        src={project.image || `https://picsum.photos/seed/${project.slug}/800/600`}
        alt={`${project.name} Banner`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );

  const backContent = (
    <div className="flex h-full w-full flex-col justify-between p-6 text-left">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
            {project.name}
          </h3>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-text-tertiary opacity-70">
            <ArrowCounterClockwise size={12} />
            Flip
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-accent-bright">
          {project.tagline}
        </p>

        <p className="mt-3 text-xs leading-relaxed text-text-secondary line-clamp-3">
          {project.outcome || project.problem}
        </p>
      </div>

      <div className="space-y-3.5 pt-2">
        <div>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
            Tech Stack
          </p>
          <StackTags stack={project.stack} />
        </div>

        <a
          href={`https://github.com/yourusername/${project.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-primary px-4 py-2.5 text-xs font-medium text-white transition-all hover:border-white/20 hover:brightness-125"
        >
          <span>Details</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );

  return (
    <FlipCard
      front={frontContent}
      back={backContent}
      width="100%"
      height={300}
      radius={20}
      background="var(--bg-elevated, #111215)"
      color="var(--text-primary, #f2f3f5)"
      tilt
      tiltMax={10}
      hoverScale={1.02}
      perspective={1000}
      glare={false}
      shadow
      shadowColor="#000000"
      shadowOpacity={0.5}
      className="w-full"
    />
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <Reveal>
          <h2 className="font-serif tracking-tight md:text-3xl text-center">
            {workData.title}
          </h2>
          {/* <p className="mt-2 max-w-md text-sm text-text-secondary">
            {workData.subtitle}
          </p> */}
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectFlipCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
