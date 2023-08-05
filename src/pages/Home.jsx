import { Link } from 'react-router-dom';

import { Container, Box, SvgIcon } from '@mui/material';
import { background, container, image, logo } from 'styles';

import css from './Home.module.css';
import { TiFlash } from 'react-icons/ti';
import { Icon } from 'components/Icons';
import user from 'images/start-img.png';

const Home = () => {
  return (
    <Container sx={background.gradient}>
      <Box sx={container.welcome}>
        <Box
          component="img"
          sx={image.welcome}
          src={user}
          alt="User greeting avatar"
        />
        <Box sx={logo.welcomeContainer}>
          {/* <SvgIcon>{Icon('lightning')}</SvgIcon> */}
          <div className={css['app-icon']}>
            <TiFlash color="#fff" size={25} />
          </div>
          <h1 className={css.title}>Task Pro</h1>
        </Box>
        <p className={css.descr}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>

        <ul className={css['home-nav']}>
          <li className={css.link}>
            <Link to="/auth/register">Registration</Link>
          </li>
          <li className={css.link}>
            <Link to="/auth/login">Log in</Link>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default Home;
