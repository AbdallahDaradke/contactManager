import React, { useState } from "react";

function ContactForm(props) {
  const [ContactName, SetContactName] = useState("");
  const [Email, SetEmail] = useState("");

  const addContactSubmit = (e) => {
    let newContact = {
      ContactName,
      Email,
    };
    props.addContact(newContact);

    SetContactName("");
    SetEmail("");
  };

  return (
    <div>
      <form onSubmit={addContactSubmit}>
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
