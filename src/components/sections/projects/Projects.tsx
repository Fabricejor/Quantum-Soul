"use client";

import React from "react";
import CardProject from "./CardProject";
import { useFilter } from "@/contexts/FilterContext";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  category: string;
  span?: string;
  rowSpan?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Basket Plus",
    subtitle: "Plateforme e-commerce moderne pour une boutique de baskets premium",
    coverImage: "/images/projets/basket plus +/Cover Basket plus hero.png",
    category: "Projets",
    span: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: "2",
    title: "DHIS2 Harvest",
    subtitle: "Solution de gestion de données pour hackathon santé publique",
    coverImage: "/images/projets/DHIS2 HARVEST- hackaton/Cover  login.jpeg",
    category: "Projets",
    span: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: "3",
    title: "La Fabrique Artisanal",
    subtitle: "Site e-commerce pour produits artisanaux avec intégration TikTok",
    coverImage: "/images/projets/La fabrique Artisanal/Cover La fabrique artisnal.jpeg",
    category: "Projets",
    span: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: "4",
    title: "Mobile App Santé",
    subtitle: "Application mobile de gestion de rendez-vous médicaux",
    coverImage: "/images/projets/mobile app sante/Cover Prise de rendez vous.jpeg",
    category: "Projets",
    span: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
];

export default function Projects() {
  const { selectedCategory, searchQuery } = useFilter();
  
  // Filtrer les projets selon la catégorie sélectionnée et la recherche
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = project.category === selectedCategory;
    const matchesSearch = 
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Si aucun projet ne correspond, ne rien afficher
  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full px-4 py-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredProjects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              coverImage={project.coverImage}
              span={project.span}
              rowSpan={project.rowSpan}
              onClick={() => {
                // TODO: Naviguer vers la page de détail du projet
                console.log("Navigate to project:", project.id);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
