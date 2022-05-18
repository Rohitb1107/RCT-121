import { useState } from "react";
import "./App.css";
import UsersData from "./components/ContactData";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
