"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function HistoireTimeline() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Première idée du concept
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/Mockup 12.png"
                alt="Concept initial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Premiers prototypes d’automatisation
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/Mockup web app e-commerce.png"
                alt="Prototypes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Création officielle de Quantum Soul
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/Mockup Ribbon 10 (1).png"
                alt="Lancement officiel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lancement de la suite IA interne
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/Mockup web ai .png"
                alt="Suite IA"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            30+ projets automatisés pour des entreprises
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/Mockup mobile app.png"
                alt="Projets automatisés"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline 
        data={data} 
        title="L'Évolution de Quantum Soul"
        description="Visualiser l’évolution de Quantum Soul : dates clés, créations, milestones."
      />
    </div>
  );
}
