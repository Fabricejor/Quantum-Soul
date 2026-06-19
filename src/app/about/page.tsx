import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/sections/heros/aboutHero";
import Intro from "@/components/sections/histoire/Intro";
import HistoireTimeline from "@/components/sections/histoire/Timeline";
import NotreTeam from "@/components/sections/histoire/NotreTeam";
import { SparklesCore } from "@/components/ui/effects/sparkles";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la vision et l'équipe derrière QuantumSoul. Nous croyons en une symbiose entre l'humain et la machine pour transformer les entreprises.",
};

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
      <div id="about-content">
        <Intro />
        <NotreTeam />
        <HistoireTimeline />
      </div>
    </main>
  );
}
