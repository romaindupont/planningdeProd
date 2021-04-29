import axios from 'axios';
import { UPDATED_LANCEMENT } from '../actions/lancement';

import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';



const lancement = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATED_LANCEMENT:
      {
        const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
        const state = store.getState();
        axios.patch(`planning/start/${state.lancement.id}`,
          {
            start: aujourdhui,
            _end: state.lancement.end,
            progress: 25,
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            console.log(response);
            /* store.dispatch(updateTasks(state.tasks.id,state.tasks.name,state.tasks.start,state.tasks.end,state.tasks.progress,state.tasks.dependencies,state.tasks.lancementn)) */
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

export default lancement;