import {
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  DribbbleLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { socials, contactData } from "@/lib/data";
import { Reveal } from "./reveal";

const iconMap = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  dribbble: DribbbleLogo,
  twitter: XLogo,
} as const;

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {contactData.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-secondary">
            {contactData.description}
          </p>

          <a
            href={contactData.email}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
          >
            {contactData.cta}
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-10 flex items-center justify-center gap-5">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
