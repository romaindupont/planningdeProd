import axios from 'axios';
import {
  FETCH_WORKING_DAY,
  saveWorkingDayList,
  UPDATE_WORKING_DAY,
  saveErrorMessage
} from '../actions/workingDay';

const workingDay = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_WORKING_DAY:
      {
        axios.get('/reglages/all',
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(saveWorkingDayList(response.data.WorkingDayList));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case UPDATE_WORKING_DAY:
      {
        const state = store.getState();
        axios.put("/reglages/update",
          {
            numerojour: action.numerojour,
            open_close: action.open_close,
            hour1: action.hour1,
            hour2: action.hour2,
            hour3: action.hour3,
            hour4: action.hour4,
          },
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            store.dispatch(saveErrorMessage(error));
          });
        break;
      }
    default:
      next(action);
  }
};

export default workingDay;
