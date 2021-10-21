import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const AuthNav = () => {
  return (
    <nav className="authnav">
      <NavLink
        exact
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        exact
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
