export const gradient = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  p: 0,
  background: 'linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)',
};

export const layout = {
  width: '100vw',
  height: '100vh',
  p: 0,
};

export const main = {
  display: {
    desktop: 'flex',
  },
  height: '100%',
};

export const topBar = {
  position: 'fixed',
  zIndex: '10',
  width: '100%',
  height: {
    zeroUp: 60,
    tablet: 68,
  },
  backgroundColor: 'background.header',
};

export const sideBar = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: '20',
  width: {
    zeroUp: 225,
    tablet: 260,
  },
  height: '100%',
  backgroundColor: 'background.side',
};

export const sideBarDesktop = {
  ...sideBar,
  display: { zeroUp: 'none', desktop: 'flex' },
};

export const board = {
  zIndex: '0',
  width: {
    zeroUp: '100%',
    desktop: 'calc(100% - 260px)',
  },
  height: '100%',
  pt: {
    zeroUp: '60px',
    tablet: '68px',
  },
};

//// inner containers

export const welcome = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: {
    zeroUp: '90%',
    mobileFixed: 335,
    tablet: 473,
  },
};

export const noBoardInner = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

export const boardNav = {
  width: '100%',
  mt: '60px',
};
