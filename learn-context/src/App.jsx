import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import ButtonCompo from "./components/ButtonCompo";
import AppContext from "./context/AppContextProvider";

function App() {
  const [theme, changeTheme] = useContext(AppContext);
  return (
    <div className="App">
      <h1>Context API</h1>
      <ButtonCompo text="Theme" />

      <button onClick={changeTheme}>Toggle</button>
    </div>
  );
}

export default App;
