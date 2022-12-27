import React from 'react';
import Contact from '../Contact';
import { ContactsList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { contacts, filterValue } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsList = useSelector(contacts);
  const filter = useSelector(filterValue);
  const visibleContacts = contactsList.contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    return contactName.includes(filter);
  });

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onChangeResult={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ContactsList>
  );
}
