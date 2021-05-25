import axios from 'axios';
import { FETCH_MACHINE, saveMachineList } from '../actions/machines';

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
            console.log(response.data.MachineList)
            store.dispatch(saveMachineList(response.data.MachineList));
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
