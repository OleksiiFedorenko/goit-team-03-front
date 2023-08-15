import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getLogin, fetchCurrentUser } from 'store/auth/operations';
import { setRefreshToken, setAccessToken } from 'store/auth/authSlice';

import {
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Box,
} from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useFormik } from 'formik';
import { form } from '../../styles';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/^[^@]+@[^@]+\..+$/, 'email must be a valid email')
    .required(),
  password: yup.string().required(),
});

export const AuthFormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
    dispatch(setRefreshToken(refreshToken));
    dispatch(fetchCurrentUser());
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    dispatch(getLogin(values));
    setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormControl onSubmit={formik.handleSubmit} sx={form.form} component="form">
      {formik.touched.email && formik.errors.email ? (
        <Box component="div" sx={form.error}>
          {formik.errors.email.toWellFormed()}
        </Box>
      ) : null}

      <TextField
        name="email"
        variant="outlined"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        fullWidth
        color="input"
        inputProps={{
          style: { color: '#FFF' },
        }}
        sx={form.input}
      />

      {formik.touched.password && formik.errors.password ? (
        <Box component="div" sx={form.error}>
          {formik.errors.password}
        </Box>
      ) : null}

      <OutlinedInput
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Create a password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        onBlur={formik.handleBlur}
        fullWidth
        color="input"
        sx={form.input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              sx={form.icon}
            >
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        }
      />

      <Button
        color="button"
        variant="contained"
        fullWidth
        type="submit"
        sx={form.button}
      >
        Log In Now
      </Button>
    </FormControl>
  );
};
