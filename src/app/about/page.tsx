import React from "react";
import AboutHero from "@/components/sections/heros/aboutHero";
import Intro from "@/components/sections/histoire/Intro";
import HistoireTimeline from "@/components/sections/histoire/Timeline";
import NotreTeam from "@/components/sections/histoire/NotreTeam";
import { SparklesCore } from "@/components/ui/effects/sparkles";

export default function page() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <SparklesCore
          id="tsparticlesabout"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>
      <AboutHero />
      <Intro />
      <NotreTeam />
      <HistoireTimeline />
    </main>
  );
}
