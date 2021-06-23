import axios from 'axios';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';
import {
  FETCH_PLANNING,
  savePlanning,
  ADD_PLANNING_IN_DB,
  UPDATED_PLANNING,
  DELETE_PLANNING,
  ADD_SEVERAL_LINE_IN_DB,
} from '../actions/launch';
import {
  addTasks,
  updateTasks,
  deleteTasks,
  deleteOrdo
} from '../actions';
import { saveErrorMessage } from '../actions/workingDay';
import { generateIdAdd } from '../Utils';
import { openDate } from '../Utils/openDate';

const planning = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PLANNING_IN_DB:
    {
      const state = store.getState();
      axios.post('/planning/add',
      {
        id: state.tasks.id,
        name: state.tasks.name,
        start: state.tasks.start,
        _end: state.tasks.end,
        progress: state.tasks.progress,
        dependencies: state.tasks.dependencies,
        lancement: state.tasks.lancementn,
        quantity: state.tasks.quantity
      },
        {
          baseURL: 'http://localhost:5000',
        })
        .then((response) => {
          store.dispatch(addTasks(
            response.data.newPlanning.id,
            response.data.newPlanning.name,
            response.data.newPlanning.start,
            response.data.newPlanning._end,
            response.data.newPlanning.progress,
            response.data.newPlanning.dependencies,
            response.data.newPlanning.lancement,
            response.data.newPlanning.quantity
          ));
          store.dispatch(saveErrorMessage(response.data.message));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case FETCH_PLANNING:
      {
        axios.get('/planning',
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            for(let i = 0; i < response.data.planningList.length; i++ ){
              let m = response.data.planningList[i].planning_id.toString();
              store.dispatch(savePlanning(
                m,
                response.data.planningList[i].reference,
                response.data.planningList[i].start,
                response.data.planningList[i]._end,
                parseInt(response.data.planningList[i].progress),
                response.data.planningList[i].dependencies,
                response.data.planningList[i].lancement,
                response.data.planningList[i].quantity
              ))
            }
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case UPDATED_PLANNING:
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
              response.data.updateLine[0].id,
              response.data.updateLine[0].name,
              response.data.updateLine[0].start,
              response.data.updateLine[0]._end,
              response.data.updateLine[0].progress,
              response.data.updateLine[0].dependencies,
              response.data.updateLine[0].lancement,
              response.data.updateLine[0].quantity
            ));
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case DELETE_PLANNING:
      {
        const state = store.getState();
        axios.delete(`planning/delete/${action.id}`,
            {
              baseURL: 'http://localhost:5000',
            })
            .then((response) => {
              store.dispatch(deleteTasks(action.id));
              store.dispatch(saveErrorMessage(response.data.message));
            })
            .catch((error) => {
              console.error('Error', error);
            });
          break;
      }
      case ADD_SEVERAL_LINE_IN_DB:
        {
          const state = store.getState();
          const lancementCalcul = generateIdAdd(state.machines.PlanningForMachine);
          for (let i = 0; i < state.launch.lancement.length; i++) {
            openDate();
            const calcul = state.launch.lancement[i].tempsop * parseInt(state.articles.quantity);
            const c = (state.launch.datepicker + ' ' + state.launch.start_hours);
            const a = momentBusinessTime(c, 'DD/MM/YYYY HH:mm:ss').addWorkingTime(calcul/0.4, 'minutes');
            const r = moment(a).format('YYYY-MM-DD HH:mm:ss');
            const g = moment(c, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
          axios.post('/planning/add/several',
            {
              name: state.launch.lancement[i].reference,
              start: g,
              _end: r,
              progress: 10,
              dependencies: '',
              lancement: lancementCalcul,
              quantity: state.tasks.quantity
            },
              {
                baseURL: 'http://localhost:5000',
              })
              .then((response) => {
                store.dispatch(addTasks(
                  response.data.newPlanning.id,
                  response.data.newPlanning.name,
                  response.data.newPlanning.start,
                  response.data.newPlanning._end,
                  response.data.newPlanning.progress,
                  response.data.newPlanning.dependencies,
                  response.data.newPlanning.lancement,
                  response.data.newPlanning.quantity
                ));
                store.dispatch(saveErrorMessage(response.data.message));
              })
              .catch((error) => {
                console.error('Error', error);
              });
            }
            break;
          }
    default:
      next(action);
  }
};

export default planning;
