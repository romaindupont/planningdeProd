import axios from 'axios';
import { UPDATED_LANCEMENT, UPDATED_END, UPDATED_QUANTITY } from '../actions/lancement';
import { updateTasks } from '../actions';

const lancement = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATED_LANCEMENT:
      {
        const state = store.getState();
        axios.patch(`planning/start/${state.lancement.id}`,
          {
            start: action.start,
            _end: action.end,
            progress: 50
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
        const state = store.getState();
        axios.patch(`planning/end/${state.lancement.id}`,
          {
            _end: action.end,
            progress: 100
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
        const state = store.getState();
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
