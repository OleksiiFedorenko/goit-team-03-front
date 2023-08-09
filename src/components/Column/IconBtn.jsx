import React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Icon } from 'components/Icons';

const IconBtnRoot = styled(ButtonBase)(({ theme }) => ({
  padding: 0,
  margin: 0,
  transition: 'color 0.3s',
  '&:hover': {
    color: `${theme.palette.text.secondary}`,
  },
}));

const CustomIcon = styled(Icon)(({ theme }) => ({
  stroke: `${theme.palette.text.primary}`,
}));

const IconBtn = ({ onClick, iconId }) => {
  return (
    <IconBtnRoot onClick={onClick}>
      <CustomIcon id={iconId} />
    </IconBtnRoot>
  );
};

export default IconBtn;
