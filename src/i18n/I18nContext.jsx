import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const I18nContext = createContext({
  lang: 'pl',
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('lang');
      return saved === 'en' || saved === 'pl' ? saved : 'pl';
    } catch {
      return 'pl';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (value) => {
    if (value === 'pl' || value === 'en') setLangState(value);
  };

  const t = useMemo(() => {
    return (key, vars) => {
      const dict = translations[lang] || translations.pl || {};
      let str = dict[key] ?? translations.pl?.[key] ?? key;
      if (vars && typeof str === 'string') {
        Object.entries(vars).forEach(([k, v]) => {
          str = str.replace(new RegExp(`{${k}}`, 'g'), String(v));
        });
      }
      return str;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);

export default I18nContext;
