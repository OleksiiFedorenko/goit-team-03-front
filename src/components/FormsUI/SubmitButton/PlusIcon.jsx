import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from 'components/Icons';
import { icon } from 'styles';

const StyledPlusIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background.boxPlus,
  width: '28px',
  height: '28px',
  borderRadius: '4px',
}));

const PlusIcon = () => {
  return (
    <StyledPlusIconContainer>
      <Icon id="plus" sx={icon.svgEditColumnAdd} />
    </StyledPlusIconContainer>
  );
};
export default PlusIcon;
