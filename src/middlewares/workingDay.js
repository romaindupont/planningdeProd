import axios from 'axios';
import { FETCH_WORKING_DAY, saveWorkingDayList } from '../actions/workingDay';

const workingDay = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_WORKING_DAY:
      {
        axios.get('/reglages/all',
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(saveWorkingDayList(response.data.WorkingDayList));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    /* case UPDATED_PLANNING:
      {
        const state = store.getState();
        axios.put(`planning/update/${state.tasks.id}`,
          {
            name: state.tasks.name,
            start: state.tasks.start,
            _end: state.tasks.end,
            progress: state.tasks.progress,
            dependencies: state.tasks.dependencies,
            lancement: parseInt(state.tasks.lancementn),
            quantity: state.tasks.quantity
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(updateTasks(
              state.tasks.id,
              state.tasks.name,
              state.tasks.start,
              state.tasks.end,
              state.tasks.progress,
              state.tasks.dependencies,
              state.tasks.lancementn,
              state.tasks.quantity
            ))
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      } */
    default:
      next(action);
  }
};

export default workingDay;
