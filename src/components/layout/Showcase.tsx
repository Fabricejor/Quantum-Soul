"use client";

import { GlowingEffect } from "@/components/ui/effects/glowing-effect";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";
import { Cloud, GitBranch, Cpu, MessageSquare } from "lucide-react";

export default function Showcase() {
  const technologies = [
    {
      icon: Cloud,
      title: "Cloud AI",
      description: "Intelligence artificielle évolutive propulsée par le cloud.",
    },
    {
      icon: GitBranch,
      title: "Data pipelines",
      description: "Flux de traitement de données robustes et efficaces.",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Algorithmes avancés pour des insights prédictifs.",
    },
    {
      icon: MessageSquare,
      title: "Chatbots NLP",
      description: "Traitement du langage naturel pour des conversations fluides.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Sparkles Effect */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesshowcase"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center mb-6">
            <HoverBorderGradient
              containerClassName="rounded-2xl"
              className="p-0 bg-transparent rounded-2xl"
              as="div"
              highlightColor="#00E5FF"
            >
              <div className="w-20 h-20 relative rounded-2xl overflow-hidden shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/abstract video qs -home section 3-4.mp4" type="video/mp4" />
                </video>
              </div>
            </HoverBorderGradient>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-geonova">
            Showcase Technologique
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <ShowcaseCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-[#4F46E5] hover:bg-[#4338ca] text-white font-medium rounded-lg transition-colors duration-200 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            Découvrir notre stack technologique
          </button>
        </div>
      </div>
    </section>
  );
}

interface ShowcaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ShowcaseCard = ({ icon: Icon, title, description }: ShowcaseCardProps) => {
  return (
    <div className="relative h-64 bg-background group perspective-1000">
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-x-2 group-hover:shadow-2xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="white"
        />
        
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Icon className="w-10 h-10 text-white mb-2" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
