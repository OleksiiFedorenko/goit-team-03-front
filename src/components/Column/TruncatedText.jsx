import { Typography } from '@mui/material';

const TruncatedText = ({ text }) => {
  return (
    <Typography
      variant="body2"
      color="text.cardSecond"
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {text}
    </Typography>
  );
};
export default TruncatedText;
