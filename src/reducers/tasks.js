import moment from 'moment';
import {
  ADD_TASKS,
  SEND_TASKS,
  CHANGE_VALUE,
  CLICK_TASKS,
  UPDATE_TASKS,
  DELETE_TASKS,
} from '../actions';
import {  SAVE_PLANNING } from '../actions/launch';

const aujourdhui = moment().format('YYYY-MM-DD HH:mm:ss');

const initialState = {
  tasks:
  [
    {
      id: 'essai1',
      name: 'lab',
      start: '2021-04-18 12:00:00',
      end: '2021-04-19 12:00:00',
      progress: 100,
      dependencies: '',
    },
    {
      id: 'essai2',
      name: 'lab1',
      start: '2021-04-18 12:00:00',
      end: '2021-04-19 12:00:00',
      progress: 50,
      dependencies: '',
    }
  ],
   id: '',
   name: '',
   start: aujourdhui,
   end: aujourdhui,
   progress: 10,
   dependencies: '',
   task: {},
   ModeView: '',
   tempsOp:null,
   lancementn:null,
   quantity:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TASKS:
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
            lancementn: action.lancement,
            quantity: action.quantity
          }
        ]
      };
      case SEND_TASKS:
          return {
            ...state,
            id: '',
            name: ''
          };
      case CHANGE_VALUE:
          return {
              ...state,
              [action.key]: action.newValue
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
          lancementn: action.lancement,
          quantity: action.quantity
        }
      case UPDATE_TASKS:
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id == action.id) {
              return {
                id: task.id,
                name: action.name,
                start: action.start,
                end: action.end,
                progress: action.progress,
                dependencies: action.dependencies,
                lancementn: action.lancement,
                quantity: action.quantity
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
          lancementn:'',
          quantity: ''
        }
        case DELETE_TASKS:
          return {
            tasks: state.tasks.filter((task)=> { return action.id !== task.id; }),
            id: '',
            name: '',
            progress: 10,
            dependencies: '',
            lancementn: '',
            quantity: ''
          }
        case SAVE_PLANNING:
          return {
            ...state,
            tasks:  [
              ...state.tasks,
              {
                id: action.id,
                name: action.name,
                start: action.start,
                end: action.end,
                progress: action.progress,
                dependencies: action.dependencies,
                lancementn: action.lancement,
                quantity: action.quantity
              }
            ]
          }
    default:
      return state;
  }
};

export default reducer;


