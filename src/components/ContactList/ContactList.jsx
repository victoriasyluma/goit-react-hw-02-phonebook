import { nanoid } from "nanoid";
import { Component } from "react";
import PropTypes from "prop-types";

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <div>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button onClick={deleteContact(contact)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
