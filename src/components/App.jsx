import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return JSON.parse(storedContacts) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactById = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onContactFormSubmit = ({ name, number }) => {
    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, { name, number, id: nanoid() }]);
  };

  const onFilterChange = value => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={contact => onContactFormSubmit(contact)} />

        <h2>Contacts</h2>
        <Filter onFilterChange={value => onFilterChange(value)} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContactById}
        />
      </div>
    </>
  );
};

export default App;
