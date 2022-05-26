import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changetheme = () => {
    {
      theme == "light" ? setTheme("dark") : setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changetheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
