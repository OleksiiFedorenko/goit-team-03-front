import { Link } from 'react-router-dom';
import { TiFlash } from 'react-icons/ti';
import user from 'images/start-img.png';
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { container, image, logo, text, button, form } from 'styles';
import { Link as MaterialLink } from '@mui/material';
import { Icon } from 'components/Icons';

const WelcomePage = () => {
  return (
    <Container sx={container.gradient}>
      <Box sx={container.welcome}>
        <Box
          component="img"
          sx={image.welcome}
          src={user}
          alt="User greeting avatar"
        />
        <Box sx={logo.welcomeContainer}>
          <Box sx={logo.welcomeIconWrapper}>
            <Box sx={logo.welcomeIconSize}>
              <TiFlash color="#fff" size={'100%'} />
            </Box>
          </Box>
          <Typography component="h1" sx={logo.welcomeText}>
            Task Pro
          </Typography>
        </Box>
        <Typography component="p" sx={text.welcome}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Typography>

        <List sx={button.authGroup}>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/auth/register"
              sx={button.authItem}
            >
              <ListItemText primary="Registration" disableTypography />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/auth/login"
              sx={button.authItem}
            >
              <ListItemText primary="Log in" disableTypography />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={MaterialLink}
              to="https://taskpro-m75b.onrender.com/api/auth/google"
              sx={form.link}
            >
              <Icon id={'google'} sx={{width: '20px'}}/>
              Login with Google
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default WelcomePage;
