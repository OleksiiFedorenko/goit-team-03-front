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
    h5: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontSize: 10,
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
      fontSize: 8,
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
      dark: '#7B7EDE',
    },
    secondary: {
      main: '#FFF',
      dark: '#FFFFFF80',
    },
    background: {
      default: '#ECEDFD',
      header: '#FFF',
      side: '#5255BC',
      logoIcon: '#ECEDFD',
      helpBanner: 'rgba(236, 237, 253, 0.4)',
      boxPlus: '#FFFFFF',
      btnPlus: '#161616',
      boxPlusAnother: '#5255BC',
      btnPlusAnother: '#FFF',
      boxPlusCard: '#FFF',
      btnPlusCard: '#161616',
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
    side: {
      plusBackground: '#B8BCFD',
      plusBackgroundHov: '#979CEA',
      activeBtn: 'rgba(255, 255, 255, 0.2)',
      activeBoardBox: '#FFF',
    },
    divider: {
      side: '#FFFFFF1A',
      card: '#1616161A',
    },
    icon: {
      filter: '#16161680',
      boardItem: '#FFFFFF50',
      boardItemHover: '#5255BC',
      boardEdit: '#161616',
      addColumn: '#161616',
      addProfileImg: '#161616',
      addAnotherColumn: '#FFFFFF',
      createNewBoard: '#FFFFFF',
      taskItem: '#16161650',
      taskItemHover: '#5255BC',
      eye: '#161616',
      logOut: '#FFFFFF',
      logOutHover: '#B8BCFD',
    },
    loader: '#5255BC',
    ...form,
  },
  ...standardParams,
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#BEDBB0',
      dark: '#9DC888',
    },
    secondary: {
      main: '#FFF',
      dark: '#F6F6F7',
    },
    background: {
      default: '#F6F6F7',
      header: '#FCFCFC',
      side: '#FFF',
      logoIcon: '#1F1F1F',
      helpBanner: '#F6F6F7',
      boxPlus: '#161616',
      btnPlus: '#FFF',
      boxPlusAnother: '#161616',
      btnPlusAnother: '#FFF',
      boxPlusCard: '#161616',
      btnPlusCard: '#FFF',
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
      plusBackground: '#BEDBB0',
      plusBackgroundHov: '#9DC888',
      activeBtn: 'rgba(246, 246, 247, 0.4)',
      activeBoardBox: '#BEDBB0',
    },
    divider: {
      side: '#1616161A',
      card: '#1616161A',
    },
    icon: {
      filter: '#16161680',
      boardItem: '#16161650',
      boardItemHover: '#BEDBB0',
      boardEdit: '#161616',
      addColumn: '#FFFFFF',
      addProfileImg: '#161616',
      addAnotherColumn: '#FFF',
      createNewBoard: '#121212',
      taskItem: '#16161650',
      taskItemHover: '#BEDBB0',
      eye: '#161616',
      logOut: '#BEDBB0',
      logOutHover: '#9DC888',
    },
    loader: '#BEDBB0',
    ...form,
  },
  ...standardParams,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BEDBB0',
      dark: '#9DC888',
    },
    secondary: {
      main: '#121212',
      dark: '#161616',
    },
    background: {
      default: '#1F1F1F',
      header: '#161616',
      side: '#121212',
      logoIcon: '#1F1F1F',
      helpBanner: '#1F1F1F',
      boxPlus: '#161616',
      btnPlus: '#FFF',
      boxPlusAnother: '#FFF',
      btnPlusAnother: '#161616',
      boxPlusCard: '#161616',
      btnPlusCard: '#FFF',
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
      plusBackground: '#BEDBB0',
      plusBackgroundHov: '#9DC888',
      activeBtn: 'rgba(31, 31, 31, 0.4)',
      activeBoardBox: '#BEDBB0',
    },
    divider: {
      side: '#FFFFFF1A',
      card: '#FFFFFF1A',
    },
    icon: {
      filter: '#FFFFFF80',
      boardItem: '#FFFFFF50',
      boardItemHover: '#BEDBB0',
      boardEdit: '#FFFFFF',
      addColumn: '#FFFFFF',
      addProfileImg: '#161616',
      addAnotherColumn: '#121212',
      createNewBoard: '#121212',
      taskItem: '#FFFFFF50',
      taskItemHover: '#BEDBB0',
      eye: '#FFFFFF',
      logOut: '#BEDBB0',
      logOutHover: '#9DC888',
    },
    loader: '#FFFFFF80',
    ...form,
  },
  ...standardParams,
});
