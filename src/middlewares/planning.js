import axios from 'axios';
import { FETCH_PLANNING, savePlanning, ADD_PLANNING_IN_DB } from '../actions/launch';
import {
  addTasks,
} from '../actions';

const planning = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_PLANNING_IN_DB:
    {
      const state = store.getState();
      axios.post('/planning/add',{
          id: state.tasks.id,
          name: state.tasks.name,
          start: state.tasks.start,
          _end: state.tasks.end,
          progress: state.tasks.progress,
          dependencies: state.tasks.dependencies
      },
        {
          baseURL: 'http://localhost:5000',
        })
        .then((response) => {
          console.log(response.data.newPlanning.name,response.data.newPlanning.start,response.data.newPlanning._end,response.data.newPlanning.progress,response.data.newPlanning.dependencies);
          store.dispatch(addTasks(response.data.newPlanning.id,response.data.newPlanning.name,response.data.newPlanning.start,response.data.newPlanning._end,response.data.newPlanning.progress,response.data.newPlanning.dependencies));
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
            console.log(response.data.planningList)
            store.dispatch(savePlanning(response.data.planningList))
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

export default planning;
