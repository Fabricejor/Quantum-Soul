"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- DONNÉES DES SLIDES ---
const slides = [
  {
    id: 1,
    title: "Créations de Solutions Digitales (Web & Mobile) & Design",
    description: "Transformez votre vision en réalité avec des applications web et mobiles performantes, intuitives et esthétiquement irréprochables. Chez Quantum Soul, nous concevons des expériences utilisateur (UX/UI) exceptionnelles, pensées pour engager votre audience, fidéliser vos clients et propulser votre marque dans l'ère digitale avec une identité visuelle forte.",
    images: [
      "/images/services/Création d'applications web et mobile.jpeg",
      "/images/services/Création d'applications web et mobile_4.jpeg",
      "/images/services/Création d'applications web et mobile_3.jpeg"
    ]
  },
  {
    id: 2,
    title: "Automatisation Intelligente",
    description: "Libérez le véritable potentiel de votre équipe en éliminant les tâches répétitives et chronophages. Nous optimisons vos processus métiers grâce à des workflows automatisés sur mesure. En connectant intelligemment vos outils du quotidien, Quantum Soul garantit à votre entreprise une efficacité décuplée, une réduction des erreurs et un gain de temps précieux.",
    images: [
      "/images/services/Automatisation & Ai 1 .png",
      "/images/services/Automatisation & Ai .png",
      "/images/services/Automatisation & Ai 2 .png"
    ]
  },
  {
    id: 3,
    title: "Intégration Intelligence Artificielle Sur Mesure",
    description: "Propulsez votre entreprise vers le futur en exploitant la puissance de l'IA. Nous intégrons des solutions d'Intelligence Artificielle parfaitement adaptées à votre secteur d'activité : agents conversationnels autonomes, analyse prédictive de données et bots intelligents. Révolutionnez vos services, anticipez les besoins de vos clients et devancez la concurrence.",
    images: [
      "/images/services/iPhone AI Agents 2.png",
      "/images/services/iPhone AI Agents 3.png",
      "/images/services/iPhone AI Agents.jpeg"
    ]
  }
];

// --- SOUS-COMPOSANT POUR LE SLIDER MOBILE ---
// Permet à chaque slide mobile d'avoir son propre cycle d'images indépendant
function MobileImageSlider({ images, title }: { readonly images: string[], readonly title: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    // --- TEMPS ENTRE CHAQUE IMAGE (MOBILE) ---
    // 4500 = 4.5 secondes avant de passer à l'image suivante
    }, 4500); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        // --- TRANSITION FADE MOBILE ---
        // duration: 1.5 = La transition prend 1.5 secondes (plus lent/doux qu'avant)
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src={images[idx]}
          alt={`${title} - image ${idx + 1}`}
          fill
          className="object-contain"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerieService() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gestion du diaporama pour la version Desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % slides[activeSlide].images.length
      );
    // --- TEMPS ENTRE CHAQUE IMAGE ---
    // 4500 = 4.5 secondes avant de passer à l'image suivante (augmenté pour compenser la transition plus longue)
    }, 4500); 
    return () => clearInterval(interval);
  }, [activeSlide]);

  // Réinitialiser l'index de l'image quand on change de section (scroll)
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeSlide]);

  return (
    <section className="relative w-full text-white z-10">
      
      {/* ========================================== */}
      {/* VERSION DESKTOP (PC & Tablettes Paysage)   */}
      {/* ========================================== */}
      <div className="hidden lg:flex relative w-full items-start max-w-7xl mx-auto">
        
        {/* Colonne de Gauche (Fixe / Sticky) - Images (50% de la largeur) */}
        <div className="sticky top-0 h-screen w-1/2 flex items-center justify-center p-8 xl:p-12">
          <div className="relative w-full h-[80vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSlide}-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                // --- TRANSITION FADE DESKTOP ---
                // duration: 1.5 = La transition prend 1.5 secondes (plus lent/doux qu'avant)
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={slides[activeSlide].images[currentImageIndex]}
                  alt={slides[activeSlide].title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Colonne de Droite (Scrollable) - Textes (50% de la largeur) */}
        <div className="w-1/2 flex flex-col pt-[20vh] pb-[30vh]">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="h-screen flex flex-col justify-center pr-8 xl:pr-12 pl-4 md:pl-12"
              // Détecte quand cette section arrive au milieu de l'écran pour changer l'image à gauche
              onViewportEnter={() => setActiveSlide(index)}
              viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
            >
              <div className="flex flex-col">
                <h2 className="text-3xl xl:text-5xl font-bold font-geonova mb-6 text-white">
                  {slide.title}
                </h2>
                <p className="text-lg xl:text-xl text-white/80 leading-relaxed text-justify">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* VERSION MOBILE (Smartphones & Tablettes)   */}
      {/* ========================================== */}
      <div className="lg:hidden flex flex-col w-full px-4 sm:px-8 pt-[5vh] pb-[15vh]">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="h-[90vh] flex flex-col justify-center py-8"
          >
            {/* Haut : Diaporama d'images */}
            <div className="relative w-full h-[50%] mb-6 flex items-center justify-center">
              <MobileImageSlider images={slide.images} title={slide.title} />
            </div>
            
            {/* Bas : Textes */}
            <div className="flex flex-col justify-start h-[45%] overflow-y-auto no-scrollbar pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-geonova mb-4 text-white">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed text-justify">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}