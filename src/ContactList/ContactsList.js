import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { contactsSelectors, contactsOperations } from 'Redux/contacts';
import './ContactList.css';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <ul className="contactsList">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="item">
            <span className="itemText">
              <span className="itemName">{name}:</span>
              <span className="itemNum">{number}</span>
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
