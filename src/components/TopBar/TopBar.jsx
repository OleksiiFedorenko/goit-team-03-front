import { BurgerMenu } from 'components/BurgerMenu';
import { ThemePanel } from 'components/ThemePanel';
import { UserProfile } from 'components/UserProfile';

import { Box } from '@mui/material';
import { container } from 'styles';

import { TopBarWrapper } from './TopBar.styled';

export const TopBar = () => {
  return (
    <Box sx={container.topBar}>
      <TopBarWrapper>
        <BurgerMenu />
        <ThemePanel />
        <UserProfile />
      </TopBarWrapper>
    </Box>
  );
};
