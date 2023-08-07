import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getLogin } from 'store/auth/operations';
import { Button, ThemeProvider, TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { lightTheme } from '../../themes/themes'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from 'formik';
import style from './AuthFormRegister.module.css'

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
    alert(JSON.stringify(values, null, 2));
    dispatch(getLogin(values))
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
    <ThemeProvider theme={lightTheme}>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        {formik.touched.name && formik.errors.name ? (
          <div className={style.error}>{formik.errors.name}</div>
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
          fullWidth
          inputProps={{
            style: { color: 'white' },
          }}
          sx={{
            marginBottom: '14px',
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
        }}
      />
        {formik.touched.email && formik.errors.email ? (
          <div className={style.error}>{formik.errors.email.toWellFormed()}</div>
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
          inputProps={{
            style: { color: 'white' },
          }}
          sx={{
            marginBottom: '14px',
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
        }}
      />
        {formik.touched.password && formik.errors.password ? (
          <div className={style.error}>{formik.errors.password}</div>
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
          inputProps={{
            style: { color: 'white' },
          }}
          sx={{
            marginBottom: '24px',
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BEDBB0",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end" style={{color: '#FFF'}}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register Now
        </Button>
      </form>
    </ThemeProvider>
  );
}