"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, Sparkles } from "lucide-react";
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
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "L'intelligence artificielle n'est plus de la science-fiction ; c'est une technologie fondamentale dans notre monde moderne. Nous allons au-delà de la simple automatisation vers des systèmes sophistiqués.",
        },
      ]);
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
        - Sur mobile : Plein écran avec un fond très sombre et des lueurs colorées.
        - Sur desktop : Flottant en bas à droite.
      */}
      <div
        className={`fixed z-[100] flex flex-col ${
          isOpen
            ? "inset-0 bg-[#05050A] md:bg-transparent md:inset-auto md:bottom-8 md:right-8 md:items-end"
            : "bottom-8 right-8 items-end hidden md:flex"
        }`}
      >
        {/* Background Glows (seulement sur mobile quand ouvert) */}
        {isOpen && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full" />
          </div>
        )}

        {/* Zone de messages */}
        <AnimatePresence>
          {isOpen && (messages.length > 0 || window.innerWidth < 768) && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              className="flex-1 w-full flex flex-col relative z-10 md:mb-4 md:w-[26rem] md:max-h-[65vh] md:rounded-[2rem] md:bg-white/[0.02] md:p-0 md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:backdrop-blur-3xl md:border md:border-white/10 overflow-hidden"
            >
              {/* Header Mobile */}
              <div className="flex items-center justify-between p-6 md:hidden">
                <button className="text-white/50 hover:text-white">
                  {/* Icône menu hamburger ou retour (optionnel) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
                <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md">
                  <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                    Quantum Soul AI <Sparkles size={14} className="text-purple-400" />
                  </span>
                </div>
                <button onClick={handleClose} className="p-2 text-white/50 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Conteneur des messages avec scroll */}
              <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar flex flex-col gap-8 md:p-6">
                {messages.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center md:hidden">
                    <div className="relative w-32 h-32 mb-8">
                      <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full" />
                      <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" fill className="object-contain relative z-10 opacity-80" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2 font-geonova">Ask anything</h2>
                    <p className="text-white/40 text-sm max-w-[80%]">Je suis là pour répondre à vos questions et vous accompagner.</p>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                  >
                    {msg.role === "ai" && (
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-black/50 border border-white/10">
                          <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" fill className="object-cover" />
                        </div>
                        <span className="text-xs font-medium text-white/50">Quantum Soul AI</span>
                      </div>
                    )}
                    
                    <div
                      className={`text-[15px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-3 rounded-3xl rounded-tr-sm shadow-[0_4px_24px_rgba(0,0,0,0.2)] max-w-[85%]"
                          : "text-white/90 max-w-[95%] pl-9" // Le texte de l'IA n'a pas de bulle, juste du texte propre
                      }`}
                    >
                      {msg.content}
                    </div>

                    {/* Actions sous le message IA (Like, Copy, etc.) */}
                    {msg.role === "ai" && (
                      <div className="flex items-center gap-4 mt-4 pl-9 text-white/30">
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></button>
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/></svg></button>
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barre d'input - Style Liquid Glass */}
        <div className={`w-full relative z-20 ${isOpen ? "p-6 md:p-0 md:mt-4" : ""}`}>
          <motion.div
            layout
            initial={{ borderRadius: 9999 }}
            animate={{
              width: isOpen ? "100%" : "4rem",
              maxWidth: isOpen ? "100%" : "4rem",
              borderRadius: isOpen ? 9999 : 9999,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className={`relative flex items-center overflow-hidden mx-auto ${
              isOpen
                ? "h-16 md:w-[26rem]"
                : "h-16 cursor-pointer"
            }`}
            onClick={handleOpen}
          >
            {/* Background Glass Effect (Dark Liquid Glass) */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)]" />

            <div className="relative flex h-full w-full items-center px-2 z-10">
              {/* Bouton Logo / Orb */}
              <motion.button
                layout
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full overflow-hidden"
                animate={{
                  rotate: isProcessing ? [0, 360] : isTyping ? [0, 360] : isOpen ? 360 : 0,
                  scale: isProcessing ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: { duration: isProcessing || isTyping ? 2 : 0.5, repeat: isProcessing || isTyping ? Infinity : 0, ease: "linear" },
                  scale: { duration: 1.5, repeat: isProcessing ? Infinity : 0, ease: "easeInOut" },
                }}
                onClick={(e) => {
                  if (isOpen && window.innerWidth >= 768) handleClose(e);
                }}
              >
                {/* Glow derrière le logo */}
                <div className="absolute inset-0 bg-blue-500/40 blur-md rounded-full" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLogo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image src={currentLogo} alt="AI Bot Logo" width={32} height={32} className="object-contain relative z-10" />
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Input Area */}
              <AnimatePresence>
                {isOpen && (
                  <motion.form
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onSubmit={handleSend}
                    className="flex h-full w-full items-center gap-2 pl-3 pr-2"
                  >
                    <div className="relative w-full h-full flex items-center">
                      {!inputValue && !isProcessing && (
                        <span className="absolute left-0 text-white/40 pointer-events-none text-[15px] font-light">
                          Ask anything<span className="animate-pulse">|</span>
                        </span>
                      )}
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isProcessing}
                        className="h-full w-full bg-transparent text-[15px] text-white focus:outline-none disabled:opacity-50 relative z-10"
                      />
                    </div>
                    
                    {/* Bouton Fermer (Croix) */}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors hidden md:flex"
                    >
                      <X size={18} />
                    </button>

                    {/* Bouton Envoyer (Glass style) */}
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isProcessing}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
                    >
                      <Send size={16} className={inputValue.trim() && !isProcessing ? "ml-0.5 text-blue-400" : "text-white/50"} />
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