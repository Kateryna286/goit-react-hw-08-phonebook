import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, updateFilter } from 'redux/contacts';
import { FaSearch } from 'react-icons/fa';

const styles = {
  label: {
    position: 'relative',
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
    bottom: 0,
  },
};

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label style={styles.label}>
      <i style={styles.icon}>
        <FaSearch />
      </i>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(updateFilter(e.target.value))}
        style={styles.input}
      />
    </label>
  );
}
