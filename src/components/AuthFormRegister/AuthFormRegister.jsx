import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getRegistration } from 'store/auth/operations';
import { TextField, Button, Grid, ThemeProvider, createTheme } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(10).required(),
});

const style = {
  width: 344,
  borderRadius: 8,
  height: 49,
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#BEDBB0',
      dark: '#cae6bc',
      contrastText: '#161616',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#BEDBB0',
          },
          '&:hover fieldset': {
            borderColor: '#BEDBB0',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#BEDBB0',
          },
          '& input': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export const AuthFormRegister = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(getRegistration(data));
  };

  return (
    <ThemeProvider theme={theme}>
    <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor: '#1F1F1F'}}>
      <Grid 
        container 
        direction="column"
      >
      <Grid item sx={{ marginBottom: "14px" }}>
      <TextField 
        type="text" 
        id="name" 
        {...register('name')} 
        placeholder="Enter your name" 
        sx = {style}
      />
      </Grid>
      <Grid item sx={{ marginBottom: "14px" }}>
      <TextField
        type="email"
        id="email"
        {...register('email')}
        placeholder="Enter your email"
        sx = {style}
      />
      </Grid>
      <Grid item sx={{ marginBottom: "24px" }}>
      <TextField
        type="password"
        id="password"
        {...register('password')}
        placeholder="Create a password"
        sx = {style}
      />
      </Grid>
      <Grid item>
      <Button 
        type="submit" 
        variant="contained"
        color="primary"
        sx = {{width: 344, borderRadius: "8px", height: 49}}
      > 
        Register Now 
      </Button>
      </Grid>
      </Grid>
    </form>
    </ThemeProvider>
  );
};
