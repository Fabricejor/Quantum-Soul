"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { User, Brain, Lightbulb, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const checkpoints = [
  {
    icon: User,
    label: "Humain",
    threshold: 0,
  },
  {
    icon: Brain,
    label: "IA",
    threshold: 0.33,
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    threshold: 0.66,
  },
  {
    icon: Zap,
    label: "Synergie",
    threshold: 1,
  },
];

export default function OurVisions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesvisions"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#00E5FF"
            speed={0.5}
          />
        </div>
        <div className="relative w-full max-w-5xl px-4 flex flex-col items-center gap-16 z-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center gap-8 text-center z-10">
             <HoverBorderGradient
              containerClassName="rounded-xl"
              className="p-0 bg-transparent rounded-xl"
              as="div"
              highlightColor="#00E5FF"
            >
              <div className="w-24 h-24 relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/abstract video QS -home - section 3.mp4" type="video/mp4" />
                </video>
              </div>
            </HoverBorderGradient>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-geonova max-w-4xl leading-tight">
              Nous croyons en une symbiose entre l’humain et la machine.
            </h2>
          </div>

          {/* Timeline Section */}
          <div className="relative w-full mt-12 px-8">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
            
            {/* Progress Line */}
            <motion.div
              style={{ scaleX }}
              className="absolute top-1/2 left-0 w-full h-1 bg-cyan-400 -translate-y-1/2 rounded-full origin-left shadow-[0_0_20px_#00E5FF]"
            />

            {/* Checkpoints */}
            <div className="relative flex justify-between w-full">
              {checkpoints.map((point, index) => (
                <Checkpoint
                  key={index}
                  point={point}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Checkpoint({
  point,
  progress,
}: {
  point: (typeof checkpoints)[0];
  progress: any;
}) {
  const isActive = useTransform(progress, (latest: number) => latest >= point.threshold);
  
  // Create transforms for styles
  const opacity = useTransform(progress, [point.threshold - 0.1, point.threshold], [0.5, 1]);
  const scale = useTransform(progress, [point.threshold - 0.1, point.threshold], [1, 1.2]);
  const color = useTransform(progress, (latest: number) => latest >= point.threshold ? "#00E5FF" : "#525252");
  const glow = useTransform(progress, (latest: number) => latest >= point.threshold ? "0 0 20px #00E5FF" : "none");

  return (
    <motion.div
      className="flex flex-col items-center gap-4 relative"
      style={{ opacity, scale }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-black border-2 z-10 relative transition-colors duration-300"
        style={{ 
          borderColor: color,
          boxShadow: glow
        }}
      >
        {/* Inner dot for active state */}
        <motion.div 
          className="absolute inset-0 m-auto w-full h-full rounded-full bg-cyan-400 opacity-0"
          style={{ opacity: useTransform(progress, (l: number) => l >= point.threshold ? 1 : 0) }} 
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center gap-2"
        style={{ color: useTransform(progress, (l: number) => l >= point.threshold ? "#fff" : "#525252") }}
      >
        <point.icon className="w-6 h-6" />
        <span className="text-sm font-medium font-geonova tracking-wide">{point.label}</span>
      </motion.div>
    </motion.div>
  );
}
