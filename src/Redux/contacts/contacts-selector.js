import { createSelector } from 'reselect';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const isLoading = state => state.contacts.loading;

//мемоизированный селектор
const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getItems,
  getFilter,
  isLoading,
  getVisibleContacts,
};

export default contactsSelectors;
