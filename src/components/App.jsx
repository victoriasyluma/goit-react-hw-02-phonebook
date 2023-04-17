import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    const { contacts } = this.state;

    this.setState({
      contacts: [...contacts, contact],
    });
  };

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { contacts } = this.state;

    const filteredContacts = contacts.filter(({ name }) => {
      const { filter } = this.state;

      const filterSanitized = filter.toLocaleLowerCase().trim();
      const nameSanitized = name.toLocaleLowerCase().trim();

      return nameSanitized.includes(filterSanitized);
    });

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>

        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />

        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
