import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'Redux/contacts';
import './Filter.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <label>
        <span className="filterText">Filter</span>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(contactsActions.updateFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
