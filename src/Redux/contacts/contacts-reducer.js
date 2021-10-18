import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsSuccess,
  getContactsRequest,
  getContactsError,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  updateFilter,
} from './contacts-actions';

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [addContactsError]: (_, { payload }) => payload.message,
  [getContactsError]: (_, { payload }) => payload.message,
  [deleteContactsError]: (_, { payload }) => payload.message,
  [getContactsRequest]: () => null,
  [addContactsRequest]: () => null,
  [deleteContactsRequest]: () => null,
  [updateFilter]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
