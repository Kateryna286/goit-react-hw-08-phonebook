import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/getContactRequest');
export const getContactsSuccess = createAction('contacts/getContactSuccess');
export const getContactsError = createAction('contacts/getContactError');

export const addContactsRequest = createAction('contacts/addContactRequest');
export const addContactsSuccess = createAction('contacts/addContactSuccess');
export const addContactsError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactsError = createAction('contacts/deleteContactError');

export const updateFilter = createAction('contacts/UpdateFilter');
