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

export const createBoard = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 70,
  px: 0,
  my: '8px',
  color: 'text.sideMain',
  textAlign: 'start',
  textTransform: 'none',
  borderColor: 'side.divider',
  borderRadius: '0',
  borderLeft: 'none',
  borderRight: 'none',
  '&:hover, &:focus': {
    color: 'text.sideSecond',
    backgroundColor: 'side.divider',
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
};

export const createBoardBox = {
  width: 40,
  height: 36,
  backgroundColor: 'side.plusBackground',
  borderRadius: '6px',
};

export const createBoardIcon = {
  width: '100%',
  height: 70,
  color: '#FFF',
  borderColor: '#FFF',
  borderRadius: '0',
  borderLeft: 'none',
  borderRight: 'none',
};
