import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getLogin } from 'store/auth/operations';
import { Button, TextField, OutlinedInput, InputAdornment, IconButton, FormControl, Box } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from 'formik';
import { form } from '../../styles'

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const AuthFormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();

  const onSubmit = (values, {setSubmitting}) => {
    alert(JSON.stringify(values, null, 2));
    dispatch(getLogin(values))
    setSubmitting(false);
  }

  const initialValues = {
    email: '', 
    password: '', 
  } 

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormControl 
      onSubmit={formik.handleSubmit} 
      sx={form.form} 
      component='form'
    >

      {formik.touched.email && formik.errors.email ? (
        <Box component='div' sx={form.error}>{formik.errors.email.toWellFormed()}</Box>
      ) : null}

      <TextField
        name="email"
        type="email"
        variant="outlined"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        fullWidth
        color='inputForm'
        inputProps={{
          style: { color: '#FFF' },
        }}
        sx={form.input}
      />

      {formik.touched.password && formik.errors.password ? (
        <Box component='div' sx={form.error}>{formik.errors.password}</Box>
      ) : null}

      <OutlinedInput
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Create a password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        fullWidth
        color='inputForm'
        inputProps={{
          style: { color: '#FFF' },
        }}
        sx={form.input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end" style={{color: '#FFF'}}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <Button 
        color="buttonForm" 
        variant="contained" 
        fullWidth 
        type="submit" 
        sx={form.button}
      >
        Log In Now
      </Button>

    </FormControl>
  );
}