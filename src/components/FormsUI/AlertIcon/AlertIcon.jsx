import React from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from 'components/Icons';

const StyledAlertIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28px',
  height: '28px',
  background: theme.palette.primary.main,
  borderRadius: '4px',

  '& svg': {
    stroke: theme.palette.primary.main,
    fill: 'none',
    '&:hover': {
      stroke: theme.palette.primary.main,
    },
  },
}));

const AlertIcon = () => {
  return (
    <StyledAlertIconContainer>
      <Icon id="alert" />
    </StyledAlertIconContainer>
  );
};
export default AlertIcon;
