import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { ContactsAuthMenu } from 'components/ContactsAuthMenu/ContactsAuthMenu.jsx';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Navigation />
      {token ? <ContactsAuthMenu /> : <AuthNavigation />}
    </>
  );
};
