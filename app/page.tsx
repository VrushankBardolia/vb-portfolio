import {
  Header,
  HeroSection,
  ToolsSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="max-w-2xl min-h-screen mx-auto px-5 text-left border-l border-r border-[var(--line)]">
      <Header />
      <main>
        <HeroSection />
        <ToolsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
