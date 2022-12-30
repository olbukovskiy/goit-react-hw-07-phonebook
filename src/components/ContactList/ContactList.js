import React from 'react';
import { useSelector } from 'react-redux';

import Contact from '../Contact';
import { selectVisibleContacts } from 'redux/selectors';

import { ContactsList } from './ContactsList.styled';

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
