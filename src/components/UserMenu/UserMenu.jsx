import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())} className={styles.button}>
        Logout
      </button>
    </div>
  );
};
