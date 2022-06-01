import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonCompo from "./components/ButtonCompo";

function App() {
  console.log("Hello");
  return (
    <div className="App">
      <h1>Context API</h1>
      <ButtonCompo text="Theme" />
    </div>
  );
}

export default App;
