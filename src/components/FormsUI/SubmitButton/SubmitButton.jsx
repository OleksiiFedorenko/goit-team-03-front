import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
//import { Icon } from 'components/Icons';
import PlusIcon from './PlusIcon';

const SubmitButton = ({ children, ...otherProps }) => {
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
    <Button startIcon={<PlusIcon />} {...configButton}>
      <span {...typographyProps}>{children}</span>
    </Button>
  );
};
export default SubmitButton;
