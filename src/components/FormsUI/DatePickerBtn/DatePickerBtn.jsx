import React, { useState } from 'react';
import { Button, useTheme } from '@mui/material';
import { Icon } from 'components/Icons';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const DatePickerBtn = ({ children }) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  // console.log('picker state:', openDatePicker);
  const theme = useTheme();

  const openDatePickerHandler = () => {
    // console.log('open');
    setOpenDatePicker(true);
  };
  const closeDatePickerHandler = () => {
    // console.log('close');
    setOpenDatePicker(false);
  };

  const configButton = {
    color: 'primary',
    fullWidth: false,
    disableRipple: true,
    sx: {
      padding: 0,
      ...theme.typography.h3,
    },
  };
  const typographyProps = {
    style: {
      textTransform: 'none',
      ...theme.typography.h3,
    },
  };

  return (
    <>
      <Button
        endIcon={<Icon id="dropdown" />}
        onClick={openDatePickerHandler}
        {...configButton}
      >
        <span {...typographyProps}>{children}</span>
      </Button>

      {openDatePicker && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            open={openDatePicker}
            onClose={closeDatePickerHandler}
            renderInput={() => <div />}
          />
        </LocalizationProvider>
      )}
    </>
  );
};
export default DatePickerBtn;
