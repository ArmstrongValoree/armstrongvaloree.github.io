import { createContext, useContext, useState } from "react";
import en from "../i18n/en.json";
import fr from "../i18n/fr.json";
import sw from "../i18n/sw.json";

const translations = { en, fr, sw };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  function switchLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  return (
    <LanguageContext.Provider
      value={{ t: translations[language], language, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
