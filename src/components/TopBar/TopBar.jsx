import React from 'react';
import { ThemePanel } from 'components/ThemePanel';
import { UserProfile } from 'components/UserProfile';
import { TopBarWrapper } from './TopBar.styled';

export const TopBar = ({ name, avatar }) => {
  return (
    <TopBarWrapper>
      <ThemePanel />
      <UserProfile name={name} avatar={avatar} />
    </TopBarWrapper>
  );
};
