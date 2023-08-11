import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from 'components/Icons';

const StyledPlusIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background.boxPlus,
  width: '28px',
  height: '28px',
  borderRadius: '4px',

  '& svg': {
    stroke: theme.palette.secondary.main,
    '&:hover': {
      stroke: theme.palette.secondary.main,
    },
  },
}));

const PlusIcon = () => {
  return (
    <StyledPlusIconContainer>
      <Icon id="plus" />
    </StyledPlusIconContainer>
  );
};
export default PlusIcon;
