import React from 'react';
import Icons from './sprite.svg';
import { SvgIcon } from '@mui/material';

export const Icon = ({ id, sx }) => {
  return (
    <SvgIcon component="svg" sx={sx}>
      <use href={Icons + '#icon-' + id}></use>
    </SvgIcon>
  );
};
