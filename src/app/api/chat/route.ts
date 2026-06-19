import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { QUANTUM_SOUL_MARKETING_MEMORY } from "@/components/ai-bot/marketing-memory";

// Récupération de la clé API depuis les variables d'environnement
const apiKey = process.env.API_CHAT_BOT || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "La clé API n'est pas configurée.", details: "Vérifiez votre fichier .env" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Format de messages invalide." },
        { status: 400 }
      );
    }

    // Initialisation du modèle Gemini (gemini-2.5-flash est très rapide et performant)
    // On injecte ici notre Prompt Système (Marketing Memory) pour définir son comportement
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: QUANTUM_SOUL_MARKETING_MEMORY
    });

    // Formatage de l'historique pour Gemini
    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // CORRECTION CRITIQUE : Gemini exige que l'historique commence TOUJOURS par "user"
    // Comme notre frontend initialise le chat avec un message de bienvenue de l'IA ("model"),
    // l'historique commence par "model", ce qui fait planter l'API.
    // Solution : On ajoute un faux message "user" invisible au tout début de l'historique.
    if (history.length > 0 && history[0].role === "model") {
      history.unshift({
        role: "user",
        parts: [{ text: "Bonjour, je visite le site de QuantumSoul." }]
      });
    }

    const latestMessage = messages[messages.length - 1].content;

    // Démarrer le chat avec l'historique
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.85, // Augmenté pour plus de créativité et de copywriting (était 0.7)
      },
    });

    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    console.error("Erreur API Gemini:", errorMessage);

    return NextResponse.json(
      {
        error: "Une erreur est survenue lors du traitement de votre demande.",
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
