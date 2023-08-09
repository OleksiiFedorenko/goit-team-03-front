import { createTheme } from '@mui/material/styles';

const standardColors = {
  white: '#FFF',
};

const form = {
  input: {
    main: '#BEDBB0',
    light: '#42a5f5',
    dark: '#9FAF90',
    contrastText: '#FFF',
  },
  button: {
    main: '#BEDBB0',
    contrastText: '#161616',
  },
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
    h4: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: '-0.02em',
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: '-0.02em',
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.5,
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
      logoIcon: '#ECEDFD',
      helpBanner: 'rgba(236, 237, 253, 0.4)',
    },
    text: {
      primary: '#161616',
      secondary: '#161616B2',
      topTheme: '#161616CC',
      sideMain: '#FFF',
      sideSecond: '#FFFFFF80',
      filterRadio: 'rgba(22, 22, 22, 0.50)',
      ...standardColors,
    },
    divider: {
      side: '#FFFFFF1A',
    },
    side: {
      divider: '#FFFFFF1A',
      plusBackground: '#B8BCFD',
      plusBackgroundHov: '#979CEA',
      activeBtn: 'rgba(255, 255, 255, 0.2)',
      activeBoardBox: '#FFF',
    },
    ...form,
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
      logoIcon: '#1F1F1F',
      helpBanner: '#F6F6F7',
    },
    text: {
      primary: '#161616',
      secondary: '#161616B2',
      topTheme: '#161616CC',
      sideMain: '#161616',
      sideSecond: '#16161680',
      filterRadio: 'rgba(22, 22, 22, 0.50)',

      ...standardColors,
    },
    side: {
      divider: '#1616161A',
      plusBackground: '#B8BCFD',
      plusBackgroundHov: '#9DC888',
      activeBoard: 'rgba(246, 246, 247, 0.4)',
      activeBoardBox: '#BEDBB0',
    },
    ...form,
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
      logoIcon: '#1F1F1F',
      helpBanner: '#1F1F1F',
    },
    text: {
      primary: '#FFF',
      secondary: '#FFFFFF80',
      topTheme: '#FFFFFFCC',
      sideMain: '#FFF',
      sideSecond: '#FFFFFF80',
      filterRadio: 'rgba(255, 255, 255, 0.50)',
      ...standardColors,
    },
    side: {
      divider: '#FFFFFF1A',
      plusBackground: '#B8BCFD',
      plusBackgroundHov: '#9DC888',
      activeBoard: 'rgba(31, 31, 31, 0.4)',
      activeBoardBox: '#BEDBB0',
    },
    ...form,
  },
  ...standardParams,
});
