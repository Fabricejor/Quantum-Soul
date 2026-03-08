"use client";

import React from "react";
import ArticlesCard from "./articlesCard";
import Image from "next/image";

const mainArticle = {
  title: "Hackathon DHIS2 Harvest 2025 : L'Innovation Récompensée",
  coverImage: "/images/Artciles/DSHI2-HARVEST/winner 2nd place Cover.jpg",
  content: `Le Hackathon DHIS2 Harvest 2025 à Dakar s'est achevé sur une semaine inspirante d'innovation et de collaboration. Les participants ont plongé au cœur du système de santé sénégalais pour développer des solutions concrètes autour de la plateforme DHIS2, en relevant les défis de la collecte et de la sécurisation des données.

  Accompagnés par des experts de l'APHRC, du Ministère de la Santé et d'autres institutions prestigieuses, les équipes ont transformé leurs idées en prototypes viables pour renforcer les systèmes de santé communautaires.

  Nous sommes particulièrement fiers d'annoncer que notre co-fondateur, Ibrahima Sory Sane, Expert en IA, et son équipe ont remporté la 2ème place de cette compétition prestigieuse. Une reconnaissance qui témoigne de l'excellence technique et de l'impact concret de nos solutions.`,
  link: "https://www.linkedin.com/posts/data-science-without-borders_dhis2harvest-dhis2-dswb-ugcPost-7389327734260445184-YmRe?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMxor0BeJtTq1cYwPK3mwMiPvTx1t_Uk6o",
};

const galleryImages = [
  {
    src: "/images/Artciles/DSHI2-HARVEST/DHSI2-Harvest.jpg",
    description: "Collaboration intensive durant le hackathon",
  },
  {
    src: "/images/Artciles/DSHI2-HARVEST/DHSI2-Harvest 2.jpg",
    description: "Présentation des solutions innovantes",
  },
  {
    src: "/images/Artciles/DSHI2-HARVEST/DHSI2-Harvest 3.jpg",
    description: "L'équipe au complet après la remise des prix",
  },
];

export default function Articles() {
  return (
    <section className="relative w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Column (approx 75-80%) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <ArticlesCard
              title={mainArticle.title}
              coverImage={mainArticle.coverImage}
              content={mainArticle.content}
              link={mainArticle.link}
            />
          </div>

          {/* Sidebar Column (Remaining width) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Galerie
            </h3>
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={img.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-white/90 font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
