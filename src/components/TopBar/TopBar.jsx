import { BurgerMenu } from 'components/BurgerMenu';
import { ThemePanel } from 'components/ThemePanel';
import { UserProfile } from 'components/UserProfile';

import { Box } from '@mui/material';
import { container } from 'styles';

export const TopBar = () => {
  return (
    <Box sx={container.topBar}>
      <BurgerMenu />
      <ThemePanel />
      <UserProfile />
    </Box>
  );
};
