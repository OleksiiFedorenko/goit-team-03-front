import { createTheme } from '@mui/material/styles';

const standardParams = {
  breakpoints: {
    values: {
      zeroUp: 0,
      mobile: 320,
      mobileFixed: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  shape: {
    borderRadius: 8,
  },
};

export const violetTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5255BC',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#ECEDFD',
      header: '#FFFFFF',
      side: '#5255BC',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.7)',
      sideMain: '#FFFFFF',
      sideSecond: 'rgba(255, 255, 255, 0.5)',
    },
  },
  ...standardParams,
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#BEDBB0',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#F6F6F7',
      header: '#FCFCFC',
      side: '#FFFFFF',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.7)',
      sideMain: '#161616',
      sideSecond: 'rgba(22, 22, 22, 0.5)',
    },
  },
  ...standardParams,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BEDBB0',
    },
    secondary: {
      main: '#121212',
    },
    background: {
      default: '#1F1F1F',
      header: '#161616',
      side: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.5)',
      sideMain: '#FFFFFF',
      sideSecond: 'rgba(255, 255, 255, 0.5)',
    },
  },
  ...standardParams,
});
