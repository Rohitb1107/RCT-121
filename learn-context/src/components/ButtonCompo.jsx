import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import style from "./Button.module.css";

function ButtonCompo({ text }) {
  const [state, toggleTheme] = useContext(AppContext);
  const cls = `${style.buttonBase} ${
    state === "light" ? style.buttonLight : style.buttonDark
  }`;
  return <button className={cls}>{text}</button>;
}

export default ButtonCompo;
