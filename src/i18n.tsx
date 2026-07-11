import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en } from "./strings/en";
import { ru } from "./strings/ru";
import type { Strings } from "./strings/types";

export type Lang = "en" | "ru";

const DICT: Record<Lang, Strings> = { en, ru };
const STORAGE_KEY = "gt-lang";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  s: Strings;
}

const LanguageContext = createContext<I18nValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ru") return saved;
  } catch {
    // localStorage unavailable (private mode) - fall through to browser default.
  }
  return typeof navigator !== "undefined" &&
    navigator.language?.toLowerCase().startsWith("ru")
    ? "ru"
    : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore persistence failures
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, s: DICT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
