import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import AiBotDesign from "@/components/ai-bot/ai-bot-design";

const geonova = localFont({
  src: "../../public/fonts/geonova-variable.ttf",
  variable: "--font-geonova",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumsoul.fr"),
  title: {
    default: "QuantumSoul — Solutions IA & Automatisation",
    template: "%s | QuantumSoul",
  },
  description:
    "Fusionnez votre entreprise avec l'intelligence artificielle. QuantumSoul crée des solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.",
  keywords: [
    "intelligence artificielle",
    "automatisation",
    "IA",
    "chatbot",
    "machine learning",
    "développement web",
    "QuantumSoul",
    "solutions digitales",
    "analyse prédictive",
    "intégration API",
  ],
  authors: [{ name: "QuantumSoul" }],
  creator: "QuantumSoul",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://quantumsoul.fr",
    siteName: "QuantumSoul",
    title: "QuantumSoul — Solutions IA & Automatisation",
    description:
      "Fusionnez votre entreprise avec l'intelligence artificielle. Solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.",
    images: [
      {
        url: "/images/logo & icons/QS ID Blanc Background Transparent.png",
        width: 1200,
        height: 630,
        alt: "QuantumSoul Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumSoul — Solutions IA & Automatisation",
    description:
      "Fusionnez votre entreprise avec l'intelligence artificielle.",
    images: ["/images/logo & icons/QS ID Blanc Background Transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo%20&%20icons/Logo%20Q%20Blanc%20Icone.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geonova.variable} antialiased`}
      >
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
          <AiBotDesign />
        </ClientLayout>
      </body>
    </html>
  );
}
