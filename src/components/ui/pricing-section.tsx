import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond, X, HelpCircle, Mail, Send, CheckCircle } from "lucide-react";

// cn function
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

import { GlassButton } from "@/components/ui/button/apple-tahoe-liquid-glass-button";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <GlassButton
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </GlassButton>
    );
  }
);
Button.displayName = "Button";

// Define the props for the PricingCard component
interface PricingCardProps {
  title: string;
  price?: string;
  priceDescription?: string;
  description: string;
  features?: string[];
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  isPopular?: boolean;
  onButtonClick?: (pack: "Pack 1" | "Pack 2" | "Pack 3") => void;
}

// Framer Motion variants for animations
const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 30px -5px hsl(var(--foreground) / 0.1)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const imageVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -5,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      priceDescription,
      description,
      features,
      buttonText,
      imageSrc,
      imageAlt,
      isPopular = false,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        className={cn(
          "relative flex flex-col justify-between rounded-3xl p-8 text-white shadow-sm transition-all duration-500 group",
          isPopular
            ? "border border-cyan-500/40 bg-[#0D0D0D]/95 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,229,255,0.35)]"
            : "border border-white/10 bg-[#0D0D0D]/80 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
          className
        )}
        {...props}
      >
        {/* Popular Aura Glow */}
        {isPopular && (
          <>
            {/* Ambient halo glow outside the card */}
            <div className="absolute -inset-1 rounded-[25px] bg-cyan-500/15 blur-xl opacity-75 pointer-events-none -z-10 animate-pulse" />
            {/* Top popular badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] z-20 whitespace-nowrap">
              Plus apprécié
            </span>
          </>
        )}

        {/* Halo bleu/violet au survol (Glow effect) */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 group-hover:from-cyan-500/20 group-hover:via-purple-500/10 group-hover:to-transparent transition-opacity duration-500 pointer-events-none" />

        {/* Ligne lumineuse en haut au survol */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col space-y-6 relative z-10">
          {/* Card Header with optional image */}
          <div className="flex justify-between items-start">
            <div>
              <h3
                className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:to-cyan-200 transition-colors duration-300"
                style={{ fontVariantLigatures: "none", fontFeatureSettings: '"liga" 0' }}
              >
                {title}
              </h3>
              {price && (
                <div className="mt-2">
                  <span className="text-xl font-bold text-cyan-400">{price}</span>
                  <p className="text-sm text-white/60">
                    {priceDescription}
                  </p>
                </div>
              )}
            </div>
            {imageSrc && (
              <motion.img
                src={imageSrc}
                alt={imageAlt || title}
                width={80}
                height={80}
                className="select-none"
                variants={imageVariants}
              />
            )}
          </div>

          <div className="h-[1px] w-full bg-white/10" />

          {/* Card Description */}
          <p className="text-white/80">{description}</p>

          {/* Feature List */}
          {features && (
            <ul className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-300">
                    <Diamond className="h-3 w-3 text-cyan-400" />
                  </div>
                  <span className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer with Button */}
        <div className="mt-10 relative z-10">
          <Button
            className="w-full group/btn"
            onClick={() => onButtonClick?.(price as "Pack 1" | "Pack 2" | "Pack 3")}
          >
            {buttonText}
          </Button>
        </div>
      </motion.div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export default function PricingDemo() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPack, setSelectedPack] = React.useState<"Pack 1" | "Pack 2" | "Pack 3">("Pack 1");
  const [email, setEmail] = React.useState("");
  const [subjectText, setSubjectText] = React.useState("");
  const [ideaText, setIdeaText] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
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

  const openModal = (pack: "Pack 1" | "Pack 2" | "Pack 3") => {
    setSelectedPack(pack);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setEmail("");
      setSubjectText("");
      setIdeaText("");
      setIsSubmitted(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const plans = [
    {
      title: "Quantum Start",
      price: "Pack 1" as const,
      priceDescription: "L'essentiel pour démarrer",
      description:
        "Idéal pour lancer votre présence en ligne avec une base solide et automatisée.",
      features: [
        "Site web premium",
        "Intégration API",
        "Automatisation légère"
      ],
      buttonText: "Demander un devis",
    },
    {
      title: "Quantum Boost",
      price: "Pack 2" as const,
      priceDescription: "Pour accélérer votre croissance",
      description:
        "Une solution complète avec IA intégrée pour optimiser vos interactions clients.",
      features: [
        "Application Web complète",
        "Chatbot IA",
        "Dashboard client",
        "Automatisation complète"
      ],
      buttonText: "Demander un devis",
      isPopular: true,
    },
    {
      title: "Quantum Infinity",
      price: "Pack 3" as const,
      priceDescription: "La solution ultime sur mesure",
      description:
        "L'écosystème digital complet, propulsé par l'IA avancée pour dominer votre marché.",
      features: [
        "App Web + Mobile",
        "IA sur mesure",
        "Automatisation avancée",
        "Suivi + maintenance",
        "Data pipelines"
      ],
      buttonText: "Demander un devis",
    },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-5xl space-y-8">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              onButtonClick={openModal}
              className="bg-[#0D0D0D]/80 border-white/10 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-cyan-400/50"
            />
          ))}
        </div>
      </div>

      {/* Quote Form Modal Pop-up */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0D0D0D]/95 p-6 md:p-8 text-white shadow-2xl overflow-visible backdrop-blur-xl"
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

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                        Demander un devis
                      </h3>
                      <p className="text-sm text-white/60 mt-1">
                        Décrivez-nous votre projet et recevez une estimation personnalisée.
                      </p>
                    </div>

                    {/* E-mail */}
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

                    {/* Sujet composé (Input + Select) */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Sujet *
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          required
                          value={subjectText}
                          onChange={(e) => setSubjectText(e.target.value)}
                          placeholder="Informations relatives au..."
                          className="flex-1 bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none rounded-xl px-4 py-3 text-white transition-all text-sm font-sans"
                        />
                        <select
                          value={selectedPack}
                          onChange={(e) => setSelectedPack(e.target.value as "Pack 1" | "Pack 2" | "Pack 3")}
                          className="bg-[#141414] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none rounded-xl px-4 py-3 text-white transition-all text-sm cursor-pointer min-w-[120px] font-sans"
                        >
                          <option value="Pack 1">Pack 1</option>
                          <option value="Pack 2">Pack 2</option>
                          <option value="Pack 3">Pack 3</option>
                        </select>
                      </div>
                    </div>

                    {/* Idée avec tooltip "?" */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                          Expliquez-nous brièvement votre idée *
                        </label>

                        {/* Tooltip "?" */}
                        <div className="relative group flex items-center">
                          <HelpCircle className="h-4 w-4 text-cyan-400 cursor-help hover:text-cyan-300 transition-colors" />

                          {/* Bulle d'information */}
                          <div className="absolute bottom-full right-0 mb-2 w-72 p-4 bg-[#161616] border border-white/10 text-xs text-white/80 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 backdrop-blur-md leading-relaxed">
                            <div className="font-bold text-cyan-400 mb-1 flex items-center gap-1">
                              <span>Engagement de confidentialité</span>
                            </div>
                            Dès la soumission de votre projet, nous considérons vos idées comme strictement confidentielles. Aucun développement ne sera entrepris sans accord contractuel écrit.
                          </div>
                        </div>
                      </div>

                      <textarea
                        required
                        rows={4}
                        value={ideaText}
                        onChange={(e) => setIdeaText(e.target.value)}
                        placeholder="Décrivez votre idée, vos objectifs et vos attentes..."
                        className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none rounded-xl px-4 py-3 text-white transition-all resize-none text-sm font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group/btn flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Envoi en cours..." : (
                          <>
                            Envoyer
                            <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  /* Success screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-2 animate-pulse">
                      <CheckCircle className="h-10 w-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold font-geonova text-white">Demande reçue !</h3>
                    <p className="text-white/70 text-sm max-w-sm leading-relaxed">
                      Merci de nous avoir partagé votre idée. Notre équipe va étudier votre projet et vous recontactera par e-mail sous 24h.
                    </p>
                    <div className="pt-4 w-full">
                      <Button onClick={closeModal} className="w-full">
                        Fermer
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}