import { createTheme } from '@mui/material/styles';

const standardColors = {
  white: '#FFF',
};

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
    h1: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: '-0.02em',
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: '-0.02em',
    },
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
      main: '#FFF',
    },
    background: {
      default: '#ECEDFD',
      header: '#FFF',
      side: '#5255BC',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.7)',
      sideMain: '#FFF',
      sideSecond: 'rgba(255, 255, 255, 0.5)',
      ...standardColors,
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
      main: '#FFF',
    },
    background: {
      default: '#F6F6F7',
      header: '#FCFCFC',
      side: '#FFF',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.7)',
      sideMain: '#161616',
      sideSecond: 'rgba(22, 22, 22, 0.5)',
      ...standardColors,
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
      primary: '#FFF',
      secondary: 'rgba(255, 255, 255, 0.5)',
      sideMain: '#FFF',
      sideSecond: 'rgba(255, 255, 255, 0.5)',
      ...standardColors,
    },
  },
  ...standardParams,
});
