import React from 'react'
import { LavaLamp } from '@/components/ui/background/fluid-blob'

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <LavaLamp>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-geonova tracking-tighter text-center px-4">
          Quantum Soul
        </h1>
      </LavaLamp>
    </div>
  )
}
