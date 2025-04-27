import logo from "./logo.svg";
import "./components/css/App.css";
import ContactForm from "./components/ContactForm";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState([]);

  const addContact = (singleContact) => {
    setContact([...contact, singleContact]);
  };

  return (
    <div>
      <h1 className="app-header">Contact Manager App</h1>
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default App;
