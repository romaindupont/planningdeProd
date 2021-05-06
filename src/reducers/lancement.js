import {SAVE_LCT,
  SAVE_ID_LCT,
  CHANGE_POPUP,
  SEARCH_VALUE,
  UPDATE_LIST,
} from '../actions/lancement';
import {
  CHANGE_VALUE,
} from '../actions';

const initialState = {
  id:'',
  lctNumber:'',
  name:'',
  start:'',
  end:'',
  popupWindow : false,
  popupText:'',
  filterList: [],
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
      }
      case SAVE_ID_LCT:
        return {
          ...state,
          id: action.id,
        }
        case CHANGE_VALUE:
          return {
              ...state,
              [action.key]: action.newValue,
          }
        case CHANGE_POPUP:
          return {
            ...state,
            popupWindow: action.open,
            popupText: action.popupText,
          }
        case SEARCH_VALUE:
          return {
              ...state,
              [action.key]: action.newValue,
          }
        case UPDATE_LIST:
          return {
            ...state,
            filterList: action.filterList,
          }
    default:
      return state;
  }
};

export default reducer;
