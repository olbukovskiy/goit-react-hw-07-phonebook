import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Number, Button, TextField } from './Contact.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
