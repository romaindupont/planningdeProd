import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import { openDate } from './openDate';


export function businessAddCalcul(endDate, startDate) {
  openDate();
  const totalSecond = moment(endDate).workingDiff(moment(startDate), 'seconds', true);
  const hours = totalSecond/3600;
  const onlyHours = parseInt(totalSecond/3600);
  const minutes =(hours - onlyHours) * 60;
  const onlyMinutes = Math.round(minutes);
  const aujourdhui =moment().format('DD/MM/YYYY à HH:mm:ss');

  return {onlyHours,onlyMinutes,aujourdhui};
};
