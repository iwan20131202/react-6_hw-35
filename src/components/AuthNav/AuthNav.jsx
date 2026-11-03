import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Register</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Log In</NavLink>
    </div>
  );
};
