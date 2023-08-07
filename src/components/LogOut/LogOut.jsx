import { logout } from 'store/auth/operations';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import { button } from 'styles';

export const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(logout())}
      variant="text"
      sx={button.logOut}
    >
      Log out
    </Button>
  );
};
