import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from 'components/TopBar';
import { SideBar } from 'components/SideBar';
import { Container, Box } from '@mui/material';
import { container } from 'styles';
import { Loader } from 'components/Loader/Loader';
import bgImg from 'images/backgrounds.json';
import { selectBoard} from 'store/boards/selectors';

export const TasksLayout = () => {
  const board = useSelector(selectBoard);
  const bgURL  = board.background === 0 ? "" :
  bgImg.find(bg => bg.id === board.background);
  const bgImage = {
    background: {
      zeroUp: `url("${bgURL?.retina_m}") no-repeat 50% 50%`,
      tablet: `url("${bgURL?.retina_t}") no-repeat 50% 50%`,
      desktop: `ull("${bgURL?.retina_d}" no-repeat 50% 50%)`
    },
    backgroundSize: "cover"
  }
  return (
    <Container sx={{...container.layout, ...bgImage}}>
      <header>
        <TopBar />
      </header>
      <Box
        component="main"
        style={{ position: 'relative' }}
        sx={container.main}
      >
        <SideBar contStyles={container.sideBarDesktop} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
