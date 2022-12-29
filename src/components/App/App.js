import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
