import { Logo } from 'components/Logo';
import { BoardNav } from 'components/BoardNav';
import { HelpBanner } from 'components/HelpBanner';
import { LogOut } from 'components/LogOut';

import { Box, Stack } from '@mui/material';
import { container } from 'styles';

export const SideBar = ({ contStyles }) => {
  return (
    <Box sx={contStyles}>
      <Stack sx={container.sideBarTop}>
        <Logo />
        <BoardNav />
      </Stack>
      <Box>
        <HelpBanner />
        <LogOut />
      </Box>
    </Box>
  );
};
