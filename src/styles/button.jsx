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
    bgcolor: 'text.primary',
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
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover, &:focus': {
    bgcolor: 'primary.main',
  },
};

export const burgerMenu = {
  p: '0',
  minWidth: { zeroUp: '24px', tablet: '32px' },
  height: { zeroUp: '24px', tablet: '32px' },
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
    bgcolor: 'transparent',
  },
};

export const profile = {
  mr: '-8px',
  color: 'text.primary',
  fontWeight: 500,
  lineHeight: 1.5,
  textTransform: 'none',
};

export const profileImg = {
  width: '32px',
  height: '32px',
  ml: '8px',
  borderRadius: '8px',
  objectFit: 'cover',
};

export const profileImgForm = {
  width: '68px',
  height: '68px',
  ml: '8px',
};

export const profileIconPlus = {
  position: 'absolute',
  top: '98%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'all 550ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: '24px',
  height: '24px',
  color: 'rgba(22, 22, 22, 1)',
};
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
    bgcolor: 'divider.side',
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
  '&:hover': {
    bgcolor: 'side.activeBtn',
    '& .createBoardBox': {
      bgcolor: 'side.plusBackgroundHov',
    },
  },
};

export const createBoardBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 36,
  bgcolor: 'side.plusBackground',
  borderRadius: '6px',
};

export const createBoardIcon = {};

export const boardListGroup = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '4px',
  // mt: '40px',
  p: 0,
  width: '100%',
};

export const boardListItem = {
  display: 'flex',
  height: '61px',
  p: 0,
  pl: { zeroUp: '14px', tablet: '24px' },
  color: 'text.sideSecond',
  stroke: 'currentColor',
  fontWeight: 500,
  '&:hover, &:focus': {
    color: 'text.sideMain',
    stroke: 'currentColor',
    bgcolor: 'side.activeBtn',
  },
  '&.active': {
    color: 'text.sideMain',
    stroke: 'currentColor',
    bgcolor: 'side.activeBtn',
    '&::after': {
      content: '""',
      display: 'block',
      width: '4px',
      height: '100%',
      borderRadius: '4px 0px 0px 4px',
      bgcolor: 'side.activeBoardBox',
    },
  },
};

export const boardListBox = {
  width: '4px',
  height: '100%',
  borderRadius: '4px 0px 0px 4px',
};

export const boardEdit = {
  width: '18px',
  height: '18px',
  fill: 'transparent',
  color: 'icon.boardEdit',
  stroke: 'currentColor',
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
  stroke: 'currentColor',
  textAlign: 'start',
  textTransform: 'none',
  borderRadius: 0,
  '&:hover, &:focus': {
    stroke: 'currentColor',
    bgcolor: 'side.activeBtn',
  },
};

export const boxIconPlus = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  bgcolor: 'background.boxPlus',
  mr: 1,
  borderRadius: 0.75,
};

export const boxIconPlusAnother = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
  bgcolor: 'background.boxPlusAnother',
  mr: 1,
  borderRadius: 0.75,
};

export const addColumnBtn = {
  height: 56,
  minWidth: {
    zeroUp: '90vw',
    mobileFixed: '335px',
    tablet: '334px',
  },
  textTransform: 'none',
  color: 'text.primary',
  boxShadow: 'none',
  '&:hover, &:focus': {
    boxShadow: 'none',
  },
};

export const addColumnIconBox = {
  width: 28,
  height: 28,
  bgcolor: 'background.boxPlusAnother',
  mr: 1,
  borderRadius: 0.75,
};

export const addColumnIcon = {
  width: 14,
  height: 14,
  ml: 0.05,
  mt: 0.9,
  color: 'background.btnPlusAnother',
};

export const addCard = {
  width: {
    zeroUp: 'calc(100vw - 40px)',
    mobileFixed: '100%',
  },
  height: '56px',
  lineHeight: 1.5,
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover, &:focus': {
    boxShadow: 'none',
  },
};

export const addAnotherCard = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: '8px',
  width: '28px',
  height: '28px',
  bgcolor: 'background.boxPlus',
  borderRadius: 0.75,
};
export const addCardIconBox = {
  width: 28,
  height: 28,
  bgcolor: 'background.boxPlusCard',
  mr: 1,
  borderRadius: 0.75,
};

export const addCardIcon = {
  width: 14,
  height: 14,
  ml: 0.05,
  mt: 0.9,
  color: 'background.btnPlusCard',
};

export const helpBannerBtn = {
  color: 'text.sideMain',
  '&:hover': {
    color: 'primary.main',
  },
  p: 0,
  width: {
    zeroUp: 197,
    tablet: 212,
  },
};
export const boardFormIconWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: '8px',
  width: '28px',
  height: '28px',
  bgcolor: 'background.boxPlus',
  borderRadius: 0.75,
};
