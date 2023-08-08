import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getRegistration } from 'store/auth/operations';
import { Button, TextField, OutlinedInput, InputAdornment, IconButton, Box, FormControl } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useFormik } from 'formik';
import { form } from '../../styles'

const validationSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const AuthFormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();

  const onSubmit = (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2));
    dispatch(getRegistration(values))
    setSubmitting(false);
  }

  const initialValues = {
    name: '',
    email: '', 
    password: '', 
  } 

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormControl onSubmit={formik.handleSubmit} sx={form.form} component='form'>
      {formik.touched.name && formik.errors.name ? (
        <Box sx={form.error}>{formik.errors.name}</Box>
      ) : null}

      <TextField
        name="name"
        type="text"
        variant="outlined"
        placeholder="Enter your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        color='input'
        fullWidth
        sx={form.input}
        inputProps={{
          style: { color: 'white' },
        }}
    />

      {formik.touched.email && formik.errors.email ? (
        <Box component='div' sx={form.error}>{formik.errors.email}</Box>
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
        inputProps={{
          style: { color: 'white' },
        }}
        color='input'
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        onBlur={formik.handleBlur}
        fullWidth
        color='input'
        sx={form.input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end" sx={form.icon} >
              {showPassword ? <RemoveRedEyeOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button 
        color="button" 
        variant="contained"
        fullWidth type="submit"
        sx={form.button}
      >
        Register Now
      </Button>
    </FormControl>
  );
}