"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("about-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20 font-geonova tracking-tight">
        QuantumSoul
      </h1>

      <p className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-[0.3em] relative z-20 font-light">
        notre histoire
      </p>

      <div className="w-[40rem] h-40 relative mt-4">
        {/* Gradients pour la ligne bleue */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Effet Sparkles en demi-cercle */}
        <SparklesCore
          id="tsparticlesabouthero"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Masque pour créer la forme de demi-cercle/bol */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <button 
        onClick={handleScroll}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors mt-8 animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest font-light">Lire (7min)</span>
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  );
}
