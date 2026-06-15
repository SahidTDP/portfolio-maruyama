"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import es from "@/lib/dictionaries/es";
import en from "@/lib/dictionaries/en";
import type { Dictionary } from "@/lib/dictionaries/es";

type Language = "es" | "en";

const dictionaries: Record<Language, Dictionary> = { es, en };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = dictionaries[lang].metadata.title;
  }, [lang]);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  const value: LanguageContextType = {
    lang,
    setLang: toggleLang,
    t: dictionaries[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
