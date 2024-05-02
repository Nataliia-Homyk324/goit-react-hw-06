import contactsArray from '../../../contacts.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook </h1>
        <ContactForm />
        <SearchBox />
        <ContactList contactList={contactsArray} />
      </div>
    </>
  );
}
