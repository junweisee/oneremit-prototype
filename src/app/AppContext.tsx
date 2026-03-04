import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations, Translation } from './translations';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
  sendAmount: number;
  setSendAmount: (v: number) => void;
  receiveCurrencyCode: string;
  setReceiveCurrencyCode: (c: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [sendAmount, setSendAmount] = useState(8000);
  const [receiveCurrencyCode, setReceiveCurrencyCode] = useState('KRW');
  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, t, sendAmount, setSendAmount, receiveCurrencyCode, setReceiveCurrencyCode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
