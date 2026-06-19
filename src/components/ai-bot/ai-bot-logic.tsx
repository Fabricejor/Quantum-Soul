"use client";

import { useState, useRef, useEffect } from "react";

export type Message = { role: "user" | "ai"; content: string };

export function useAiBotLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  // On initialise le chat avec le message de bienvenue de l'IA
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Bonjour je suis le chat bot ia de QuantumSoul je suis la pour vous convaincre et vous aider a vous decider sur notre Startup"
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isTyping = inputValue.length > 0;

  // Écouter l'événement personnalisé pour ouvrir le bot depuis la barre de navigation mobile
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 300);
    };
    window.addEventListener("open-ai-bot", handleOpenEvent);
    return () => window.removeEventListener("open-ai-bot", handleOpenEvent);
  }, []);

  // Auto-scroll vers le bas quand un nouveau message est ajouté
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isProcessing) return;

    const userMessage = inputValue;
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];

    setMessages(newMessages);
    setInputValue("");
    setIsProcessing(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Erreur API retournée:", data);
        throw new Error(data.details || data.error || "Erreur lors de la communication avec l'API");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.reply || "Désolé, je n'ai pas pu générer de réponse.",
        },
      ]);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue. Veuillez vérifier la console.";
      console.error("Erreur lors de l'envoi:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Erreur: ${errorMessage}`,
        },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isOpen,
    inputValue,
    setInputValue,
    isProcessing,
    messages,
    inputRef,
    messagesEndRef,
    isTyping,
    handleOpen,
    handleClose,
    handleSend,
  };
}
