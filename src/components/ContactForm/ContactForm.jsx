import { nanoid } from "nanoid";
import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.scss";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleAddContact = (submitEvent) => {
    submitEvent.preventDefault();

    const id = nanoid();
    const { name, number } = this.state;

    this.setState({
      number: "",
      name: "",
    });

    this.props.addContact({ id, name, number });
  };

  whenContactFormChange = (key) => {
    if (!["name", "number"].includes(key)) {
      throw `Wrong key for the form, key: ${key}`;
    }

    return (event) => {
      this.setState({
        [key]: event.target.value,
      });
    };
  };

  render() {
    return (
      <form
        onSubmit={(event) => this.handleAddContact(event)}
        className={styles.form}
      >
        <h1>Phonebook</h1>
        <label>
          Name:
          <input
            value={this.state.name}
            onChange={this.whenContactFormChange("name")}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number:
          <input
            value={this.state.number}
            onChange={this.whenContactFormChange("number")}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
