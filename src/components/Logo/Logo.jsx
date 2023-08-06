import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';

import { TiFlash } from 'react-icons/ti';
import { Box, Typography } from '@mui/material';
import { logo } from 'styles';

export const Logo = () => {
  const userTheme = useSelector(selectTheme);

  let logoColor = '#5255BC';
  if (userTheme === 'light' || userTheme === 'dark') logoColor = '#FFF';

  return (
    <Box sx={logo.container}>
      <Box sx={logo.iconWrapper}>
        <Box sx={logo.iconSize}>
          <TiFlash color={logoColor} size={'100%'} />
        </Box>
      </Box>
      <Typography component="h1" sx={logo.text}>
        Task Pro
      </Typography>
    </Box>
  );
};
