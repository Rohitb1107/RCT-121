import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import "Button.jsx";

const ButtonCompo = (props) => {
  const [theme] = useContext(AppContext);

  return (
    <div>
      <button
        className={`${style.buttonBase} ${
          theme === "Light" ? style.buttonLight : style.buttonDark
        }`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonCompo;
