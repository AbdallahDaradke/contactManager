import React from "react";
import "./css/ContactList.css";
import ContactItem from "./ContactItem";
function ContactList(props) {
  const handleDelete = (index) => {
    const updatedContacts = [...props.contact];
    updatedContacts.splice(index, 1);
    props.setContact(updatedContacts);
  };

  return (
    <div className="contact-list-container">
      <h2 className="contact-list-header">Contacts</h2>
      <ul>
        {props.contact.map((singleContact, index) => (
          <ContactItem
            singleContact={singleContact}
            key={index}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        ))}
      </ul>

      {/* <div className="contact-list">
        <div className="contact-info">
          <p className="contact-para">ContactName:</p>
          <p className="contact-para">Email:</p>
        </div>

      </div> */}
    </div>
  );
}

export default ContactList;
