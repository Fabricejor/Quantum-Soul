"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AiBotDesign() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isProcessing) return;

    setMessages((prev) => [...prev, { role: "user", content: inputValue }]);
    setInputValue("");
    setIsProcessing(true);

    // Simulation de la réponse de l'IA
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", content: "Voici une réponse simulée pour le design." }]);
      setIsProcessing(false);
    }, 3000);
  };

  // Déterminer quelle image afficher
  let currentLogo = "/images/IA Animation/Qs AI Default.png";
  if (isProcessing) {
    currentLogo = "/images/IA Animation/Qs AI writing.png";
  } else if (isTyping) {
    currentLogo = "/images/IA Animation/Qs AI loading.png";
  }

  return (
    <>
      {/* 
        Conteneur principal : 
        - Sur desktop : positionné en bas à droite.
        - Sur mobile : 
            - S'il est fermé, on le cache (le trigger est dans le dock).
            - S'il est ouvert, il prend tout l'écran (inset-0).
      */}
      <div
        className={`fixed z-[100] flex flex-col ${
          isOpen
            ? "inset-0 bg-black/80 backdrop-blur-xl md:inset-auto md:bottom-8 md:right-8 md:bg-transparent md:backdrop-blur-none md:items-end"
            : "bottom-8 right-8 items-end hidden md:flex"
        }`}
      >
        {/* Zone de messages (s'affiche uniquement si ouvert et s'il y a des messages, ou toujours sur mobile si ouvert pour prendre l'espace) */}
        <AnimatePresence>
          {isOpen && (messages.length > 0 || window.innerWidth < 768) && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              className="flex-1 w-full overflow-hidden flex flex-col md:mb-4 md:w-[24rem] md:max-h-[60vh] md:rounded-2xl md:bg-black/60 md:p-4 md:shadow-[0_0_30px_rgba(0,229,255,0.15)] md:backdrop-blur-xl md:border md:border-white/10"
            >
              {/* Header Mobile (visible uniquement sur mobile quand ouvert) */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 md:hidden">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/30">
                    <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" fill className="object-cover" />
                  </div>
                  <span className="text-white font-medium font-geonova tracking-wide">Quantum Soul AI</span>
                </div>
                <button onClick={handleClose} className="p-2 text-white/70 hover:text-white bg-white/5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-0 custom-scrollbar flex flex-col gap-4">
                {messages.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 md:hidden">
                    <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" width={80} height={80} className="mb-4 opacity-50" />
                    <p className="text-white text-sm">Comment puis-je vous aider aujourd'hui ?</p>
                  </div>
                )}
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-lg ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none border border-cyan-400/20"
                          : "bg-white/10 text-gray-100 rounded-bl-none border border-white/10 backdrop-blur-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barre d'input */}
        <div className={`p-4 md:p-0 w-full md:w-auto ${isOpen ? "bg-black/40 md:bg-transparent border-t border-white/10 md:border-none" : ""}`}>
          <motion.div
            layout
            initial={{ borderRadius: 9999 }}
            animate={{
              width: isOpen ? "100%" : "3.5rem",
              maxWidth: isOpen ? "100%" : "3.5rem",
              borderRadius: isOpen ? 9999 : 9999,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className={`relative flex h-14 items-center overflow-hidden border shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
              isOpen
                ? "w-full md:w-[24rem] bg-black/60 border-white/10"
                : "w-14 cursor-pointer bg-black/80 border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
            }`}
            onClick={handleOpen}
          >
            <div className="flex h-full w-full items-center px-2">
              {/* Bouton Logo */}
              <motion.button
                layout
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden"
                animate={{
                  rotate: isProcessing ? [0, 360] : isTyping ? [0, 360] : isOpen ? 360 : 0,
                  scale: isProcessing ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: {
                    duration: isProcessing || isTyping ? 2 : 0.5,
                    repeat: isProcessing || isTyping ? Infinity : 0,
                    ease: "linear",
                  },
                  scale: {
                    duration: 1.5,
                    repeat: isProcessing ? Infinity : 0,
                    ease: "easeInOut",
                  },
                }}
                onClick={(e) => {
                  if (isOpen && window.innerWidth >= 768) {
                    handleClose(e);
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLogo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image src={currentLogo} alt="AI Bot Logo" fill className="object-cover scale-110" />
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Input Area */}
              <AnimatePresence>
                {isOpen && (
                  <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onSubmit={handleSend}
                    className="flex h-full w-full items-center gap-2 pl-3 pr-1"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      disabled={isProcessing}
                      placeholder={isProcessing ? "Je traite votre réponse..." : "Posez votre question..."}
                      className="h-full w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none disabled:opacity-50"
                    />
                    
                    {/* Bouton Fermer (Croix) */}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors hidden md:flex"
                    >
                      <X size={18} />
                    </button>

                    {/* Bouton Envoyer */}
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isProcessing}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-500 disabled:shadow-none"
                    >
                      <Send size={16} className={inputValue.trim() && !isProcessing ? "ml-0.5" : ""} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}