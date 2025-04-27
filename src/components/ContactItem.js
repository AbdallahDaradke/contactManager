import React from "react";

function ContactItem({ singleContact, key }) {
  return (
    <li key={key}>
      <strong>{singleContact.ContactName}</strong> — Height:
      {singleContact.Email}
    </li>
  );
}

export default ContactItem;
