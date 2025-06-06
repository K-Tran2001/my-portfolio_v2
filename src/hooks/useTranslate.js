import { useState } from "react";
import en from "../locales/en.json";
import vi from "../locales/vn.json";

const languages = { en, vi };

export function useTranslate() {
  const [lang, setLang] = useState("en");

  const t = (key) => {
    return languages[lang]?.[key] || key;
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return { t, changeLanguage, lang };
}
