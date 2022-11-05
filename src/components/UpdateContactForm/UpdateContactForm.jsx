import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateContact } from 'redux/contacts/contactsOperations';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const UpdateContactForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleInput = ({ target: { value, name } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contact, name, number }));
    closeForm();
  };

  return (
    <>
      <TextField
        label="Name"
        size="small"
        type="text"
        name="name"
        value={name}
        onChange={handleInput}
      />
      <TextField
        label="Phone"
        size="small"
        type="text"
        name="number"
        value={number}
        onChange={handleInput}
      />
      <Button variant="outlined" size="small" type="submit">
        Save
      </Button>
    </>
  );
};

UpdateContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  closeForm: PropTypes.func.isRequired,
};
