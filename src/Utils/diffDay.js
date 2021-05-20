import { DateTime } from "luxon";
import { openDate } from './openDate';


export function DiffDay(endDate, startDate) {
  let end = DateTime.fromISO(`${endDate.slice(0,4)}-${endDate.slice(5,7)}-${endDate.slice(8,10)}`);
  let start = DateTime.fromISO(`${startDate.slice(0,4)}-${startDate.slice(5,7)}-${startDate.slice(8,10)}`);
  let diffInMonths = end.diff(start, 'months');
  let diffDay = diffInMonths.as('days');
    return Math.ceil(diffDay);
};
