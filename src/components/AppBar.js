import { useSelector } from 'react-redux';
import Navigation from 'components/navigation/Navigation';
import AuthNav from 'components/navigation/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelectors } from 'redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 80,
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
