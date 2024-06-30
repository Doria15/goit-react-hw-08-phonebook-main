import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.usermail}>{user.email}</span>
      </p>
      <button
        type="button"
        className={css.logoutBtn}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
