import moment from 'moment';
import { determineRemainDays } from './determineRemainDays';

export const getDeadlineInfoEdit = date => {
  let printDeadline = 'Today, ' + moment().format('MMMM D');
  if (date) {
    // if (date.diff(moment()) < 0) {
    //   Notify.failure('Select a date');
    // }
    if (date) {
      printDeadline =
        determineRemainDays(date.$d) + ', ' + moment(date.$d).format('MMMM D');
      return printDeadline;
    } else {
      printDeadline = 'Today, ' + moment().format('MMMM D');
    }
    return printDeadline;
  }
  return printDeadline;
};
