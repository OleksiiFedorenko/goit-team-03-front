import React from 'react';
import { Box } from "@mui/material";
import { ProgressBar } from 'react-loader-spinner';
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
          <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor = '#F4442E'
              barColor = {theme.palette.loader}
          />
        </Box>
      );
}