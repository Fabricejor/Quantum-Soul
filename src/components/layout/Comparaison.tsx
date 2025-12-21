"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { Compare } from "@/components/ui/compare";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";

export default function Comparaison() {
  return (
    <section className="relative min-h-[80vh] py-12 bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlescomparaison"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Header Section with Video Icon */}
        <div className="text-center mb-8 space-y-6 flex flex-col items-center">
          <HoverBorderGradient
            containerClassName="rounded-2xl"
            className="p-0 bg-transparent rounded-2xl"
            as="div"
            highlightColor="#00E5FF"
          >
            <div className="w-20 h-20 relative rounded-2xl overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/qs ai sphere writing mode.mp4" type="video/mp4" />
              </video>
            </div>
          </HoverBorderGradient>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova">
            Boostez vos performances avec Quantum Soul
          </h2>
        </div>

        {/* Comparison Component */}
        <div className="w-full max-w-4xl mx-auto p-4 border border-white/10 rounded-3xl bg-black/20 backdrop-blur-sm">
          <Compare
            secondImage="/images/compare/Graphique_quantum_soul_vert_positive.png"
            firstImage="/images/compare/Graphique_quantum_soul_rouge_negative.png"
            firstImageClassName="object-contain object-center"
            secondImageClassname="object-contain object-center"
            className="h-[300px] w-full md:h-[300px]"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
}
