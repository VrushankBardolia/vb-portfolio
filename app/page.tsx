import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Work } from "@/components/work";
import { Designs } from "@/components/designs";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TechStack />
        <Work />
        <Designs />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
