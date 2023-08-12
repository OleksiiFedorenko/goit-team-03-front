import moment from 'moment';

export const determineRemainDays = date => {
  const d = moment(date);
  const today = moment().endOf('day');
  const tomorrow = moment().add(1, 'day').endOf('day');
  if (d < today) return 'Today';
  if (d < tomorrow) return 'Tomorrow';
  return 'in ' + d.fromNow(true);
};
