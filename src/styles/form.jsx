export const input = {
    color: '#fff',
    height: "49px",
    mb: '14px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BEDBB0",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BEDBB0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BEDBB0",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BEDBB0",
    },
    '& input': {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 30px white inset', // Измените фоновый цвет на свой
          WebkitTextFillColor: 'inherit !important',
        },
    },
}
export const error = {
    color: '#FF2D55',
    ml: '14px',
    mb: '4px',
}
export const form = {
    display: 'flex',
    flexDirection: 'column',
    width: "287px",
    backgroundColor: '#1F1F1F',
}
export const button = {
    height: '49px',
    textTransform: 'none',
}