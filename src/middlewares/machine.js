import axios from 'axios';
import { FETCH_MACHINE, saveMachineList, FETCH_MACHINE_PLANNING, saveMachinePlanning, savePlanningMachine } from '../actions/machines';

const machine = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MACHINE:
      {
        const state = store.getState();
        axios.get("/machine",
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(saveMachineList(response.data.MachineList));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case FETCH_MACHINE_PLANNING:
      {
        const state = store.getState();
        axios.get("planning/machine",
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(savePlanningMachine(response.data.planningMachineList));
            store.dispatch(saveMachinePlanning(response.data.planningMachineList,''));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    default:
      next(action);
  }
};

export default machine;
