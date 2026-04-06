import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, type Language } from './translations';

type TranslationData = typeof translations['en'];

interface LanguageContextType {
  lang: Language;
  t: TranslationData;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'en' ? 'tr' : 'en');
  }, []);

  const value = {
    lang,
    t: translations[lang],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
