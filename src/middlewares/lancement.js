import axios from 'axios';
import { UPDATED_LANCEMENT, UPDATED_END, UPDATED_QUANTITY } from '../actions/lancement';
import { updateTasks } from '../actions';
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
            start: action.start,
            _end: action.end,
            progress: 50,
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(updateTasks(
              state.lancement.id,
              state.lancement.name,
              action.start,
              action.end,
              50,
              '',
              state.lancement.lctNumber,
              state.lancement.quantity
            ))
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
      case UPDATED_END:
      {
        const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
        const state = store.getState();
        axios.patch(`planning/end/${state.lancement.id}`,
          {
            _end: action.end,
            progress: 100,
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(updateTasks(
              state.lancement.id,
              state.lancement.name,
              state.lancement.start,
              action.end,
              100,
              '',
              state.lancement.lctNumber,
              state.lancement.quantity
            ))
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case UPDATED_QUANTITY :
      {
        const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
        const state = store.getState();
        console.log(state)
        axios.patch(`planning/quantity/${state.lancement.id}`,
          {
            quantity: action.quantity
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(updateTasks(
              state.lancement.id,
              state.lancement.name,
              state.lancement.start,
              state.lancement.end,
              state.lancement.progression,
              '',
              state.lancement.lctNumber,
              state.lancement.quantity
            ))
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
