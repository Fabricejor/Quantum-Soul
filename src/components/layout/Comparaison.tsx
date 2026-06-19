"use client";

import React from "react";
import { Compare } from "@/components/ui/animation/compare";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";

export default function Comparaison() {
  const videoRef = React.useRef<HTMLDivElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);

  React.useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Comparaison de performances" className="relative min-h-[60vh] md:min-h-[80vh] py-12 md:py-24 overflow-hidden flex flex-col items-center justify-center">

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Header Section with Video Icon */}
        <div className="text-center mb-10 md:mb-16 space-y-4 md:space-y-6 flex flex-col items-center">
          <HoverBorderGradient
            containerClassName="rounded-2xl"
            className="p-0 bg-transparent rounded-2xl"
            as="div"
            highlightColor="#00E5FF"
          >
            <div
              ref={videoRef}
              className="w-16 h-16 md:w-20 md:h-20 relative rounded-2xl overflow-hidden shadow-lg"
            >
              {isVideoVisible && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/qs ai sphere writing mode.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </HoverBorderGradient>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova max-w-2xl px-2">
            Boostez vos performances avec QuantumSoul
          </h2>
        </div>

        {/* Comparison Component */}
        <div className="w-full max-w-4xl mx-auto p-2 md:p-4 border border-white/10 rounded-2xl md:rounded-3xl bg-black/20 backdrop-blur-sm">
          <Compare
            secondImage="/images/compare/Graphique_quantum_soul_vert_positive.png"
            firstImage="/images/compare/Graphique_quantum_soul_rouge_negative.png"
            firstImageClassName="object-contain object-center"
            secondImageClassname="object-contain object-center"
            className="h-[250px] md:h-[400px] w-full"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
}
