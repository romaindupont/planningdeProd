import axios from 'axios';
import {
  FETCH_MACHINE,
  saveMachineList,
  FETCH_MACHINE_PLANNING,
  saveMachinePlanning,
  savePlanningMachine,
  ADD_MACHINE,
  UPDATE_MACHINE,
  DELETE_MACHINE,
  addMachineState,
  updateMachineState,
  deleteMachineState
} from '../actions/machines';
import { saveErrorMessage } from '../actions/workingDay';

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
            store.dispatch(saveMachinePlanning(response.data.planningMachineList, ''));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case ADD_MACHINE:
      {
        const state = store.getState();
        axios.post('/machine/add',
        {
          name: state.machines.name,
          yield_time: parseInt(state.machines.yield_time)
        },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            console.log(response.data.newMachine)
            store.dispatch(addMachineState(
              response.data.newMachine.id,
              response.data.newMachine.name,
              response.data.newMachine.yield_time
            ));
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case UPDATE_MACHINE:
      {
        const state = store.getState();
        axios.put(`/machine/update/${state.machines.id}`,
        {
          name: state.machines.name,
          yield_time: state.machines.yield_time
        },
        {
          baseURL: 'http://localhost:5000',
        })
          .then((response) => {
            store.dispatch(updateMachineState(
              state.machines.id,
              state.machines.name,
              state.machines.yield_time
            ));
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case DELETE_MACHINE:
      {
        const state = store.getState();
        axios.delete(`/machine/delete/${state.machines.id}`,
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(deleteMachineState(state.machines.id));
            store.dispatch(saveErrorMessage(response.data.message));
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
