import React, { useState } from "react";
import "./css/ContactForm.css";

function ContactForm(props) {
  const [ContactName, SetContactName] = useState("");
  const [Email, SetEmail] = useState("");

  const addContactSubmit = (e) => {
    e.preventDefault();
    let newContact = {
      ContactName,
      Email,
    };
    props.addContact(newContact);

    SetContactName("");
    SetEmail("");
  };

  return (
    <div className="contact-header-and-form-container">
      <h1 className="app-header">Contact Manager App</h1>

      <form onSubmit={addContactSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={ContactName}
          onChange={(e) => SetContactName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
