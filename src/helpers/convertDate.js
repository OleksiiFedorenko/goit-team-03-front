import dayjs, { extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
extend(customParseFormat);

export const convertDate = date => {
  const format = 'DD-MM-YYYY';
  const parsedDate = dayjs(date, format);
  const currentDate = dayjs();

  if (parsedDate.isSame(currentDate, 'day')) {
    return 'Today, ' + parsedDate.format('MMMM D');
  } else {
    return parsedDate.format('MMMM D');
  }
};
