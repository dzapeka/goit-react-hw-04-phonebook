import React, { Component } from 'react';
import styles from './ContectListItem.module.css';

export class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <>
        <li className={styles.contactListItem}>
          {name}: {number}
          <button
            className={styles.deleteContactBtn}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
