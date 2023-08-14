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
  bgcolor: 'background.header',
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
  bgcolor: 'background.side',
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

export const boardTopBar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const columns = {
  display: 'flex',
  gap: '34px',
  width: '100%',
  maxHeight: '100%',
  mt: {
    zeroUp: '40px',
    tablet: '26px',
    desktop: '10px',
  },
};

export const columnsInner = {
  display: 'flex',
  gap: '34px',
  // height: '100%',
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

// export const modalContent = {
//   width: {
//     mobileFixed: '95%',
//   },
// };

export const helpBannerContainer = {
  m: 'auto',
  bgcolor: 'background.helpBanner',
  borderRadius: '8px',
  width: {
    zeroUp: 197,
    tablet: 212,
  },
};

export const helpFormContainer = {
  width: {
    zeroUp: 335,
    tablet: 400,
  },
};

export const addColumnContainer = {
  width: {
    zeroUp: 335,
    tablet: 350,
  },
};
export const ImgWrapperContainer = {
  position: 'relative',
  width: '68px',
  height: '68px',
  borderRradius: '8px',
  // transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 'transform 550ms cubic-bezier(0.4, 0, 0.2, 1)',

  ' &:hover': {
    boxShadow: '0px 0px 11px 0px rgba(82, 85, 188, 1)',
    transform: 'scale(1.1)',
  },

  //  ' &:hover', 'svg' {
  //     top: '50%',
  //     boxShadow: '0px 0px 11px 0px rgba(82, 85, 188, 1)',
  //   }
};
export const cardForm = {
  p: 0,

  width: {
    zeroUp: '90%',
    mobileFixed: '287px',
    tablet: '302px',
  },
};
