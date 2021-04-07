import {
  CHANGE_VALUE,
} from '../actions';
import {SAVE_OPERATING_TIME,SAVE_SEARCH_REF,SAVE_CALCUL_START} from '../actions/launch';

const initialState = {
  reference:'',
  start_date:'',
  start_hours:'',
  quantity:'',
  end_date:'',
  start:'',
  operating_time:0,
  lancement: [{}],
  calculStart: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
          ...state,
          [action.key]: action.newValue,
      }
    case SAVE_OPERATING_TIME:
      return {
        ...state,
        operating_time: action.operating_time,
      }
    case SAVE_SEARCH_REF:
    return {
      ...state,
      lancement: action.lancement,
    }
    case SAVE_CALCUL_START:
      return {
        ...state,
        calculStart: action.calculStart,
      }
    default:
      return state;
  }
};

export default reducer;
