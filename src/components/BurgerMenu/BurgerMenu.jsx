import React, { useState, useEffect } from 'react';
import { SideBar } from 'components/SideBar';
import { Icon } from 'components/Icons';

import { Box, Button, Drawer } from '@mui/material';
import { button, container, icon } from 'styles';

export const BurgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1440) {
      setMenuVisible(false);
    }
  }, [windowWidth]);

  return (
    windowWidth <= 1440 && (
      <Box sx={{ mr: 'auto' }}>
        <Button onClick={toggleMenu} sx={button.burgerMenu}>
          <Icon id={'burger-menu'} sx={icon.burgerMenu} />
        </Button>
        <Drawer anchor="left" open={menuVisible} onClose={toggleMenu}>
          <SideBar contStyles={container.sideBar} />
        </Drawer>
      </Box>
    )
  );
};
