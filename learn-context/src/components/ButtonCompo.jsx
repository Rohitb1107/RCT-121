import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

const ButtonCompo = (props) => {
  const [theme] = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
};

export default ButtonCompo;
