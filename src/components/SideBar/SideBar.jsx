import React from 'react';
import { Logo } from 'components/Logo';
import { BoardNav } from 'components/BoardNav';
import { HelpBanner } from 'components/HelpBanner';
import { LogOut } from 'components/LogOut';

import { Box } from '@mui/material';
import { container } from 'styles';

export const SideBar = () => {
  return (
    <Box sx={container.sideBar}>
      <Box sx={container.sideBarInner}>
        <Box>
          <Logo />
          <BoardNav />
        </Box>
        <Box>
          <HelpBanner />
          <LogOut />
        </Box>
      </Box>
    </Box>
  );
};
