import React from 'react';
import Contact from '../Contact';
import { ContactsList } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
}
