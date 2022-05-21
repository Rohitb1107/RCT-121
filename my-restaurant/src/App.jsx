import React, { useState, useEffect } from "react";
import "./App.css";
import MenuCard from "./Components/MenuCard";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/food")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <MenuCard />
    </div>
  );
}

export default App;
