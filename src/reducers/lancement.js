import {SAVE_LCT, SAVE_ID_LCT} from '../actions/lancement';

const initialState = {
  id:'',
  lctNumber:'',
  name:'',
  start:'',
  end:'',
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
    default:
      return state;
  }
};

export default reducer;
