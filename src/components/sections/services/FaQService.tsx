"use client";
import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GlassCalendar } from '@/components/ui/calendar/glass-calendar';
import { X, Mail, ArrowRight, ArrowLeft, Calendar, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import FAQWithSpiral from '@/components/ui/faq-section';
import { GlassButton } from '@/components/ui/button/apple-tahoe-liquid-glass-button';
import { cn } from '@/lib/utils';

export default function FaQService() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [email, setEmail] = React.useState("");
  const [idea, setIdea] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setEmail("");
      setIdea("");
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setIsSubmitting(false);
    }, 300);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1200);
  };

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

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ];

  const capitalizedDate = React.useMemo(() => {
    if (!selectedDate) return "";
    const str = format(selectedDate, "EEEE d MMMM yyyy", { locale: fr });
    return str.charAt(0).toUpperCase() + str.slice(1);
  }, [selectedDate]);

  return (
    <section className="relative w-full z-10">
      <FAQWithSpiral
        title="FAQ"
        subtitle="Toutes les réponses à vos questions."
        faqs={faqs}
        ctaText="Prêts à entrer dans une nouvelle dimension digitale ?"
        ctaButtonText="Définir votre projet avec QuantumSoul"
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Quote & Booking Multistep Modal Pop-up */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "relative w-full rounded-3xl border border-white/10 bg-[#0D0D0D]/95 p-6 md:p-8 text-white shadow-2xl overflow-visible backdrop-blur-xl transition-all duration-300",
                  step === 2 ? "max-w-2xl" : "max-w-lg"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5 z-10"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Progress Indicators (Only for Steps 1 & 2) */}
                {step < 3 && (
                  <div className="flex items-center space-x-2 mb-6">
                    <div className={cn("h-1 flex-1 rounded-full transition-all duration-300", step >= 1 ? "bg-cyan-500" : "bg-white/10")} />
                    <div className={cn("h-1 flex-1 rounded-full transition-all duration-300", step >= 2 ? "bg-cyan-500" : "bg-white/10")} />
                  </div>
                )}

                {step === 1 && (
                  /* Step 1: Project Idea Discovery */
                  <form onSubmit={handleNextStep} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                        Parlez-nous de votre idée
                      </h3>
                      <p className="text-sm text-white/60 mt-1">
                        Étape 1 sur 2 — Décrivez votre projet pour débuter l'estimation.
                      </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/50 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                        <Mail className="h-3.5 w-3.5 text-cyan-400" /> Adresse e-mail *
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemple@email.com" 
                        className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none rounded-xl px-4 py-3 text-white transition-all text-sm font-sans" 
                      />
                    </div>

                    {/* Project Idea Textarea */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Votre projet en quelques mots *
                      </label>
                      <textarea 
                        required 
                        rows={5} 
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        placeholder="Décrivez brièvement votre projet. Nous accordons une importance de premier ordre à la confidentialité et à la propriété intellectuelle : tout développement ou exploitation de votre idée ne débutera qu'après la signature d'un accord contractuel écrit." 
                        className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none rounded-xl px-4 py-3 text-white transition-all resize-none text-sm font-sans leading-relaxed" 
                      />
                    </div>

                    <div className="pt-2">
                      <GlassButton 
                        type="submit" 
                        className="w-full group/btn flex items-center justify-center gap-2"
                      >
                        <span>Suivant</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </GlassButton>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  /* Step 2: Date & Hour Google Meet Booking */
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                        Planifier une réunion
                      </h3>
                      <p className="text-sm text-white/60 mt-1">
                        Étape 2 sur 2 — Choisissez une date et heure de visio (Google Meet).
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                      {/* Left: French Month Grid Calendar */}
                      <div className="flex-1 w-full flex justify-center">
                        <GlassCalendar 
                          selectedDate={selectedDate} 
                          onDateSelect={(date) => {
                            setSelectedDate(date);
                            setSelectedTime(undefined); // Reset slot choice when changing date
                          }} 
                          className="bg-white/5 border-white/10"
                        />
                      </div>

                      {/* Right: Time Slot Buttons */}
                      <div className="flex-1 w-full space-y-4">
                        <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-cyan-400" /> Créneaux de réunion disponibles *
                        </h4>
                        
                        {selectedDate ? (
                          <div className="grid grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={cn(
                                  "py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-1.5",
                                  selectedTime === time
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                                )}
                              >
                                <Clock className="h-3.5 w-3.5 opacity-60" />
                                <span>{time}</span>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="h-[200px] flex items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-xs text-white/40 text-center px-4 leading-relaxed">
                            Veuillez sélectionner un jour sur le calendrier à gauche pour afficher les heures disponibles.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="flex justify-between items-center gap-4 pt-4 border-t border-white/10 mt-6 w-full">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors py-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Retour</span>
                      </button>
                      
                      <GlassButton
                        onClick={handleFinalSubmit}
                        disabled={!selectedDate || !selectedTime || isSubmitting}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Validation..." : (
                          <>
                            <span>Confirmer le RDV</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </GlassButton>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  /* Step 3: Success Confirmation Screen */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-2 animate-pulse">
                      <CheckCircle className="h-10 w-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold font-geonova text-white">Projet & RDV Confirmés !</h3>
                    <p className="text-white/70 text-sm max-w-md leading-relaxed">
                      Votre idée a bien été enregistrée en toute confidentialité. Un e-mail de confirmation contenant votre invitation de visioconférence Google Meet a été envoyé à : <strong className="text-cyan-400">{email}</strong>.
                    </p>
                    
                    {/* Booking Details Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full text-left max-w-sm space-y-3 mt-2">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Récapitulatif de la réunion</div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2.5">
                        <Calendar className="h-4.5 w-4.5 text-cyan-400" />
                        <span>{capitalizedDate}</span>
                      </div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2.5">
                        <Clock className="h-4.5 w-4.5 text-cyan-400" />
                        <span>{selectedTime} (Google Meet)</span>
                      </div>
                    </div>

                    <div className="pt-4 w-full max-w-sm">
                      <GlassButton onClick={closeModal} className="w-full">
                        Fermer
                      </GlassButton>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}