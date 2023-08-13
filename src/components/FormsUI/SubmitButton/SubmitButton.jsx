import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import PlusIcon from './PlusIcon';

const Testbutton = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };
  const typographyProps = {
    style: {
      textTransform: 'none',
    },
  };

  return (
    <Button type="submit" startIcon={<PlusIcon />} {...configButton}>
      <span {...typographyProps}>{children}</span>
    </Button>
  );
};
export default Testbutton;
