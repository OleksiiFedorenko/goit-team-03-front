import { logout } from 'store/auth/operations';
import { useDispatch } from 'react-redux';

import { Icon } from 'components/Icons';
import { Button } from '@mui/material';
import { button, icon } from 'styles';

export const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(logout())}
      variant="text"
      sx={button.logOut}
      text={'Logout'}
    >
      <Icon id={'login'} sx={icon.LogOut } />
      Logout
    </Button>
  );
};
