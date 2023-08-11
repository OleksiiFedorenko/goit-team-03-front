import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Icon } from 'components/Icons';
import { TextField } from '@mui/material';

export const Calendar = ({ parentState, initial }) => {
  dayjs().format();

  const [dateDeadline, setDateDeadline] = useState(initial ? initial : '');

  const currentDate = new Date();

  const isPastDate = date => {
    return date < currentDate;
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['month', 'day']}
          value={dateDeadline}
          desktopModeMediaQuery=""
          onChange={newValue => {
            setDateDeadline(newValue);
            parentState(newValue);
          }}
          renderInput={params => <TextField {...params} />}
          shouldDisableDate={isPastDate}
          slots={{
            openPickerIcon: () => <Icon id="move" />,
          }}
          dayOfWeekFormatter={day => day.slice(0, 2)}
          slotProps={{
            // desktopPaper: {
            //   sx: {},
            // },
            // day: {
            //   sx: {},
            // },
            textField: {
              variant: 'outlined',
              //   sx: {},
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

Calendar.propTypes = {
  parentState: PropTypes.func.isRequired,
  initial: PropTypes.string,
};
