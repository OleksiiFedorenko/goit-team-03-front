import React from 'react';
import { Box } from "@mui/material";
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
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
              barColor = '#51E5FF'
          />
        </Box>
      );
}