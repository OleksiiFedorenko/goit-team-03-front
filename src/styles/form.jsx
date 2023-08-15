export const input = {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontFize: '14px',
  color: '#fff',
  height: '49px',
  mb: '14px',

  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#596453',
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#BEDBB0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#596453',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#BEDBB0',
  },
};

export const error = {
  color: '#FF2D55',
  ml: '14px',
  mb: '8px',
  textTransform: 'none',
};

export const form = {
  display: 'flex',
  flexDirection: 'column',

  width: {
    zeroUp: '100%',
    mobileFixed: '287px',
    tablet: '344px',
  },
};

export const button = {
  height: '49px',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontFize: '14px',
  mb: '5px',

  '&:hover': {
    opacity: '0.8',
  },
};

export const icon = {
  color: '#FFF',
  opacity: 0.4,
};

export const label = {
  width: '100%',
  position: 'relative',
  display: 'block',
  marginBottom: '24px',
};

export const bgLabel = {
  display: 'block',
  boxSizing: 'border-box',
  width: '28px',
  height: '28px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',

  '&:hover, &:focus': {
    border: '2px solid primary.main',
    scale: '1.2',
  },
};

export const errorMessage = {
  position: 'absolute',
  bottom: '-55px',
  right: '0',
  fontSize: '13px',
  fontWeight: '400',
  fontStyle: 'normal',
  letterSpacing: '-1%',
  opacity: '0.9',
  color: '#e66666',
};

export const editUser = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'baseline',
  width: '350px',
};

export const editUserForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const editUserLabel = {
  display: 'inline-block',
  width: '68px',
  height: '79px',
  cursor: 'pointer',
  mb: '14px',
};

export const errorMessageEditUser = {
  pl: '14px',
  color: '#c04d4d',
  fontSize: '14px',
  fontFamily: 'Poppins',
  fontWeight: '500',
  letterSpacing: '-0.28px',
};

export const editUserFielld = {
  width: {
    zeroUp: '285px',
    mobileFixed: '285px',
    tablet: '352px',
  },
  height: '49px',
  '& .MuiOutlinedInput-input': {
    p: '14px 18px',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'border.input',
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'border.input',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'border.input',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'border.input',
  },
};
