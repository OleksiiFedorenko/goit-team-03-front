import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { button, container } from 'styles';

export const AuthLayout = () => {
  return (
    <Container sx={container.gradient}>
      <Box sx={container.auth}>
        <List sx={button.authTabList}>
          <ListItem sx={button.authTabItem}>
            <ListItemButton
              component={NavLink}
              to="register"
              sx={button.authTabBtn}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: '#FFF',
                    }
                  : null
              }
            >
              <ListItemText
                sx={{ p: 0, m: 0 }}
                primary="Registration"
                disableTypography
              />
            </ListItemButton>
          </ListItem>

          <ListItem sx={button.authTabItem}>
            <ListItemButton
              component={NavLink}
              to="login"
              sx={button.authTabBtn}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: '#FFF',
                    }
                  : null
              }
            >
              <ListItemText
                sx={{ p: 0, m: 0 }}
                primary="Log in"
                disableTypography
              />
            </ListItemButton>
          </ListItem>
        </List>

        <ToastContainer theme="colored" />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
