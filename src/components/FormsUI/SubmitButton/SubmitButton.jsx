import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { styled } from '@mui/system';
import PlusIcon from './PlusIcon';

const StyledButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  paddingTop: '11px',
  paddingBottom: '11px',
  '&:hover': {
    boxShadow: 'none',
  },
}));

const TestButton = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <StyledButton
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleSubmit}
      startIcon={<PlusIcon />}
    >
      {children}
    </StyledButton>
  );
};

export default TestButton;
