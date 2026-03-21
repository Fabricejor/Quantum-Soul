import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Diamond, Sparkles } from "lucide-react";

// cn function
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// Button
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
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
  useSparkles?: boolean;
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
      useSparkles = false,
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
          "relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D0D0D]/80 p-8 text-white shadow-sm transition-all duration-500 group overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Halo bleu/violet au survol (Glow effect) */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 group-hover:from-cyan-500/20 group-hover:via-purple-500/10 group-hover:to-transparent transition-opacity duration-500 pointer-events-none" />
        
        {/* Ligne lumineuse en haut au survol */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col space-y-6 relative z-10">
          {/* Card Header with optional image */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold font-geonova text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:to-cyan-200 transition-colors duration-300">{title}</h3>
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
                    {useSparkles ? (
                      <Sparkles className="h-3 w-3 text-cyan-400" />
                    ) : (
                      <Diamond className="h-3 w-3 text-cyan-400" />
                    )}
                  </div>
                  <span className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors duration-300">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer with Button */}
        <div className="mt-10 relative z-10">
          <Button className="w-full group/btn">
            {buttonText}
          </Button>
        </div>
      </motion.div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export default function PricingDemo() {
  const plans = [
    {
      title: "Quantum Start",
      price: "Pack 1",
      priceDescription: "L'essentiel pour démarrer",
      description:
        "Idéal pour lancer votre présence en ligne avec une base solide et automatisée.",
      features: [
        "Site web premium",
        "Intégration API",
        "Automatisation légère"
      ],
      buttonText: "Demander un devis sur mesure",
    },
    {
      title: "Quantum Boost",
      price: "Pack 2",
      priceDescription: "Pour accélérer votre croissance",
      description:
        "Une solution complète avec IA intégrée pour optimiser vos interactions clients.",
      features: [
        "Application Web complète",
        "Chatbot IA",
        "Dashboard client",
        "Automatisation complète"
      ],
      buttonText: "Demander un devis sur mesure",
    },
    {
      title: "Quantum Infinity",
      price: "Pack 3",
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
      buttonText: "Demander un devis sur mesure",
      useSparkles: true,
    },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-5xl space-y-8">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} className="bg-[#0D0D0D]/80 border-white/10 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-cyan-400/50" />
          ))}
        </div>
      </div>
    </div>
  );
}