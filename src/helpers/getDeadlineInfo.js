import moment from 'moment';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { determineRemainDays } from './determineRemainDays';

export const getDeadlineInfo = date => {
  let deadlineInfo = 'Today, ' + moment().format('MMMM D');
  if (date) {
    if (date.diff(moment()) < 0) {
      Notify.failure('Deadline date cannot be in the past!');
      return;
    }
    if (date) {
      deadlineInfo =
        determineRemainDays(date.$d) + ', ' + moment(date.$d).format('MMMM D');
      return deadlineInfo;
    } else {
      deadlineInfo = 'Today, ' + moment().format('MMMM D');
    }
    return deadlineInfo;
  }
  return deadlineInfo;
};
