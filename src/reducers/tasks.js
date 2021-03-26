import moment from 'moment';
import {
  SAVE_TASKS,
  SEND_TASKS,
  CHANGE_VALUE,
  CLICK_TASKS,
  UPDATE_TASKS,
  DELETE_TASKS
} from '../actions';

const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
const initialState = {
   tasks: [
    {
      id: '1',
      name: 'lab',
      start: '2021-03-18 12:00:00',
      end: '2021-03-19 12:00:00',
      progress: 100,
      dependencies: '',
    },
    {
      id: '2',
      name: 'lab1',
      start: '2021-03-18 12:00:00',
      end: '2021-03-19 12:00:00',
      progress: 50,
      dependencies: '',
    }
  ],
   id: '',
   name: '',
   start: aujourdhui,
   end: '2021-03-19 12:00:00',
   progress: 10,
   dependencies: '',
   task: {},
   ModeView: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TASKS:
      return {
        ...state,
       tasks:
         [
          ...state.tasks,
        {
          id: action.id,
          name: action.name,
          start: action.start,
          end: action.end,
          progress: action.progress,
          dependencies: action.dependencies,
        }
        ]
      };
      case SEND_TASKS:
          return {
            ...state,
            id: '',
            name: '',
          };
      case CHANGE_VALUE:
          return {
              ...state,
              [action.key]: action.newValue,
          }
      case CLICK_TASKS:
        return {
          ...state,
          id: action.id,
          name: action.name,
          start: action.start,
          end: action.end,
          progress: action.progress,
          dependencies: action.dependencies,
        }
      case UPDATE_TASKS:
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if(task.id === action.id) {
              return {
                id: task.id,
                name: action.name,
                start: action.start,
                end: action.end,
                progress: action.progress,
                dependencies: action.dependencies,
              }
            }
            else {
              return task;
            }
          }),
          id: '',
          name: '',
          progress: 10,
          dependencies: '',
        }
        case DELETE_TASKS:
          return {
            tasks: state.tasks.filter((task)=> {return action.id !== task.id;}),
            id: '',
            name: '',
            progress: 10,
            dependencies: '',
          }
    default:
      return state;
  }
};

export default reducer;


