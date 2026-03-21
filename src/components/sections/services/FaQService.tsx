import React from 'react';
import FAQWithSpiral from '@/components/ui/faq-section';

export default function FaQService() {
  const faqs = [
    {
      q: "Quelle technologie utilisez-vous ?",
      a: "Nous utilisons les technologies les plus récentes et performantes du marché (React, Next.js, IA générative, etc.) pour aborder vos projets avec une confiance absolue et garantir des solutions robustes, évolutives et à la pointe de l'innovation."
    },
    {
      q: "Combien de temps dure un projet ?",
      a: "La durée varie généralement entre 1 mois et 1 an selon la complexité. Ce délai nous permet de comprendre vos besoins en profondeur, d'étudier les meilleures stratégies, d'implémenter les solutions, puis de sécuriser et tester rigoureusement l'ensemble."
    },
    {
      q: "Comment intégrer l’IA ?",
      a: "L'intégration de l'IA n'est plus un secret, mais une nécessité. La méthode technique importe moins que le résultat final : notre objectif principal est d'intégrer l'IA là où elle aura un impact réel pour booster votre projet, votre productivité et votre chiffre d'affaires."
    },
    {
      q: "Peut-on faire une solution 100% personnalisée ?",
      a: "Évidemment ! Chaque entreprise est unique, et nos solutions le sont tout autant. N'hésitez pas à prendre rendez-vous avec notre équipe pour discuter de vos besoins spécifiques et obtenir un devis sur mesure."
    }
  ];

  return (
    <section className="relative w-full z-10">
      <FAQWithSpiral 
        title="FAQ" 
        subtitle="Toutes les réponses à vos questions."
        faqs={faqs}
        ctaText="Prêts à entrer dans une nouvelle dimension digitale ?"
        ctaButtonText="Définir votre projet avec Quantum Soul"
      />
    </section>
  );
}