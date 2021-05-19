import { DateTime } from "luxon";
import { openDate } from './openDate';


export function diffDay(endDate, startDate) {
  let diffInMonths = end.diff(start, 'months');
    let diffDay = diffInMonths.as('days');
    return Math.ceil(diffDay);
};
