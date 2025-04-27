import logo from "./logo.svg";
import "./App.css";
import "./components/css/ContactList.css";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";

function App() {
  const [contact, setContact] = useState([]);

  const addContact = (singleContact) => {
    setContact([...contact, singleContact]);
  };

  // useEffect(() => {
  //   if (contact.length > 0) {
  //     console.log(`Contact Name : ${contact[contact.length - 1].ContactName} `);
  //     console.log(`Contact Email: ${contact[contact.length - 1].Email}`);
  //   }
  // }, [contact]);

  return (
    <div>
      <h1 className="app-header">Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
