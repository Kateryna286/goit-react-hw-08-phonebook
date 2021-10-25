import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
