import { nanoid } from 'nanoid';
import styles from './Filter.module.css';

export const Filter = ({ onFilterChange }) => {
  const filterInputId = nanoid();

  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <label htmlFor={filterInputId}>
      <p className={styles.labelText}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        id={filterInputId}
        autoComplete="off"
        required
      />
    </label>
  );
};
