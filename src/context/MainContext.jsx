import React, { createContext } from "react";

export const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  //drawer
  const [drawer, setDrawer] = React.useState({
    isOpen: false,
    position: "rightDrawer",
    onConfirm: () => {},
  });

  return (
    <MainContext.Provider
      value={{
        drawer,
        setDrawer,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
