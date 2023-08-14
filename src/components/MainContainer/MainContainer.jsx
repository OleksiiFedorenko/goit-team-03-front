import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Loader} from '../Loader/Loader';
import { Container } from '@mui/material';
import { container } from 'styles';
import bgImg from 'images/backgrounds.json';
import { selectBoard} from 'store/boards/selectors';

export const MainContainer = () => {
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
    <Container sx={{...container.layout, ...bgImage}} >
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container >
  );
};
