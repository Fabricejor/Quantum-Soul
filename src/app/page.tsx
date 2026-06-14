import dynamic from "next/dynamic";
import Hero from "@/components/layout/Hero";
import Limitation from "@/components/layout/Limitation";
import { SparklesCore } from "@/components/ui/effects/sparkles";

// Lazy-load les sections below-the-fold pour un chargement initial plus rapide
const OurSolutions = dynamic(() => import("@/components/layout/OurSolutions"));
const OurVisions = dynamic(() => import("@/components/layout/OurVisions"));
const Showcase = dynamic(() => import("@/components/layout/Showcase"));
const StudyCase = dynamic(() => import("@/components/layout/StudyCase"));
const Comparaison = dynamic(() => import("@/components/layout/Comparaison"));
const TheyTrustUs = dynamic(() => import("@/components/layout/TheyTrustUs"));

export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <SparklesCore
          id="tsparticlesglobal"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>
      <Hero/>
      <Limitation/>
      <OurSolutions/>
      <OurVisions/>
      <Showcase/>
      <StudyCase/>
      <Comparaison/>
      <TheyTrustUs/>
    </main>
  );
}
