export const FETCH_WORKING_DAY = 'FETCH_WORKING_DAY';
export const fetchWorkingDay = () => ({
  type: FETCH_WORKING_DAY,
});

export const SAVE_WORKING_DAY_LIST = 'SAVE_WORKING_DAY_LIST';
export const saveWorkingDayList = (workingDayList) => ({
  type:SAVE_WORKING_DAY_LIST,
  workingDayList,
});
