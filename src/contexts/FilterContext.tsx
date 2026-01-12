"use client";

import React, { createContext, useContext, useState } from "react";

interface FilterContextType {
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("Projets");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        searchQuery,
        setSelectedCategory,
        setSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
