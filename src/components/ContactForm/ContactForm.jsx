import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label htmlFor={this.nameInputId}>
          <p className={styles.labelText}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            autoComplete="off"
            required
            pattern="^[A-Za-z\- ']+$"
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <p className={styles.labelText}>Number</p>
          <input
            className="phoneNumberInput"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            autoComplete="off"
            required
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="xxx-xx-xx"
            maxLength="9"
          />
        </label>
        <button type="submit" className={styles.addContactBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
