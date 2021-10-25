import Form from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactsList from '../components/ContactList/ContactList';

export default function ContactsView() {
  const styles = {
    container: {
      marginBottom: 40,
      marginTop: 40,
      display: 'flex',
      gap: 120,
    },
    contactsContainer: {
      padding: 15,
    },
  };

  return (
    <div style={styles.container}>
      <Form />

      <div style={styles.contactsContainer}>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
