"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Startup",
        price: "999€",
        features: ["Chatbot IA Basique", "5 Automatisations", "Support Email", "Hébergement Cloud"],
        recommended: false,
    },
    {
        name: "Scale-Up",
        price: "2499€",
        features: ["Chatbot NLP Avancé", "20 Automatisations", "Intégration API", "Support Prioritaire 24/7", "Dashboard Analytics"],
        recommended: true,
    },
    {
        name: "Enterprise",
        price: "Sur Devis",
        features: ["Solutions IA Sur Mesure", "Automatisations Illimitées", "Infrastructure Dédiée", "Formation Équipes", "SLA Garanti"],
        recommended: false,
    },
];

export default function Pricing() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
                        Nos <span className="text-neon-green">Tarifs</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des offres adaptées à chaque étape de votre croissance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`p-8 flex flex-col relative ${plan.recommended
                                    ? "border-neon-green shadow-[0_0_30px_rgba(0,255,65,0.2)] bg-white/5"
                                    : "border-white/10 bg-white/5"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black px-4 py-1 rounded-full text-sm font-bold">
                                    Recommandé
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-6 text-white">{plan.price}</div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.recommended ? "primary" : "outline"} className="w-full">
                                Choisir ce plan
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
