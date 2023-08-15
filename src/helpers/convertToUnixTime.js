import dayjs, { extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
extend(customParseFormat);

export const convertToUnixTime = dateString => {
  const format = 'DD-MM-YYYY';
  const parsedDate = dayjs(dateString, format);
  return parsedDate.valueOf();
};
