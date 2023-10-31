import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            onDeleteContact={onDeleteContact}
            {...contact}
          />
        ))}
      </ul>
    );
  }
}
