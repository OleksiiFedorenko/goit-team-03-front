import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Container } from '@mui/material';
import { container } from 'styles';

export const MainContainer = () => {
  return (
    <Container sx={container.layout}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
