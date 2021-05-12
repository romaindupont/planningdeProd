export const FETCH_WORKING_DAY = 'FETCH_WORKING_DAY';
export const fetchWorkingDay = () => ({
  type: FETCH_WORKING_DAY,
});

export const SAVE_WORKING_DAY_LIST = 'SAVE_WORKING_DAY_LIST';
export const saveWorkingDayList = (workingDayList) => ({
  type: SAVE_WORKING_DAY_LIST,
  workingDayList,
});

export const UPDATE_WORKING_DAY = 'UPDATE_WORKING_DAY';
export const updateWorkingDay = (numerojour, open_close, hour1, hour2, hour3, hour4) => ({
  type: UPDATE_WORKING_DAY,
  numerojour,
  open_close,
  hour1,
  hour2,
  hour3,
  hour4
});

export const SAVE_ERROR_MESSAGE = 'SAVE_ERROR_MESSAGE';
export const saveErrorMessage = (message) => ({
  type: SAVE_ERROR_MESSAGE,
  message,
});
