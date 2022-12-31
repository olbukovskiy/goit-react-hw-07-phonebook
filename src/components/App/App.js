import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';

import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Filter from '../Filter';

import { fetchContacts } from 'redux/operations';
import { selectErrorValue, selectIsLoading } from 'redux/selectors';

import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const error = useSelector(selectErrorValue);
  const isLoading = useSelector(selectIsLoading);

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
      {isLoading && !error && (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
      <ToastContainer />
    </div>
  );
}
