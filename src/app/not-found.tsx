"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Glitchy404 } from "@/components/ui/404/glitchy-404-1";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { GlassButton } from "@/components/ui/button/apple-tahoe-liquid-glass-button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white px-4">
      {/* Background Sparkles with brand cyan color */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <SparklesCore
          id="tsparticles404"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center gap-6 md:gap-8">
        {/* Glitchy 404 Text in White */}
        <div className="scale-75 md:scale-100 flex justify-center w-full max-w-full overflow-hidden">
          <Glitchy404 width={500} height={150} color="#fff" />
        </div>

        {/* Message inline on a single line */}
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg md:text-xl lg:text-2xl text-gray-400 font-light tracking-wide px-4">
          <span>Il semble que tu t'es perdu...</span>
          <span className="inline-flex items-center justify-center h-[1.5em] my-1 mx-1">
            <Image
              src="/images/logo & icons/QS ID Noir Background Transparent.png"
              alt="Quantum Soul"
              width={140}
              height={35}
              priority
              className="object-contain inline-block"
            />
          </span>
          <span>t'aide à retrouver ton chemin.</span>
        </p>

        {/* Home Link Button */}
        <div className="mt-4">
          <Link href="/" passHref legacyBehavior>
            <GlassButton 
              glassColor="rgba(255, 255, 255, 0.08)"
              className="text-white hover:text-[#00E5FF] transition-all duration-300 font-medium px-8"
            >
              Retour à l'accueil
            </GlassButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
