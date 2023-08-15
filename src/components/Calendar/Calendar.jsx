import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Icon } from 'components/Icons';

export const Calendar = ({ parentState, initial }) => {
  dayjs().format();

  const [dateDeadline, setDateDeadline] = useState(initial ? initial : '');

  const currentDate = new Date();

  const isPastDate = date => {
    return date < currentDate;
  };

  const isToday = date => {
    return (
      date.$D === currentDate.getDate() &&
      date.$M === currentDate.getMonth() &&
      date.$y === currentDate.getFullYear()
    );
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['month', 'day']}
          value={dateDeadline}
          desktopModeMediaQuery=""
          showDaysOutsideCurrentMonth
          onChange={newValue => {
            setDateDeadline(newValue);
            parentState(newValue);
          }}
          shouldDisableDate={date => isPastDate(date) && !isToday(date)}
          slots={{
            openPickerIcon: () => <Icon id="dropdown" />,
            textField: TextField,
          }}
          dayOfWeekFormatter={day => day.slice(0, 2)}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                color: 'text.primary',
                backgroundColor: 'background.calendar',
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                },
                '& .MuiPickersCalendarHeader-label': {
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '0.32px',
                },
                '& .MuiSvgIcon-root': {
                  fill: 'text.primary',
                },

                '& .MuiTypography-root': {
                  color: 'text.additional',
                  height: '24px',
                  marginTop: '14px',
                  fontSize: '14px',
                },
                '& .MuiDayCalendar-weekContainer': {
                  justifyContent: 'space-between',
                },

                '& .MuiButtonBase-root': {
                  color: 'text.primary',
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '18px',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  width: '100%',
                  justifyContent: 'space-between',
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                  display: 'none',
                },
                '& .MuiPickersCalendarHeader-root': {
                  padding: '0',
                  alignItems: 'baseline',
                  margin: '0',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                  borderColor: 'divider.card',
                },

                '& .MuiPickersArrowSwitcher-button': {
                  height: '21px',
                },

                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
                  background: 'background.side',
                },

                '& .MuiPickersDay-hiddenDaySpacingFiller': {
                  height: '24px',
                  width: '24px',
                  minWidth: '24px',
                  maxWidth: '24px',
                },
              },
            },
            day: {
              sx: {
                height: '24px',
                width: '24px',
                minWidth: '24px',
                maxWidth: '24px',
                fontSize: '14px',

                '&.MuiPickersDay-root.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'text.hover',
                },
                '&.MuiPickersDay-root:hover': {
                  backgroundColor: 'primary.main',
                  color: 'text.hover',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'primary.main',
                  color: 'text.hover',
                },
                '&.MuiPickersDay-today': {
                  borderWidth: 1,
                  borderColor: 'primary.main',
                  color: 'text.primary',
                },
                '&.MuiPickersDay-dayOutsideMonth': {
                  opacity: '0.3',
                },
              },
            },
            textField: {
              variant: 'outlined',
              sx: {
                '& input': { display: 'none' },
                '& fieldset': { border: 'none' },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

Calendar.propTypes = {
  parentState: PropTypes.func.isRequired,
  initial: PropTypes.object,
};
