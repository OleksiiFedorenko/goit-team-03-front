import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from 'components/TopBar';
import { SideBar } from 'components/SideBar';
import { Container, Box } from '@mui/material';
import { container } from 'styles';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TasksLayout = () => {
  return (
    <Container sx={container.layout}>
      <header>
        <TopBar />
      </header>
      <Box
        component="main"
        style={{ position: 'relative' }}
        sx={container.main}
      >
        <SideBar contStyles={container.sideBarDesktop} />
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={3000}
        />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
