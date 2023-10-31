import styles from './ContectListItem.module.css';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
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
};
