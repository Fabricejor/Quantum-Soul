"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/comon/loading";
import { AnimatePresence } from "framer-motion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  // Initial state depends on whether we are on the home page
  const [isLoading, setIsLoading] = useState(isHomePage);

  useEffect(() => {
    // Only trigger loading on Home Page
    if (isHomePage) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Minimum 5 seconds on home

      return () => clearTimeout(timer);
    } else {
      // Immediately stop loading if not on home
      setIsLoading(false);
    }
  }, [pathname, isHomePage]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && isHomePage && <Loading key="loading" />}
      </AnimatePresence>
      <div className={isLoading && isHomePage ? "hidden" : "block"}>{children}</div>
    </>
  );
}
