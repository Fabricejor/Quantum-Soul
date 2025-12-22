"use client";

import React from "react";
import { Marquee } from "@/components/ui/testimonials/3d-testimonails";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Alexandre D.",
    username: "@alex_tech",
    body: "Quantum Soul a transformé notre approche du développement. L'intégration de l'IA est transparente et incroyablement puissante.",
    img: "/images/avatarGroup/avatar1.jpg",
  },
  {
    name: "Sarah M.",
    username: "@sarah_design",
    body: "Le design system est d'une cohérence absolue. C'est un gain de temps phénoménal pour nos équipes créatives.",
    img: "/images/avatarGroup/avatar10.jpg",
  },
  {
    name: "Thomas R.",
    username: "@tom_dev",
    body: "J'étais sceptique au début, mais les performances sont au rendez-vous. Une fluidité exemplaire.",
    img: "/images/avatarGroup/avatar1.jpg",
  },
  {
    name: "Marie L.",
    username: "@marie_pm",
    body: "La vision symbiotique humain-machine prend tout son sens ici. Un outil indispensable pour le futur.",
    img: "/images/avatarGroup/avatar10.jpg",
  },
  {
    name: "Kevin B.",
    username: "@kev_data",
    body: "Les pipelines de données sont robustes. Nous avons réduit nos temps de traitement de 40%.",
    img: "/images/avatarGroup/avatar1.jpg",
  },
  {
    name: "Laura P.",
    username: "@laura_ux",
    body: "L'expérience utilisateur est au cœur du produit. C'est intuitif, beau et efficace.",
    img: "/images/avatarGroup/avatar10.jpg",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-4 md:p-6",
        "border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/10">
            <Image 
                src={img} 
                alt={name} 
                fill 
                className="object-cover" 
            />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 md:mt-4 text-xs md:text-sm text-white/80 leading-relaxed font-light">"{body}"</blockquote>
    </figure>
  );
};

export default function TheyTrustUs() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] py-12 md:py-24 overflow-hidden flex flex-col items-center justify-center">
      
      <div className="container relative z-10 flex flex-col items-center">
        <div className="text-center mb-8 space-y-4 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-geonova text-justify">
            L'impact de Quantum Soul : Retours d'expérience
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Découvrez comment nous redéfinissons les standards de l'industrie grâce à la confiance de nos partenaires.
          </p>
        </div>

        <div className="relative flex h-[350px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background/0">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
