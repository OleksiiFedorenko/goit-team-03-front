import { Logo } from 'components/Logo';
import { BoardNav } from 'components/BoardNav';
import { HelpBanner } from 'components/HelpBanner';
import { LogOut } from 'components/LogOut';

import { Box } from '@mui/material';

export const SideBar = ({ contStyles }) => {
  return (
    <Box sx={contStyles}>
      <Box>
        <Logo />
        <BoardNav />
      </Box>
      <Box>
        <HelpBanner />
        <LogOut />
      </Box>
    </Box>
  );
};
