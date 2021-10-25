import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { AiOutlineLogin } from 'react-icons/ai';

import defaultAvatar from './ninja.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#2196f3',
    borderRadius: '50%',
    display: 'inline-block',
    border: 'none',
  },

  icon: {
    color: 'white',
    width: 32,
    height: 32,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Hello, {name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <AiOutlineLogin style={styles.icon} />
      </button>
    </div>
  );
}
