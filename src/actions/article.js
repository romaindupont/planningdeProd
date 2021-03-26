export const SAVE_TASKS = 'SAVE_TASKS';
export const SaveTasks = (id,name,start,end, progress,dependencies) => ({
  type: SAVE_TASKS,
  id,
  name,
  start,
  end,
  progress,
  dependencies,
});

export const SAVE_ID = 'SAVE_ID';
export const saveId = (id) => ({
  type: SAVE_ID,
  id,
});

export const SEARCH_INFO = 'SEARCH_INFO';
export const searchInfo = (id) => ({
  type: SEARCH_INFO,
  id,
});
