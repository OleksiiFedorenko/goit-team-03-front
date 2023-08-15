import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { button, container } from 'styles';

export const AuthLayout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    setValue(newValue);
  };

  return (
    <Container sx={container.gradient}>
      <Box sx={container.auth}>
        {/* trying to do it tab ways */}

        <Box sx={{ bgcolor: 'white' }}>
          <Tabs value={value} onChange={handleChange} aria-label="auth tabs">
            <Tab
              label="Item One"
              id="simple-tab-0"
              //  { {'aria-controls': "simple-tabpanel-0"}}
            />
            <Tab
              label="Item Two"
              id="simple-tab-1"
              // 'aria-controls'="simple-tabpanel-1"
            />
          </Tabs>
        </Box>
        {/* <CustomTabPanel value={value} index={0}> */}
        <div
          role="tabpanel"
          hidden={value !== 0}
          id="simple-tabpanel-0"
          // aria-labelledby="simple-tab-0"
        >
          {value === 0 && (
            <Box sx={{ p: 3 }}>
              <Typography sx={{ color: 'white' }}>Item One</Typography>
            </Box>
          )}
        </div>
        {/* </CustomTabPanel> */}
        {/* <CustomTabPanel value={value} index={1}> */}
        <div
          role="tabpanel"
          hidden={value !== 1}
          id="simple-tabpanel-1"
          // aria-labelledby="simple-tab-1"
        >
          {value === 1 && (
            <Box sx={{ p: 3 }}>
              <Typography sx={{ color: 'white' }}>Item Two</Typography>
            </Box>
          )}
        </div>
        {/* </CustomTabPanel> */}

        {/* trying to do it tab ways */}
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
