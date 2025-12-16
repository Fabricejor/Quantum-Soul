"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
                            Contactez <span className="text-neon-green">Quantum Soul</span>
                        </h1>
                        <p className="text-gray-400 mb-12 text-lg">
                            Prêt à transformer votre entreprise ? Notre équipe d&apos;experts est là pour vous accompagner dans votre transition vers l&apos;IA.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-gray-400">contact@quantumsoul.io</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Téléphone</h3>
                                    <p className="text-gray-400">+33 1 23 45 67 89</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Bureau</h3>
                                    <p className="text-gray-400">123 Avenue de l&apos;Innovation, 75000 Paris</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="p-8 bg-white/5 border-white/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-300">Nom</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-green focus:outline-none transition-colors text-white" placeholder="Votre nom" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-300">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-green focus:outline-none transition-colors text-white" placeholder="votre@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300">Sujet</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-green focus:outline-none transition-colors text-white" placeholder="Comment pouvons-nous vous aider ?" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300">Message</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-green focus:outline-none transition-colors h-32 text-white" placeholder="Décrivez votre projet..." />
                            </div>

                            <Button className="w-full">Envoyer le message</Button>
                        </form>
                    </Card>
                </div>
            </div>
            <Footer />
        </main>
    );
}
