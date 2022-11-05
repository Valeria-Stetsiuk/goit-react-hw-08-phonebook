import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from 'redux/auth/auth-operations';

import { selectEmail } from '../../redux/auth/auth-selectors';
import s from '../../components/ContactsAuthMenu/ContactsAuthMenu.module.css';

export const ContactsAuthMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  return (
    <>
      <p className={s.pretitle}>{`Welcome ${email}`}!</p>
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        className={s.buttonLogOut}
      >
        Log Out
      </Button>
    </>
  );
};
