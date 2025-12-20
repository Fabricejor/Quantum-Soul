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
          <div className="relative w-full mt-24 px-8">
            {/* Base Line */}
            <div className="absolute top-[88px] left-0 w-full h-[2px] bg-white/10 rounded-full" />
            
            {/* Progress Line */}
            <motion.div
              style={{ scaleX }}
              className="absolute top-[88px] left-0 w-full h-[2px] bg-cyan-400 rounded-full origin-left shadow-[0_0_15px_#00E5FF,0_0_30px_#00E5FF]"
            />

            {/* Checkpoints */}
            <div className="relative flex justify-between w-full -mt-[88px]">
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
  const scale = useTransform(progress, [point.threshold - 0.1, point.threshold], [1, 1.1]);
  const color = useTransform(progress, (latest: number) => latest >= point.threshold ? "#00E5FF" : "#333");
  const glow = useTransform(progress, (latest: number) => latest >= point.threshold ? "0 0 30px #00E5FF, 0 0 60px #00E5FF" : "none");
  const iconColor = useTransform(progress, (latest: number) => latest >= point.threshold ? "#00E5FF" : "#525252");
  
  return (
    <motion.div
      className="flex flex-col items-center gap-6 relative group"
      style={{ opacity, scale }}
    >
      {/* Icon & Label Container - Floating above */}
      <motion.div 
        className="flex flex-col items-center gap-3 mb-4"
        style={{ color: iconColor }}
      >
        <div className="relative">
            <motion.div
                className="absolute inset-0 blur-md opacity-50"
                style={{ backgroundColor: iconColor }}
            />
            <point.icon className="w-8 h-8 relative z-10" />
      </div>
        <span className="text-sm font-bold font-geonova tracking-wider uppercase">{point.label}</span>
      </motion.div>

      {/* Connection Line to Dot */}
      <motion.div 
        className="w-[1px] h-8 bg-gradient-to-b from-transparent to-current opacity-50 mb-[-2px]"
        style={{ color: iconColor }}
      />

      {/* Timeline Dot */}
      <motion.div
        className="w-4 h-4 rounded-full bg-black border-2 z-10 relative transition-all duration-300"
        style={{ 
          borderColor: color,
          boxShadow: glow
        }}
      >
        <motion.div 
          className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-cyan-400"
          style={{ opacity: useTransform(progress, (l: number) => l >= point.threshold ? 1 : 0) }} 
        />
      </motion.div>
    </motion.div>
  );
}
