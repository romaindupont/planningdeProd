import { searchMachinePlanning } from '../Utils/triTaskMachine';
import { filterMachineState } from '../Utils/filterMachineState';

export const SAVE_CONTAINER_DATE = 'SAVE_CONTAINER_DATE';
export const saveContainerDate = (dt) => ({
  type: SAVE_CONTAINER_DATE,
  dt,
});

export const SAVE_MACHINE_LIST = 'SAVE_MACHINE_LIST';
export const saveMachineList = (machineList) => ({
  type: SAVE_MACHINE_LIST,
  machineList,
});

export const FETCH_MACHINE = 'FETCH_MACHINE';
export const fetchMachine = () => ({
  type: FETCH_MACHINE,
});

export const FETCH_MACHINE_PLANNING = 'FETCH_MACHINE_PLANNING';
export const fetchMachinePlanning = () => ({
  type: FETCH_MACHINE_PLANNING,
});

export const SAVE_PLANNING_MACHINE = 'SAVE_PLANNING_MACHINE';
export const savePlanningMachine = (machinePlanning) => ({
  type: SAVE_PLANNING_MACHINE,
  machinePlanning,
});

export const SAVE_MACHINE_PLANNING = 'SAVE_MACHINE_PLANNING';
export const saveMachinePlanning = (machinePlanning, searchWord) => {
  const updateList = searchMachinePlanning(machinePlanning, searchWord);
  return ({
  type: SAVE_MACHINE_PLANNING,
  updateList,
});
};

export const SAVE_TITLE_MACHINE = 'SAVE_TITLE_MACHINE';
export const saveTitleMachine = (title) => ({
  type: SAVE_TITLE_MACHINE,
  title,
});

export const SAVE_ID_MACHINE = 'SAVE_ID_MACHINE';
export const saveIdMachine = (id) => ({
  type: SAVE_ID_MACHINE,
  id,
});

export const SEARCH_INFO_MACHINE = 'SEARCH_INFO_MACHINE';
export const searchInfoMachine = (id,name,yield_time) => ({
  type: SEARCH_INFO_MACHINE,
  id,
  name,
  yield_time
});

export const ADD_MACHINE = 'ADD_MACHINE';
export const addMachine = (newmachine) => ({
  type: ADD_MACHINE,
  newmachine
});

export const ADD_MACHINE_STATE = 'ADD_MACHINE_STATE';
export const addMachineState = (id, name, yield_time) => ({
  type: ADD_MACHINE_STATE,
  id,
  name,
  yield_time
});
export const UPDATE_MACHINE_STATE = 'UPDATE_MACHINE_STATE';
export const updateMachineState = (list, id) => {
  const filterMachine = filterMachineState(list, id);
  return ({
    type: UPDATE_MACHINE_STATE,
    listMachine: filterMachine
  })
};

export const UPDATE_MACHINE = 'UPDATE_MACHINE';
export const updateMachine = (id,name,yield_time) => ({
  type: UPDATE_MACHINE,
  id,
  name,
  yield_time
});
export const DELETE_MACHINE = 'DELETE_MACHINE';
export const deleteMachine = (id) => ({
  type: DELETE_MACHINE,
  id,
});
export const DELETE_MACHINE_STATE = 'DELETE_MACHINE_STATE';
export const deleteMachineState = (id) => ({
  type: DELETE_MACHINE_STATE,
  id,
});
