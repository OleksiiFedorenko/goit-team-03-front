import { ThemePanel } from 'components/ThemePanel';
import { UserProfile } from 'components/UserProfile';

import { Container } from '@mui/material';
import { container } from 'styles';

import { TopBarWrapper } from './TopBar.styled';

export const TopBar = () => {
  return (
    <Container sx={container.topBar}>
      <TopBarWrapper>
        <ThemePanel />
        <UserProfile />
      </TopBarWrapper>
    </Container>
  );
};
