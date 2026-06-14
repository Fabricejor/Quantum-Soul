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
    default: "Quantum Soul — Solutions IA & Automatisation",
    template: "%s | Quantum Soul",
  },
  description:
    "Fusionnez votre entreprise avec l'intelligence artificielle. Quantum Soul crée des solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.",
  keywords: [
    "intelligence artificielle",
    "automatisation",
    "IA",
    "chatbot",
    "machine learning",
    "développement web",
    "Quantum Soul",
    "solutions digitales",
    "analyse prédictive",
    "intégration API",
  ],
  authors: [{ name: "Quantum Soul" }],
  creator: "Quantum Soul",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://quantumsoul.fr",
    siteName: "Quantum Soul",
    title: "Quantum Soul — Solutions IA & Automatisation",
    description:
      "Fusionnez votre entreprise avec l'intelligence artificielle. Solutions digitales intelligentes pour automatiser, intégrer et amplifier vos performances.",
    images: [
      {
        url: "/images/logo & icons/QS ID Blanc Background Transparent.png",
        width: 1200,
        height: 630,
        alt: "Quantum Soul Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Soul — Solutions IA & Automatisation",
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
    icon: "/favicon.ico",
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
          <Footer/>
          <AiBotDesign />
        </ClientLayout>
      </body>
    </html>
  );
}
