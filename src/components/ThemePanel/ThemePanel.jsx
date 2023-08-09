import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';
import { updateTheme } from 'store/auth/operations';

import { Box, Button, Menu, MenuItem } from '@mui/material';
import { button } from 'styles';

export const ThemePanel = () => {
  const dispatch = useDispatch();
  const userTheme = useSelector(selectTheme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = theme => {
    dispatch(updateTheme(theme));
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="text"
        sx={button.theme}
        id="theme-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        // endIcon={<put icon component here />}
      >
        Theme
      </Button>
      <Menu
        sx={button.themeMenu}
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
      >
        <MenuItem
          sx={button.themeItem}
          selected={userTheme === 'light'}
          onClick={() => {
            handleClick('light');
          }}
        >
          Light
        </MenuItem>
        <MenuItem
          sx={button.themeItem}
          selected={userTheme === 'dark'}
          onClick={() => {
            handleClick('dark');
          }}
        >
          Dark
        </MenuItem>
        <MenuItem
          sx={button.themeItem}
          selected={userTheme === 'violet'}
          onClick={() => {
            handleClick('violet');
          }}
        >
          Violet
        </MenuItem>
      </Menu>
    </Box>
  );
};
