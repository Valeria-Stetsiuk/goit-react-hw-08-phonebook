import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from '../../components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email:
          <TextField
            variant="standard"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
            required
          />
        </label>
        <label className={s.label}>
          Password:
          <TextField
            variant="standard"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
            required
          />
        </label>
        <Button variant="text" type="submit" className={s.buttonLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};
