import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from 'components/Icons';

const StyledIcon = styled(Icon)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '28px',
    height: '28px',
    backgroundColor: 'black',
  },
}));

const PlusIcon = () => {
  return <StyledIcon id="plus" />;
};

export default PlusIcon;
