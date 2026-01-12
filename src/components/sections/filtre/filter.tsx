"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFilter } from "@/contexts/FilterContext";

const filterOptions = [
  "Projets",
  "Études de cas",
  "Articles de recherche",
  "Tutoriels / Insights IA",
];

const liquidGlassStyle = {
  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)",
  backdropFilter: "blur(10px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: `
    0 8px 32px 0 rgba(31, 38, 135, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)
  `,
};

export default function Filter() {
  const { searchQuery, selectedCategory, setSearchQuery, setSelectedCategory } = useFilter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative w-full px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Input de recherche */}
          <div className="flex-1 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3.5 md:py-4 rounded-full text-white placeholder-white/50 font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                style={liquidGlassStyle}
              />
              <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Dropdown pour les catégories */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative group px-6 md:px-8 py-3.5 md:py-4 rounded-full text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base min-w-[200px] md:min-w-[240px] flex items-center justify-between gap-3"
              style={liquidGlassStyle}
            >
              <span className="relative z-10">{selectedCategory}</span>
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Menu déroulant */}
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: `
                    0 8px 32px 0 rgba(31, 38, 135, 0.3),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                {filterOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-3.5 text-left text-white font-medium tracking-wide transition-all duration-200 text-sm md:text-base ${
                      selectedCategory === option
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-white/80 hover:text-white"
                    } ${
                      index !== filterOptions.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
