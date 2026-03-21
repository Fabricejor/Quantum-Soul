import React from 'react';
import HeroService from '@/components/sections/services/HeroService';
import GallerieService from '@/components/sections/services/GallerieService';
import { SparklesCore } from "@/components/ui/effects/sparkles";
import CircuitServices from '@/components/sections/services/CircuitServices';
import PriceServices from '@/components/sections/services/PriceServices';
import FaQService from '@/components/sections/services/FaQService';

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative ">
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <SparklesCore
          id="tsparticlesservices"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>
      <HeroService />
      <GallerieService />
      <CircuitServices />
      <PriceServices />
      <FaQService />
    </main>
  );
}