import React from 'react'
import { BeamsBackground } from '@/components/ui/background/beams-background'
import { PearlElectronScene } from '@/components/ui/3d-models/pearl-electron'

export default function Hero() {
  return (
    <div className="relative w-full min-h-[150vh] h-screen overflow-hidden bg-background">
      {/* <BeamsBackground> */}
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text Content - Left (or Top on mobile) */}
          <div className="flex-1 flex justify-center md:justify-end items-center z-20">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white font-geonova tracking-tighter text-center md:text-right leading-none">
              Quantum <br /> Soul
            </h1>
          </div>

          {/* 3D Model - Right (or Bottom on mobile) */}
          <div className="flex-1 w-full h-[400px] md:h-[600px] flex items-center justify-center md:justify-start z-20">
            <PearlElectronScene />
          </div>
        </div>
      {/* </BeamsBackground> */}
    </div>
  )
}
