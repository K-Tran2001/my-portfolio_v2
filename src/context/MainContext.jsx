import React, { createContext } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  //drawer
  const [drawer, setDrawer] = React.useState({
    isOpen: false,
    position: "rightDrawer",
    onConfirm: () => {},
  });
  const [languagePage, setLangLanguagePage] = React.useState(() => {
    var lang = localStorage.getItem("@lang");
    if (lang) {
      return lang;
    } else return "en";
  });

  return (
    <MainContext.Provider
      value={{
        drawer,
        setDrawer,
        languagePage,
        setLangLanguagePage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
