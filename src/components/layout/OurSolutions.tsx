"use client";

import { GlowingEffect } from "@/components/ui/effects/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/effects/hover-border-gradient";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { Bot, ChartBar, Workflow, Network } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OurSolutions() {
  const solutions = [
    {
      icon: Workflow,
      title: "Automatisation des tâches",
      description: "Optimisez vos processus et gagnez en efficacité en automatisant les tâches répétitives et complexes.",
    },
    {
      icon: Network,
      title: "Intégration IA & API",
      description: "Connectez vos systèmes et applications pour les enrichir avec des capacités d'intelligence artificielle avancées.",
    },
    {
      icon: Bot,
      title: "Agents conversationnels",
      description: "Développez des chatbots et assistants virtuels intelligents pour améliorer l'engagement et le support client.",
    },
    {
      icon: ChartBar,
      title: "Analyse prédictive",
      description: "Utilisez vos données pour anticiper les tendances futures et prendre des décisions stratégiques éclairées.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#00E5FF"
          speed={0.5}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <HoverBorderGradient
              containerClassName="rounded-2xl"
              className="p-0 bg-transparent rounded-2xl"
              as="div"
              highlightColor="#00E5FF"
            >
              <div className="w-20 h-20 relative rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/fuse abstract video qs icone.mp4" type="video/mp4" />
                </video>
              </div>
            </HoverBorderGradient>
          </div>
          <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
            Nos solutions IA et automatisation
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-geonova">
            Des solutions sur mesure propulsées par l'IA
          </h2>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {solutions.map((solution, index) => (
            <GridItem
              key={index}
              area={
                index === 0
                  ? "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                  : index === 1
                  ? "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/8]"
                  : index === 2
                  ? "md:[grid-area:2/1/3/7] xl:[grid-area:1/8/2/13]"
                  : "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/13]"
              }
              icon={<solution.icon className="h-6 w-6 text-white" />}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 bg-white/5 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="cyan"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/20 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2 mb-4">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-white/60">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
