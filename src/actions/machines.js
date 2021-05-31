import { searchMachinePlanning } from '../Utils/triTaskMachine';

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
