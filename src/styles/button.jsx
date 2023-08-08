export const authGroup = {
  mt: '48px',
  width: '100%',
};

export const authItem = {
  height: '49px',
  fontWeight: 500,
  textAlign: 'center',
  borderRadius: '8px',
  '&:hover, &:focus': {
    color: 'text.white',
    backgroundColor: 'text.primary',
  },
};

export const closeBtn = {
  position: 'absolute',
  top: '14px',
  right: '14px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover, &:focus': {
    backgroundColor: 'primary.main',
  },
};

export const burgerMenu = {
  p: '0',
  minWidth: '32px',
  height: '32px',
};

export const createBoard = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 70,
  px: { zeroUp: '14px', tablet: '24px' },
  my: '8px',
  color: 'text.sideMain',
  textAlign: 'start',
  textTransform: 'none',
  borderColor: 'side.divider',
  borderRadius: '0',
  borderLeft: 'none',
  borderRight: 'none',
  '&:hover, &:focus': {
    backgroundColor: 'side.activeBtn',
    borderLeft: 'none',
    borderRight: 'none',
    '& .createBoardBox': {
      backgroundColor: 'side.plusBackgroundHov',
    },
  },
};

export const createBoardInner = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  fontWeight: 500,
};

export const createBoardBox = {
  width: 40,
  height: 36,
  backgroundColor: 'side.plusBackground',
  borderRadius: '6px',
};

export const createBoardIcon = {};

export const boardListGroup = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '4px',
  mt: '40px',
  width: '100%',
};

export const boardListItem = {
  display: 'flex',
  height: '61px',
  p: 0,
  pl: { zeroUp: '14px', tablet: '24px' },
  color: 'text.sideSecond',
  fontWeight: 500,
  '&:hover, &:focus, &.active': {
    color: 'text.sideMain',
    backgroundColor: 'side.activeBtn',
    '& .activeBoardBtn': {
      backgroundColor: 'side.activeBoardBox',
    },
  },
};

export const boardListBox = {
  width: '4px',
  height: '100%',
  borderRadius: '4px 0px 0px 4px',
};

export const logOut = {
  display: 'flex',
  justifyContent: 'start',
  width: '100%',
  height: '60px',
  pl: { zeroUp: '14px', tablet: '24px' },
  mt: '10px',
  mb: { zeroUp: 0, tablet: '10px' },
  color: 'text.sideMain',
  textAlign: 'start',
  textTransform: 'none',
  borderRadius: 0,
  '&:hover, &:focus': {
    backgroundColor: 'side.activeBtn',
  },
};
