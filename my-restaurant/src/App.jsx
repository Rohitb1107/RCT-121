import { useState } from "react";
import "./App.css";
import MenuCard from "./Components/MenuCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MenuCard />
    </div>
  );
}

export default App;
