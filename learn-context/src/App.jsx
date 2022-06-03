import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import ButtonCompo from "./components/ButtonCompo";
import { AppContext } from "./context/AppContextProvider";
function App() {
  const [state, toggleTheme] = useContext(AppContext);

  return (
    <div className="App">
      <h1>Context API</h1>
      <ButtonCompo text="Theme" />
      <br />
      <button onClick={toggleTheme}>Toggle theme</button>

      {/* <Test /> */}
    </div>
  );
}

export default App;
