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
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  width: '100%',
  height: {
    zeroUp: 60,
    tablet: 68,
  },
  px: {
    zeroUp: '20px',
    tablet: '32px',
    desktop: '24px',
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

export const auth = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: {
    zeroUp: '90%',
    mobileFixed: 335,
    tablet: 424,
  },
  bgcolor: '#151515',
  border: '1px solid rgba(190, 219, 176, 0.5)',
  borderRadius: '8px',
  boxShadow: 24,
  p: {
    zeroUp: '24px',
    tablet: '40px',
  },
};

export const noBoardInner = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

export const boardInner = {
  width: '100%',
  height: '100%',
  pt: {
    zeroUp: '14px',
    tablet: '20px',
    desktop: '10px',
  },
  pb: {
    zeroUp: '24px',
    tablet: '32px',
    desktop: '8px',
  },
  px: {
    zeroUp: '20px',
    tablet: '32px',
    desktop: '24px',
  },
};

export const columns = {
  display: 'flex',
  gap: '34px',
  width: '100%',
  height: '100%',
  mt: {
    zeroUp: '40px',
    tablet: '26px',
    desktop: '10px',
  },
};

export const columnsInner = {
  display: 'flex',
  gap: '34px',
  height: '100%',
};

export const boardNav = {
  width: '100%',
  mt: '60px',
};

export const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.header',
  border: '1px solid rgba(190, 219, 176, 0.5)',
  borderRadius: '8px',
  boxShadow: 24,
  p: '24px',
};

export const modalContent = {
  width: {
    mobileFixed: '95%',
  },
};

export const helpBannerContainer = {
  m: 'auto',
  bgcolor: 'background.helpBanner',
  borderRadius: '8px',
  width: {
    zeroUp: 197,
    tablet: 212,
  },
};
