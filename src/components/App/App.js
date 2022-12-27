import { ToastContainer } from 'react-toastify';
import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <div>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
