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

export const authTabList = {
  width: '100%',
  display: 'flex',
  gap: '14px',
  mb: '40px',
};

export const authTabItem = {
  p: 0,
  display: 'inline-flex',
  width: 106,
};

export const authTabBtn = {
  display: 'inline-flex',
  color: 'rgba(255, 255, 255, 0.30)',
  fontWeight: 500,
  p: 0,
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
  color: 'text.topTheme',
};

export const theme = {
  height: '44px',
  color: 'text.topTheme',
  fontWeight: 500,
  lineHeight: 1.5,
  textTransform: 'none',
};

export const themeMenu = {
  minWidth: '200px',
  maxWidth: '200px',
  borderColor: 'primary.main',
  '& .MuiPopover-paper': {
    minWidth: '100px',
    maxWidth: '100px',
    py: '6px',
  },
};

export const themeItem = {
  height: '25px',
  minHeight: '20px',
  py: '2px',
  '&.Mui-selected': {
    color: 'primary.main',
    backgroundColor: 'transparent',
  },
};

export const profile = {
  mr: '-8px',
  color: 'text.primary',
  fontWeight: 500,
  lineHeight: 1.5,
  textTransform: 'none',
};

export const profileImg = { width: '32px', height: '32px', ml: '8px' };

export const createBoardWrapper = {
  my: '8px',
  '&::before, &::after': {
    content: '""',
    display: 'block',
    width: {
      zeroUp: '197px',
      tablet: '212px',
    },
    height: '1px',
    mx: { zeroUp: '14px', tablet: '24px' },
    backgroundColor: 'side.divider',
  },
};

export const createBoard = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 70,
  my: '-1px',
  px: { zeroUp: '14px', tablet: '24px' },
  color: 'text.sideMain',
  fontWeight: 500,
  textAlign: 'start',
  textTransform: 'none',
  borderRadius: '0',
  '&:hover, &:focus': {
    backgroundColor: 'side.activeBtn',
    '& .createBoardBox': {
      backgroundColor: 'side.plusBackgroundHov',
    },
  },
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
  p: 0,
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

export const svgIconPlus = {
  width: 14,
  height: 14,
  ml: 0.05,
  mt: 0.9,
  color: 'background.btnPlus'
};

export const boxIconPlus = {
  width: 28,
  height: 28,
  bgcolor: 'background.boxPlus',
  mr: 1,
  borderRadius: 0.75,
}
