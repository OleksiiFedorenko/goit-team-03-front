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
