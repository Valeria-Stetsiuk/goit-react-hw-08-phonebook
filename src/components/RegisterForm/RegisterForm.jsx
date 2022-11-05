import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { register } from '../../redux/auth/auth-operations';
import s from '../../components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <TextField
            label="Name"
            className={s.input}
            variant="standard"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <TextField
            label="Email"
            className={s.input}
            variant="standard"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <TextField
            label="Password"
            className={s.input}
            variant="standard"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <Button variant="text" type="submit" className={s.buttonRegister}>
          Register
        </Button>
      </form>
    </div>
  );
};
