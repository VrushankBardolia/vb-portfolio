import { socials, personalInfo } from "@/lib/data";
import {
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
  DribbbleLogo,
  XLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

const iconMap = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  dribbble: DribbbleLogo,
  twitter: XLogo,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary overflow-hidden">
      {/* Theme Checkered Border Banner */}
      <div
        className="w-full h-10"
        style={{
          backgroundImage: `conic-gradient(var(--bg) 90deg, var(--primary) 90deg 180deg, var(--bg) 180deg 270deg, var(--primary) 270deg)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="px-4 md:px-10 pt-4 pb-28 md:pb-24">
        {/* Social Icon Buttons */}
        <div className="flex items-center justify-center gap-3 pt-6 pb-4 sm:pt-8 sm:pb-6">
          {socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated/70 text-text-secondary backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-bg-elevated hover:text-text-primary shadow-sm"
              >
                <Icon size={20} className="transition-transform group-hover:scale-110" />
              </a>
            );
          })}
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated/70 text-text-secondary backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-bg-elevated hover:text-text-primary shadow-sm"
          >
            <EnvelopeSimple size={20} className="transition-transform group-hover:scale-110" />
          </a>
        </div>

        {/* Massive Bold Statement Typography */}
        <div className="w-full overflow-hidden text-center select-none">
          <h1 className="flex flex-col md:flex-row items-center justify-between md:justify-center md:gap-4 font-black uppercase tracking-tighter leading-none w-full text-textPrimary font-panton">
            <span className="text-[16vw] md:text-[9vw] lg:text-[9vw] whitespace-nowrap block w-full md:w-auto">
              VRUSHANK
            </span>
            <span className="text-[16vw] md:text-[9vw] lg:text-[9vw] whitespace-nowrap block w-full md:w-auto">
              BARDOLIA
            </span>
          </h1>
        </div>

        {/* Bottom Sub-line */}
        <div className="flex flex-col items-center justify-between gap-2 pt-4 text-sm text-text-tertiary sm:flex-row">
          <span>Designed & Developed by {personalInfo.name}</span>
          <span>© {year} {personalInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}