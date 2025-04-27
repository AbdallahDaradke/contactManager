import React, { useState } from "react";

function ContactForm(props) {
  const [ContactName, SetContactName] = useState("");
  const [Email, SetEmail] = useState("");

  const addContactSubmit = (e) => {
    let newContact = {
      ContactName,
      Email,
    };
  };

  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
