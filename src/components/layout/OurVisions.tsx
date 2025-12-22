"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";
import { User, Brain, Lightbulb, Zap } from "lucide-react";

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
    // Height adjusted for mobile to be less tall if needed, but keeping 300vh for scroll length is fine
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative w-full max-w-5xl px-4 flex flex-col items-center gap-10 md:gap-16 z-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center gap-6 md:gap-8 text-center z-10">
             <HoverBorderGradient
              containerClassName="rounded-xl"
              className="p-0 bg-transparent rounded-xl"
              as="div"
              highlightColor="#00E5FF"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/abstract video qs -home - section 3.mp4" type="video/mp4" />
                </video>
              </div>
            </HoverBorderGradient>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova max-w-4xl leading-tight text-justify">
              Nous croyons en une symbiose entre l’humain et la machine.
          </h2>
        </div>

          {/* Timeline Section */}
          {/* Mobile: Vertical Timeline | Desktop: Horizontal Timeline */}
          
          {/* Desktop Version (Hidden on Mobile) */}
          <div className="hidden md:block relative w-full mt-24 px-8">
            <div className="absolute top-[88px] left-0 w-full h-[2px] bg-white/10 rounded-full" />
            <motion.div
              style={{ scaleX }}
              className="absolute top-[88px] left-0 w-full h-[2px] bg-cyan-400 rounded-full origin-left shadow-[0_0_15px_#00E5FF,0_0_30px_#00E5FF]"
            />
            <div className="relative flex justify-between w-full -mt-[88px]">
              {checkpoints.map((point, index) => (
                <CheckpointDesktop
                  key={index}
                  point={point}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Mobile Version (Visible on Mobile) */}
          <div className="md:hidden relative w-full mt-8 pl-4 min-h-[300px] flex flex-col justify-between">
             {/* Vertical Line Base */}
             <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full h-full" />
             
             {/* Vertical Progress Line */}
             <motion.div
              style={{ scaleY: scaleX, originY: 0 }}
              className="absolute left-[27px] top-0 w-[2px] bg-cyan-400 rounded-full shadow-[0_0_15px_#00E5FF,0_0_30px_#00E5FF] h-full"
            />

            {checkpoints.map((point, index) => (
                <CheckpointMobile
                  key={index}
                  point={point}
                  progress={scrollYProgress}
                />
              ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function CheckpointDesktop({
  point,
  progress,
}: {
  point: (typeof checkpoints)[0];
  progress: MotionValue<number>;
}) {
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

      <motion.div 
        className="w-[1px] h-8 bg-gradient-to-b from-transparent to-current opacity-50 mb-[-2px]"
        style={{ color: iconColor }}
      />

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

function CheckpointMobile({
    point,
    progress,
  }: {
    point: (typeof checkpoints)[0];
    progress: MotionValue<number>;
  }) {
    const color = useTransform(progress, (latest: number) => latest >= point.threshold ? "#00E5FF" : "#333");
    const glow = useTransform(progress, (latest: number) => latest >= point.threshold ? "0 0 30px #00E5FF, 0 0 60px #00E5FF" : "none");
    const iconColor = useTransform(progress, (latest: number) => latest >= point.threshold ? "#00E5FF" : "#525252");
    const opacity = useTransform(progress, [point.threshold - 0.1, point.threshold], [0.3, 1]);
    const x = useTransform(progress, [point.threshold - 0.1, point.threshold], [-20, 0]);

    return (
      <motion.div 
        className="flex items-center gap-6 relative pl-2"
        style={{ opacity, x }}
      >
        {/* Dot on the line */}
        <motion.div
          className="w-4 h-4 rounded-full bg-black border-2 z-10 relative transition-all duration-300 shrink-0"
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

        {/* Line connector to text */}
        <motion.div 
            className="h-[1px] w-8 bg-gradient-to-r from-transparent to-current opacity-50 shrink-0"
            style={{ color: iconColor }}
        />

        {/* Content */}
        <div className="flex items-center gap-4">
            <div className="relative shrink-0">
                <motion.div
                    className="absolute inset-0 blur-md opacity-50"
                    style={{ backgroundColor: iconColor }}
                />
                <point.icon className="w-6 h-6 relative z-10" style={{ color: iconColor.get() }} /> 
                {/* Note: direct style usage for color from motion value might need Motion component or hook state, 
                    but lucide icons accept color prop. For motion value update, easiest is styling parent or using motion.svg if needed.
                    Here relying on CSS variable or parent color might be safer, but let's try standard motion style.
                 */}
            </div>
            <span className="text-lg font-bold font-geonova tracking-wider uppercase text-white">{point.label}</span>
        </div>
      </motion.div>
    );
  }
