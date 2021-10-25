import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = { name, number };

    dispatch(addContactsRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactsSuccess(data));
    } catch (error) {
      dispatch(addContactsError(error));
    }
  };

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

const contactsOperations = {
  getContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
