import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../Contact';

import { ContactsList } from './ContactsList.styled';

export default function ContactList({ visibleContacts }) {
  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
