import axios from 'axios';
import {
  FETCH_SETTINGS,
  settingsList,
  UPDATE_SETTINGS,
  settingsUpdateState,
  ADD_TO_VALO,
  FETCH_VALO_LIST,
  saveValoList
} from '../actions/valorisation';
import { saveErrorMessage } from '../actions/workingDay';


const valorisation = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SETTINGS:
      {
        axios.get('/settings/list',
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(settingsList(response.data.settingsList[0].choraire));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case UPDATE_SETTINGS:
      {
        const state = store.getState();
        axios.put(`/settings/update/${action.id}`,
          {
            choraire: parseFloat(action.choraire),
          },
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(settingsUpdateState(action.choraire));
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            store.dispatch(saveErrorMessage(error));
          });
        break;
      }
    case ADD_TO_VALO:
      {
        const state = store.getState();
        axios.post('/valorisation/add',
          {
            id_piece: action.planning_id,
            cout: parseFloat(action.cout),
            montant: parseFloat(action.montant)
          },
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case FETCH_VALO_LIST:
      {
        axios.get('/valorisation/list',
          {
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
          })
          .then((response) => {
            store.dispatch(saveValoList(response.data.valorisationList));
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

export default valorisation;
