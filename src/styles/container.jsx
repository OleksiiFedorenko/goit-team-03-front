export const gradient = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  p: 0,
  background: 'linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)',
};

export const welcome = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: {
    zeroUp: '90%',
    mobileFixed: 335,
    tablet: 473,
  },
};

export const layout = {
  width: '100vw',
  height: '100vh',
  p: 0,
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
