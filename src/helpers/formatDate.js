import moment from 'moment';

export const formatDate = param => {
  const formatDeadline = moment(param).format('DD-MM-YYYY');
  return formatDeadline;
};
