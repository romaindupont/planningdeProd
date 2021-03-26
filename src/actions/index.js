export const FETCH_TASKS = 'FETCH_TASKS';
export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

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

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key,
});

export const SEND_TASKS = 'SEND_TASKS';
export const sendTasks = (id, name) => ({
  type: SEND_TASKS,
  id,
  name,
});

export const CLICK_TASKS = 'CLICK_TASKS';
export const clickTasks = (id,name,start,end, progress,dependencies) => ({
  type: CLICK_TASKS,
  id,
  name,
  start,
  end, 
  progress,
  dependencies,
});

export const UPDATE_TASKS = 'UPDATE_TASKS';
export const updateTasks = (id,name,start,end, progress,dependencies) => ({
  type: UPDATE_TASKS,
  id,
  name,
  start,
  end, 
  progress,
  dependencies,
});

export const DELETE_TASKS = 'DELETE_TASKS';
export const deleteTasks = (id) => ({
  type: DELETE_TASKS,
  id,
});