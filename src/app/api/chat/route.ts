import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Récupération de la clé API depuis les variables d'environnement
const apiKey = process.env.API_CHAT_BOT || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  let debugModels: any[] = [];
  let selectedModel = "gemini-1.5-flash"; // Modèle par défaut

  try {
    console.log("--- NOUVELLE REQUÊTE API CHAT ---");
    
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

    // 1. APPEL À LISTMODELS POUR TROUVER LE BON MODÈLE
    try {
      console.log("Recherche des modèles disponibles...");
      const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      const modelsData = await modelsResponse.json();
      
      if (modelsData.models) {
        debugModels = modelsData.models.map((m: any) => ({
          name: m.name.replace('models/', ''), // Enlever le préfixe "models/"
          supportedGenerationMethods: m.supportedGenerationMethods
        }));

        // On cherche en priorité les modèles récents, sinon on prend le premier disponible
        // D'après votre liste, vous avez accès aux modèles de la génération 2.0, 2.5 et 3.1 !
        const preferredModels = ["gemini-2.5-flash", "gemini-3.1-pro-preview", "gemini-2.0-flash", "gemini-flash-latest"];
        let found = false;
        
        for (const pref of preferredModels) {
          if (debugModels.some(m => m.name === pref && m.supportedGenerationMethods?.includes("generateContent"))) {
            selectedModel = pref;
            found = true;
            break;
          }
        }

        // Si aucun des modèles préférés n'est trouvé, on prend le premier modèle "gemini" qui supporte generateContent
        if (!found) {
          const fallback = debugModels.find(m => 
            m.supportedGenerationMethods?.includes("generateContent") && 
            m.name.includes("gemini")
          );
          if (fallback) {
            selectedModel = fallback.name;
          }
        }
        
        console.log(`Modèle sélectionné automatiquement : ${selectedModel}`);
      } else {
        console.error("Erreur lors de la récupération des modèles (clé invalide ?) :", modelsData);
        // Si on a une erreur d'authentification ici, on la renvoie direct
        if (modelsData.error) {
          throw new Error(`Erreur API Google: ${modelsData.error.message}`);
        }
      }
    } catch (debugError: any) {
      console.error("Impossible de lister les modèles :", debugError.message);
      // On continue quand même avec le modèle par défaut au cas où
    }

    // 2. INITIALISATION DU MODÈLE SÉLECTIONNÉ
    const model = genAI.getGenerativeModel({ model: selectedModel });

    // 3. FORMATAGE DE L'HISTORIQUE
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const latestMessage = messages[messages.length - 1].content;

    // 4. ENVOI DU MESSAGE
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    console.log(`Envoi du message via le modèle ${selectedModel}...`);
    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();
    console.log("Réponse de Gemini reçue avec succès.");

    return NextResponse.json({ reply: responseText, debugModels, usedModel: selectedModel });
  } catch (error: any) {
    console.error("!!! ERREUR CRITIQUE API GEMINI !!!");
    console.error("Message d'erreur:", error.message);
    
    // Renvoyer l'erreur EXACTE et la liste des modèles au client
    return NextResponse.json(
      { 
        error: "Une erreur est survenue lors du traitement de votre demande.",
        details: error.message || "Erreur inconnue",
        debugModels: debugModels // On renvoie la liste même s'il y a eu une erreur !
      },
      { status: 500 }
    );
  }
}
