import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';
//import { useTheme } from '@mui/material';

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  //const theme = useTheme();
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };
  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield} />;
};
export default TextFieldWrapper;
