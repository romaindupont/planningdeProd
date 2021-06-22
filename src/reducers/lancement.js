import {
  SAVE_LCT,
  SAVE_ID_LCT,
  CHANGE_POPUP,
  SEARCH_VALUE,
  UPDATE_LIST,
} from '../actions/lancement';
import { CHANGE_VALUE, DELETE_TASKS, UPDATE_TASKS } from '../actions';

const initialState = {
  id:'',
  lctNumber:'',
  name:'',
  start:'',
  end:'',
  progression: '',
  machine: '',
  popupWindow : false,
  popupText:'',
  filterList: [],
  quantity:''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LCT:
      return {
        ...state,
        id: action.id,
        lctNumber: action.lancementn,
        name: action.name,
        start: action.start,
        end: action.end,
        quantity: action.quantity,
        progression: action.progression
      }
      case SAVE_ID_LCT:
        return {
          ...state,
          id: action.id
        }
      case CHANGE_VALUE:
        return {
          ...state,
          [action.key]: action.newValue
        }
      case CHANGE_POPUP:
        return {
          ...state,
          popupWindow: action.open,
          popupText: action.popupText
        }
      case SEARCH_VALUE:
        return {
          ...state,
          [action.key]: action.newValue
        }
      case UPDATE_LIST:
        return {
          ...state,
          filterList: action.filterList
        }
      case DELETE_TASKS:
        return {
          ...state,
          filterList: state.filterList.filter((planning) => { return action.id != planning.planning_id }),
        }
      case UPDATE_TASKS:
        return {
          ...state,
          filterList: state.filterList.map(task => {
            if (task.planning_id == action.id) {
              return {
                id: action.id,
                planning_id: action.id,
                name: action.name,
                start: action.start,
                _end: action.end,
                progress: action.progress,
                dependencies: action.dependencies,
                lancement: action.lancement,
                quantity: action.quantity,
                reference: action.name
              }
            }
            else {
              return task;
            }
          }),
        }
    default:
      return state;
  }
};

export default reducer;
