import React, { useState } from "react";
import en from "../locales/en.json";
import vi from "../locales/vn.json";
import { MainContext } from "../context/MainContext";

const languages = { en, vi };

export function useTranslate() {
  const context = React.useContext(MainContext);
  const { languagePage ,setLangLanguagePage  } = context;
  //const [lang, setLang] = useState("en");
  

  const t = (key) => {
    return languages[languagePage]?.[key] || key;
  };

  const changeLanguage = (newLang) => {
    
    setLangLanguagePage(newLang);
  };

  return { t, changeLanguage, languagePage };
}
