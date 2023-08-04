import React from 'react';
import { Logo } from 'components/Logo';
import { Boards } from 'components/Boards';
import { TaskProHelper } from 'components/TaskProHelper';
import { LogOut } from 'components/LogOut';
import { SideBarWrapper } from './SideBar.styled';

export const SideBar = ({ dispatch }) => {
  return (
    <SideBarWrapper>
      <Logo />
      <Boards />
      <TaskProHelper />
      <LogOut dispatch={dispatch} />
    </SideBarWrapper>
  );
};
