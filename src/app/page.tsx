import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Authority } from "@/components/sections/authority";
import { ShowcaseProjects } from "@/components/sections/showcase-projects";
import { Benefits } from "@/components/sections/benefits";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-rarity-pink/30">
      <Hero />
      <Authority />
      <ShowcaseProjects />
      <Benefits />
      <FAQ />
      <FinalCTA />

      <Footer />
    </main>
  );
}
