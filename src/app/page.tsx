import Hero from "@/components/layout/Hero";
import OurSolutions from "@/components/layout/OurSolutions";
import Limitation from "@/components/layout/Limitation";
import OurVisions from "@/components/layout/OurVisions";
import Showcase from "@/components/layout/Showcase";
import StudyCase from "@/components/layout/StudyCase";
import Comparaison from "@/components/layout/Comparaison";
import TheyTrustUs from "@/components/layout/TheyTrustUs";
import { SparklesCore } from "@/components/ui/effects/sparkles";

export default function Home() {
  return (
    <>
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
    </>
  );
}
