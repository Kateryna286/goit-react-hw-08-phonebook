import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../Redux/contacts/contacts-actions';
import * as contactsSelectors from '../Redux/contacts/contacts-selector';

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
