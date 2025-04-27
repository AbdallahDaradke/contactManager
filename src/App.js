import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";

function App() {
  const [contact, setContact] = useState([]);

  const addContact = (singleContact) => {
    setContact([...contact, singleContact]);
  };

  useEffect(() => {
    if (contact.length > 0) {
      console.log(contact[contact.length - 1].ContactName);
      console.log(contact[contact.length - 1].Email);
    }
  }, [contact]);

  return (
    <div>
      <h1 className="app-header">Contact Manager App</h1>
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default App;
