import { logout } from 'store/auth/operations';
import { useDispatch } from 'react-redux';

import { Icon } from 'components/Icons';
import { Button } from '@mui/material';
import { button, icon } from 'styles';
import { useState } from 'react';
import { useTheme } from '@mui/material';

export const LogOut = () => {
  const dispatch = useDispatch();
  const [isBtnHover, setIsBtnHover] = useState(false);
  const { palette } = useTheme();
  return (
    <Button
      onClick={() => dispatch(logout())}
      variant="text"
      sx={button.logOut}
      onMouseEnter={() => setIsBtnHover(true)}
      onMouseLeave={() => setIsBtnHover(false)}
    >
      <Icon
        id={'login'}
        sx={{
          ...icon.LogOut,
          color: isBtnHover ? palette.icon.logOutHover : palette.icon.logOut,
        }}
      />
      Log out
    </Button>
  );
};
