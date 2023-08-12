import React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Icon } from 'components/Icons';
import { icon } from 'styles';

const IconBtnRoot = styled(ButtonBase)(({ theme }) => ({
  padding: 0,
  margin: 0,

  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const IconBtn = ({ onClick, iconId }) => {
  return (
    <IconBtnRoot onClick={onClick}>
      <Icon id={iconId} sx={icon.svgCardBtnList} />
    </IconBtnRoot>
  );
};

export default IconBtn;
