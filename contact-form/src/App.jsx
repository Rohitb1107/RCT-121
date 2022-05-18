import { useState } from "react";
import "./App.css";
import UsersData from "./components/ContactData";
import ContactList from "./components/ContactList";
// import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <ContactList />
      {/* <Card /> */}
    </div>
  );
}

export default App;
