"use client";

import React from "react";
import CardProject from "./CardProject";
import { useFilter } from "@/contexts/FilterContext";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function Projects() {
  const { selectedCategory, searchQuery } = useFilter();
  const router = useRouter();
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              coverImage={project.coverImage}
              span={project.span}
              aspectRatio={project.aspectRatio}
              onClick={() => {
                router.push(`/realisation/${project.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
