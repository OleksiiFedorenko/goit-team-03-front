import React from 'react';
import { Box } from "@mui/material";
import { RotatingLines } from 'react-loader-spinner';
import { selectTheme } from 'store/auth/selectors';

import { useState, useEffect } from 'react'; 

import { useSelector } from 'react-redux';

import { violetTheme, lightTheme, darkTheme } from '../../themes/themes'

export const Loader = () => {
    const userTheme = useSelector(selectTheme);
    const [theme, setTheme] = useState(violetTheme);

    useEffect(() => {
      if (userTheme === 'light') setTheme(lightTheme);
      if (userTheme === 'dark') setTheme(darkTheme);
      if (userTheme === 'violet') setTheme(violetTheme);
    }, [userTheme]);

    return (
        <Box 
         sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' }}>
          <RotatingLines
              height="80"
              width="80"
              strokeWidth="5"
              animationDuration="0.75"
              strokeColor = {theme.palette.loader}
              visible={true}
          />
        </Box>
      );
}