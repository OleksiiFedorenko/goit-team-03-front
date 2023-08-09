import React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Icon } from 'components/Icons';

const IconBtnRoot = styled(ButtonBase)(({ theme }) => ({
  padding: 0,
  margin: 0,
  '& svg': {
    stroke: theme.palette.text.sideSecond,
    transition: 'stroke 0.3s',
  },

  '&:hover': {
    color: theme.palette.text.sideSecond,
    '& svg': {
      stroke: theme.palette.text.primary,
    },
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const IconBtn = ({ onClick, iconId }) => {
  return (
    <IconBtnRoot onClick={onClick}>
      <Icon id={iconId} />
    </IconBtnRoot>
  );
};

export default IconBtn;
