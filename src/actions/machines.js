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
