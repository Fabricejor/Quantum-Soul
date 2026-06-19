import React from "react";
import type { Metadata } from "next";
import RealisationContent from "./RealisationContent";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez nos projets et réalisations : applications web, mobile, e-commerce, intégration IA. Portfolio de QuantumSoul et études de cas clients.",
};

export default function RealisationPage() {
  return (
    <main className="min-h-screen relative">
      <RealisationContent />
    </main>
  );
}
