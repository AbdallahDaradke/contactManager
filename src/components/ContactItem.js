import React, { useEffect } from "react";

function ContactItem({ singleContact, onDelete }) {
  return (
    <li>
      <strong>{singleContact.ContactName}</strong> - {singleContact.Email}
      <button className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
