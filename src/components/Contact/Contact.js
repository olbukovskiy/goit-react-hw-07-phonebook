import React from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contactsApi';

import { ListItem, Number, Button, TextField } from './Contact.styled';

export default function Contact({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
  };
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
