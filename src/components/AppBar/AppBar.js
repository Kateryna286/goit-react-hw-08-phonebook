import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import AuthNav from '../navigation/AuthNav';
import UserMenu from '../../components/UserMenu/UserMenu';
import styles from './Appbar.module.css';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
