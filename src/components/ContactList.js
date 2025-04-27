import React from "react";
import "./css/ContactList.css";
import ContactItem from "./ContactItem";
function ContactList(props) {
  return (
    <div className="contact-list-container">
      <h2 className="contact-list-header">Contacts</h2>
      <ul>
        {props.contact.map((singleContact, index) => (
          <ContactItem singleContact={singleContact} key={index} />
        ))}
      </ul>
      {/* <div className="contact-list">
        <div className="contact-info">
          <p className="contact-para">ContactName:</p>
          <p className="contact-para">Email:</p>
        </div>

        <button className="btn">Delete</button>
      </div> */}
    </div>
  );
}

export default ContactList;
