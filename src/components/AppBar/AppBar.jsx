import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import Container from '@mui/material/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { ContactsAuthMenu } from 'components/ContactsAuthMenu/ContactsAuthMenu.jsx';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '3px solid #1F3349',
        }}
      >
        <Navigation />
        {token ? <ContactsAuthMenu /> : <AuthNavigation />}
      </Container>
    </header>
  );
};
