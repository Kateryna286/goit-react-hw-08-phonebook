import Navigation from '../navigation/Navigation';
import AuthNav from '../navigation/AuthNav';
import styles from './Appbar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
}
