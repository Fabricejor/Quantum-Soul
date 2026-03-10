"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/animation/timeline";

export default function HistoireTimeline() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed text-justify">
            Première idée du concept. Tout a commencé par une simple observation : le fossé grandissant entre les technologies avancées et leur adoption par les entreprises. Nous avons esquissé les premiers plans d&apos;une plateforme capable de combler ce vide, en imaginant une synergie parfaite entre l&apos;humain et la machine.
          </p>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed text-justify">
            Premiers prototypes d’automatisation. Une année d&apos;expérimentation intense où nos algorithmes ont commencé à prendre forme. Nous avons testé nos premiers modèles sur des cas d&apos;usage réels, affinant la précision et la réactivité de nos systèmes pour garantir une performance optimale dès les premières itérations.
          </p>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed text-justify">
            Création officielle de Quantum Soul. L&apos;entité juridique est née, marquant le début de notre aventure entrepreneuriale. Nous avons structuré notre équipe, défini notre mission et lancé notre identité visuelle pour refléter notre vision futuriste et notre engagement envers l&apos;innovation durable.
          </p>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed text-justify">
            Lancement de la suite IA interne. Le déploiement de notre cœur technologique. Une suite d&apos;outils interconnectés permettant une analyse de données en temps réel et une génération de contenu automatisée, propulsant nos clients vers une nouvelle ère de productivité et de créativité sans précédent.
          </p>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed text-justify">
            30+ projets automatisés pour des entreprises. La confirmation de notre impact. De la PME au grand groupe, nos solutions ont transformé les processus opérationnels de plus de trente partenaires, validant notre approche et notre expertise unique sur le marché de la transformation digitale.
          </p>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg">
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
