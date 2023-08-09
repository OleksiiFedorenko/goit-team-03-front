import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from 'components/TopBar';
import { SideBar } from 'components/SideBar';

import { Container, Box } from '@mui/material';
import { container } from 'styles';
import { Loader } from 'components/Loader/Loader';

export const TasksLayout = () => {
  return (
    <Container sx={container.layout}>
      <header>
        <TopBar />
      </header>
      <Box component="main" sx={container.main}>
        <SideBar contStyles={container.sideBarDesktop} />
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
