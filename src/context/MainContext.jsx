import React, { createContext } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  //drawer
  const [drawer, setDrawer] = React.useState({
    isOpen: false,
    position: "rightDrawer",
    onConfirm: () => {},
  });
  //language
  const [languagePage, setLangLanguagePage] = React.useState(() => {
    var lang = localStorage.getItem("@lang");
    if (lang) {
      return lang;
    } else return "en";
  });
  const navData = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];
  const [tab, setTab] = React.useState("Home");

  return (
    <MainContext.Provider
      value={{
        drawer,
        setDrawer,
        languagePage,
        setLangLanguagePage,
        navData,
        tab,
        setTab,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
