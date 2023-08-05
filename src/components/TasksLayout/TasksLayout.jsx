import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from 'components/TopBar';
import { SideBar } from 'components/SideBar';

import { Container } from '@mui/material';
import { container } from 'styles';

export const TasksLayout = () => {
  return (
    <Container sx={container.layout}>
      <header>
        <TopBar />
      </header>
      <main>
        <SideBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
