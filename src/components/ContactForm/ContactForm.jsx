import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const stateFunctions = {
      name: setName,
      number: setNumber,
    };

    stateFunctions[name]?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor={nameInputId}>
        <p className={styles.labelText}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          autoComplete="off"
          required
          pattern="^[A-Za-z\- ']+$"
        />
      </label>
      <label htmlFor={numberInputId}>
        <p className={styles.labelText}>Number</p>
        <input
          className="phoneNumberInput"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
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
};
