import React from 'react'
import { Marquee } from '@/components/ui/carousel/marquee'
import Image from 'next/image'

const logos = [
  {
    src: "/images/logo & icons/QS ID Noir Background Transparent.png",
    alt: "QS ID Logo",
    className: "filter invert" 
  },
  {
    src: "/images/logo & icons/Logo Q Blanc Icone.png",
    alt: "Q Logo",
    className: ""
  },
  {
    src: "/images/logo & icons/QS ID Noir Background Transparent.png",
    alt: "QS ID Logo",
    className: "filter invert"
  },
  {
    src: "/images/logo & icons/Logo Q Blanc Icone.png",
    alt: "Q Logo",
    className: ""
  },
  {
    src: "/images/logo & icons/QS ID Noir Background Transparent.png",
    alt: "QS ID Logo",
    className: "filter invert"
  },
  {
    src: "/images/logo & icons/Logo Q Blanc Icone.png",
    alt: "Q Logo",
    className: ""
  }
]

export default function Limitation() {
  return (
    <section className="py-0 bg-background  overflow-hidden backdrop-blur-sm">
      <Marquee speed={30} className="!mt-0 py-0" pauseOnHover>
        {logos.map((logo, index) => (
          <div key={index} className="mx-12 flex items-center justify-center">
            <div className="relative h-8 w-20 transition-all duration-500 hover:scale-110 opacity-60 hover:opacity-100 grayscale hover:grayscale-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className={`object-contain ${logo.className}`}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
