import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import s from '../../components/ContactsAuthMenu/ContactsAuthMenu.module.css';

export const ContactsAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <p className={s.pretitle}>{`Welcome ${name}!`}</p>
      <Button
        className={s.buttonLogOut}
        variant="text"
        type="submit"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </>
  );
};
