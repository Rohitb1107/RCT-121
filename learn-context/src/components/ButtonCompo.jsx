import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import style from "./Button.css";

const ButtonCompo = ({ text, onClick }) => {
  const [theme] = useContext(AppContext);

  return (
    <div>
      <button
        className={`${style.buttonBase} ${
          theme === "light" ? style.buttonLight : style.buttonDark
        }`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonCompo;
