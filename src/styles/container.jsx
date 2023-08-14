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
  position: 'relative',

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
  overflowY: 'hidden',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    minWidth: '179px',
    maxWidth: '637px',
    borderRadius: '4px',
    backgroundColor: 'scroll.horizontalScrollbar',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'scroll.horizontalTrack',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'scroll.horizontalTrackHover',
  },
  '&::-webkit-scrollbar-thumb:active': {
    backgroundColor: 'scroll.horizontalTrackActive',
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
  maxHeight: 470,
  width: {
    zeroUp: '90%',
    mobileFixed: 335,
    tablet: 424,
  },
  bgcolor: '#151515',
  borderRadius: '8px',
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

export const dndContainerColumn = {
  minHeight: '20px',
  // for some f**king unbelievable reason only fixed styling is working
  // maxHeight: 'calc(100vh - 68px)',
  // maxHeight: '100%',
  // maxHeight: '470px',
};

export const columns = {
  display: 'flex',
  gap: '34px',
  width: '100%',
  height: {
    // !!!!!!!!!!!!!do not change this
    zeroUp: 'calc(100vh - 170px)', // this one is not exactly same as on the figma for some reason
    tablet: 'calc(100vh - 192px)',
    desktop: 'calc(100vh - 142px)',
  },
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

export const boardNavList = {
  mt: '40px',
  height: '150px',
  scrollbarWidth: 'none',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0px',
  },
};

export const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
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
    zeroUp: '90vw',
    mobileFixed: '335px',
    tablet: '400px',
  },
};

export const addColumnContainer = {
  width: {
    zeroUp: 287,
    tablet: 302,
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
export const taskListScroll = {
  width: {
    zeroUp: '100%',
    mobileFixed: '351px',
    tablet: '350px',
  },
  overflowY: 'auto',
  overflowX: 'hidden',
  m: 0,
  p: 0,
  listStyle: 'none',
  height: '100%',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    minHeight: '142px',
    maxHeight: '142px',
    borderRadius: '4px',
    backgroundColor: 'scroll.verticalScrollbar',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'scroll.verticalTrack',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'scroll.verticalTrackHover',
  },
  '&::-webkit-scrollbar-thumb:active': {
    backgroundColor: 'scroll.verticalTrackActive',
  },
};

export const taskList = {
  width: '334px',
  gap: '8px',
  margin: 0,
  padding: 0,
  height: '100%',
};

export const iconBox = {
  display: 'flex',
  gap: '8px',
};

export const boardIcon = {
  input: {
    display: 'none',
  },

  'input:checked + label': {
    opacity: '1',
  },
};

export const imageWrap = {
  display: 'grid',
  width: 'fit-content',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridGap: '4px',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
};

export const boardBg = {
  input: {
    display: 'none',
  },

  'input:checked + label': {
    opacity: '0.4',
  },
};

export const cardForm = {
  p: 0,
  width: {
    zeroUp: 287,
    tablet: 302,
  },
};
