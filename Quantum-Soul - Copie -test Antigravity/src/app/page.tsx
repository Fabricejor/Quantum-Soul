import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Vision } from "@/components/sections/Vision";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solutions />
      <Vision />
      <TechShowcase />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
