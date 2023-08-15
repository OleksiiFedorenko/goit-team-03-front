import dayjs from 'dayjs';

export const convertFromUnixTime = timestamp => {
  const parsedDate = dayjs(timestamp);
  const currentDate = dayjs();

  if (parsedDate.isSame(currentDate, 'day')) {
    return 'Today, ' + parsedDate.format('MMMM D');
  } else {
    return parsedDate.format('MMMM D');
  }
};
