"use client";

import { GlowingEffect } from "@/components/ui/effects/glowing-effect";
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
    <section className="py-12 md:py-24 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-20 space-y-4">
          <div className="flex justify-center mb-6">
            <HoverBorderGradient
              containerClassName="rounded-2xl"
              className="p-0 bg-transparent rounded-2xl"
              as="div"
              highlightColor="#00E5FF"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-2xl overflow-hidden shadow-lg">
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova">
            Showcase Technologique
          </h2>
        </div>
{/* effet a rajouter  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
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
          <button className="relative group px-8 py-3.5 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs md:text-base"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 100%)',
              backdropFilter: 'blur(10px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 8px 32px 0 rgba(31, 38, 135, 0.37),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
              `
            }}
          >
            <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
              Découvrir notre stack technologique
              <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

interface ShowcaseCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ShowcaseCard = ({ icon, title, description }: ShowcaseCardProps) => {
  const Icon = icon;
  
  return (
    <div className="relative h-56 md:h-64 bg-transparent group perspective-1000">
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 md:gap-4 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-x-2 group-hover:shadow-2xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="white"
        />
        
        <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-1 md:mb-2" />
          <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
