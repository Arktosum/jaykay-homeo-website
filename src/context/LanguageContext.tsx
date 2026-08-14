import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, ClinicContent } from '../types';
import { getContent } from '../content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ClinicContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('jaykay_homeo_lang');
    return (saved === 'en' || saved === 'ta') ? saved : 'ta'; // Tamil by default!
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('jaykay_homeo_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const content = getContent(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
