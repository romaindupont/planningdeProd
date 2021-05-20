import { DateTime } from "luxon";

export function DatetimeNow() {
  const now = DateTime.now();
  let nowMonth = now.month.toString();
  let nowDay = now.day.toString();
  if(nowMonth.length<2){
    nowMonth = `0${now.month}`
  }
  else {
    nowMonth=now.month
  }
  if(nowDay.length<2){
    nowDay = `0${now.day}`
  }
  else {
    nowDay=now.day
  }
  return DateTime.fromISO(`${now.year}-${nowMonth}-${nowDay}`, { locale: "fr" });

};
