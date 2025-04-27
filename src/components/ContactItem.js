import React, { useEffect } from "react";

function ContactItem({ singleContact }) {
  return (
    <li>
      <strong>{singleContact.ContactName}</strong> — Height:
      {singleContact.Email}
    </li>
  );
}

export default ContactItem;
