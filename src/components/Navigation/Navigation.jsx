import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import HouseIcon from '@mui/icons-material/House';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import s from '../../components/Navigation/Navigation.module.css';
export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" end>
            <HouseIcon sx={{ fontSize: 40, color: 'rgb(91, 107, 188)' }} />
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="/contacts">
              {' '}
              <ContactEmergencyIcon
                sx={{ fontSize: 40, color: 'rgb(91, 107, 188)' }}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
