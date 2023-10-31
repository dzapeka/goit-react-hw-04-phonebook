import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log('update storage');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContactById = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onContactFormSubmit = ({ name, number }) => {
    const isExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, { name, number, id: nanoid() }],
    });
  };

  onFilterChange = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={contact => this.onContactFormSubmit(contact)}
          />

          <h2>Contacts</h2>
          <Filter onFilterChange={value => this.onFilterChange(value)} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContactById}
          />
        </div>
      </>
    );
  }
}
