import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
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
};
