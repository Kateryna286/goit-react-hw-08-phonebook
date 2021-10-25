import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const styles = {
  label: {
    position: 'relative',
  },

  formsContainer: {
    padding: 15,
  },

  input: {
    width: 200,
    paddingLeft: 30,
    marginBottom: 30,
  },

  icon: {
    position: 'absolute',
    pointerEvents: 'none',
    left: 6,
    bottom: 33,
  },
};

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (items.some(item => item.name === name)) {
      alert(`${name} already exist in contact list`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div style={styles.formsContainer}>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>
          <i style={styles.icon}>
            <FaUser />
          </i>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Name"
          />
        </label>
        <label style={styles.label}>
          <i style={styles.icon}>
            <BsFillTelephoneFill />
          </i>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            style={styles.input}
            placeholder="Phonenumber"
          />
        </label>
        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    </div>
  );
}
