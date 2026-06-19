"use client";

import React from "react";
import RealisationHero from "@/components/sections/heros/RealisationHero";
import Filter from "@/components/sections/filtre/filter";
import Projects from "@/components/sections/projects/Projects";
import { FilterProvider } from "@/contexts/FilterContext";
import { Marquee } from "@/components/ui/carousel/marquee";
import Image from "next/image";
import Articles from "@/components/sections/article/articles";
import { SparklesCore } from "@/components/ui/effects/sparkles";

const logos = [
  {
    src: "/images/logo & icons/QS ID Noir Background Transparent.png",
    alt: "QS ID Logo",
  },
  {
    src: "/images/logo & icons/Logo Q Blanc Icone.png",
    alt: "Q Logo",
  },
  {
    src: "/images/logo & icons/QS ID Noir Background Transparent.png",
    alt: "QS ID Logo",
  },
  {
    src: "/images/logo & icons/Logo Q Blanc Icone.png",
    alt: "Q Logo",
  },
];

export default function RealisationContent() {
  return (
    <FilterProvider>
      <div>
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <SparklesCore
            id="tsparticlesrealisation"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#00E5FF"
            speed={0.5}
          />
        </div>
        <RealisationHero />
        <div id="realisations-content">
          <Marquee speed={30} className="!mt-0 py-8" pauseOnHover>
            {logos.map((logo, index) => (
              <div key={index} className="mx-12 flex items-center justify-center">
                <div className="relative h-16 w-32 md:h-20 md:w-40 transition-all duration-500 hover:scale-110 opacity-80 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Filter />
          <Projects />
          <Articles />
        </div>
      </div>
    </FilterProvider>
  );
}
