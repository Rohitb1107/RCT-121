import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("light");

  const changeTheme = () => {
    state === "light" ? setState("dark") : setState("light");
  };

  return (
    <AppContext.Provider value={[state, changeTheme]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
