import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("light");
  // const [name, setName] = useState("Rohit");

  const toggleTheme = () => {
    state === "light" ? setState("dark") : setState("light");
  };

  return (
    <AppContext.Provider value={[state, toggleTheme]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
