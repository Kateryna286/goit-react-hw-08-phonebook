import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const styles = {
  itemText: {
    marginRight: 40,
    display: 'flex',
    justifyContent: 'space-between',
    width: 400,
  },

  item: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  itemName: {
    fontWeight: 600,
    marginRight: 15,
  },

  itemNum: {
    marginRight: 30,
  },
};

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} style={styles.item}>
            <span style={styles.itemText}>
              <span style={styles.itemName}>{name}:</span>
              <span style={styles.itemNum}>{number}</span>
            </span>

            <button
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
              className="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {isLoading && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
}
