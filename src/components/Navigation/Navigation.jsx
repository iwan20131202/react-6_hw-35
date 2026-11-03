import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contacts</NavLink>}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
