import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { content, personalInfo } from "../i18n/content";
import type { Locale, LocaleContent } from "../i18n/content";

const STORAGE_KEY = "cv-language";
const DEFAULT_LOCALE: Locale = "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: LocaleContent;
  personalInfo: typeof personalInfo;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    // localStorage no disponible: seguimos con el default
  }
  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignorar si no hay localStorage disponible
    }
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((prev) => (prev === "en" ? "es" : "en"));

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t: content[locale], personalInfo }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return ctx;
}
