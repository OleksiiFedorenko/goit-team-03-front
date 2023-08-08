import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
// import { Icon } from 'components/Icons';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
  const iconStyle = {
    fill: 'white',
    fontSize: '28px',
  };
  return (
    <Button startIcon={<AddBoxIcon style={iconStyle} />} {...configButton}>
      <span {...typographyProps}>{children}</span>
    </Button>
  );
};
export default SubmitButton;
