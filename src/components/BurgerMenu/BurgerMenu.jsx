import React, { useState, useEffect } from 'react';
import { Logo } from 'components/Logo';
import { BoardNav } from 'components/BoardNav';
import { HelpBanner } from 'components/HelpBanner';
import { LogOut } from 'components/LogOut';
import { Icon } from 'components/Icons';

import { Box, Button, Drawer } from '@mui/material';
import { button, container } from 'styles';

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
          <Icon id={'burger-menu'}></Icon>
        </Button>
        <Drawer anchor="left" open={menuVisible} onClose={toggleMenu}>
          <Box sx={container.BurgerMenu}>
            <Box>
              <Box>
                <Logo />
                <BoardNav />
              </Box>
            </Box>
            <Box sx={{ width: 212 }}>
              <HelpBanner />
              <LogOut />
            </Box>
          </Box>
        </Drawer>
      </Box>
    )
  );
};
