"use client";

import React from "react";
import { Send, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useAiBotLogic } from "./ai-bot-logic";

export default function AiBotDesign() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On récupère toute la logique depuis notre hook personnalisé
  const {
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
  } = useAiBotLogic();

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
        className={`fixed z-[9999] flex flex-col ${isOpen
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
          {isOpen && (messages.length > 0 || isMobile) && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              className="flex-1 w-full flex flex-col relative z-10 md:mb-4 md:w-[26rem] md:max-h-[65vh] md:rounded-[2rem] md:bg-white/[0.02] md:p-0 md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:backdrop-blur-3xl md:border md:border-white/10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Chatbot QuantumSoul AI"
            >
              {/* Header Mobile */}
              <div className="flex items-center justify-between p-6 md:hidden">
                <button className="text-white/50 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
                <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md">
                  <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                    QuantumSoul AI <Sparkles size={14} className="text-purple-400" />
                  </span>
                </div>
                <button onClick={handleClose} className="p-2 text-white/50 hover:text-white" aria-label="Fermer le chatbot">
                  <X size={24} />
                </button>
              </div>

              {/* Conteneur des messages avec scroll */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-4 custom-scrollbar flex flex-col gap-8 md:p-6">
                {messages.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center md:hidden">
                    <div className="relative w-32 h-32 mb-8">
                      <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full" />
                      <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" fill sizes="128px" className="object-contain relative z-10 opacity-80" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2 font-geonova">Posez moi vos questions</h2>
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
                          <Image src="/images/IA Animation/Qs AI Default.png" alt="AI" fill sizes="24px" className="object-cover" />
                        </div>
                        <span className="text-xs font-medium text-white/50">QuantumSoul AI</span>
                      </div>
                    )}

                    <div
                      className={`text-[15px] leading-relaxed break-words whitespace-pre-wrap ${msg.role === "user"
                          ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-3 rounded-3xl rounded-tr-sm shadow-[0_4px_24px_rgba(0,0,0,0.2)] max-w-[85%]"
                          : "text-white/90 max-w-[95%] pl-9" // Le texte de l'IA n'a pas de bulle, juste du texte propre
                        }`}
                    >
                      {msg.content}
                    </div>

                    {/* Actions sous le message IA (Like, Copy, etc.) */}
                    {msg.role === "ai" && (
                      <div className="flex items-center gap-4 mt-4 pl-9 text-white/30">
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></button>
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" /></svg></button>
                        <button className="hover:text-white/80 transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button>
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barre d'input - Style Liquid Glass */}
        <div className={`w-full relative z-20 ${isOpen ? "p-6 md:p-0 md:mt-4" : "group"}`}>
          {/* Tooltip "Essayer notre chatbot" (Visible uniquement sur Desktop au survol quand fermé) */}
          {!isOpen && (
            <div className="absolute bottom-[110%] right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
              <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full py-2 px-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400" />
                <span className="text-sm font-medium text-white/90 whitespace-nowrap font-geonova">
                  Essayer notre chatbot
                </span>
              </div>
            </div>
          )}

          <motion.div
            layout
            initial={{ borderRadius: 9999 }}
            animate={{
              width: isOpen ? "100%" : "4rem",
              maxWidth: isOpen ? "100%" : "4rem",
              borderRadius: isOpen ? 9999 : 9999,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className={`relative flex items-center overflow-hidden mx-auto ${isOpen
                ? "h-16 md:w-[26rem]"
                : "h-16 cursor-pointer"
              }`}
            onClick={handleOpen}
            aria-label={isOpen ? undefined : "Ouvrir le chatbot"}
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
                  if (isOpen && !isMobile) handleClose(e);
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
                    <Image src={currentLogo} alt="AI Bot Logo" width={32} height={32} sizes="32px" className="object-contain relative z-10" />
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
                          Posez moi vos questions<span className="animate-pulse">|</span>
                        </span>
                      )}
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isProcessing}
                        aria-label="Posez vos questions à l'IA"
                        className="h-full w-full bg-transparent text-[15px] text-white focus:outline-none disabled:opacity-50 relative z-10"
                      />
                    </div>

                    {/* Bouton Fermer (Croix) */}
                    <button
                      type="button"
                      onClick={handleClose}
                      aria-label="Fermer le chatbot"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors hidden md:flex"
                    >
                      <X size={18} />
                    </button>

                    {/* Bouton Envoyer (Glass style) */}
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isProcessing}
                      aria-label="Envoyer le message"
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