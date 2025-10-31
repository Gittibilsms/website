import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { en: string; tr: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    if (lang === 'tr') {
      document.title = 'Gittibilsms | Hızlı, Güvenli ve Uygun Fiyatlı Toplu SMS Hizmetleri';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Gittibilsms ile hızlı, güvenli ve ekonomik toplu SMS gönderimi. 256 bit şifreleme ve 7/24 destek garantisi.');
      }
    } else {
      document.title = 'Gittibilsms | Fast, Secure & Affordable Bulk SMS Services';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Send fast, secure, and affordable Bulk SMS with Gittibilsms. Trusted SMS gateway with 256-bit encryption and 24/7 support.');
      }
    }
  };

  const t = (translations: { en: string; tr: string }) => translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
