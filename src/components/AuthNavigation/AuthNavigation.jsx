import { Link } from 'react-router-dom';
import s from '../../components/AuthNavigation/AuthNavigation.module.css';
export const AuthNavigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="/register" className={s.link}>
          Registaration
        </Link>
      </li>
      <li>
        <Link to="/login" className={s.link}>
          Login
        </Link>
      </li>
    </ul>
  );
};
