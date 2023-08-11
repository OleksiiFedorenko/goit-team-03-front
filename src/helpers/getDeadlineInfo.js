import moment from 'moment';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { determineRemainDays } from './determineRemainDays';

export const getDeadlineInfo = date => {
  let deadlineInfo = 'Today, ' + moment().format('MMMM D');

  if (date) {
    deadlineInfo =
      determineRemainDays(date.$d) + ', ' + moment(date.$d).format('MMMM D');
    return deadlineInfo;
  } else {
    deadlineInfo = 'Today, ' + moment().format('MMMM D');
  }

  return deadlineInfo;
};
