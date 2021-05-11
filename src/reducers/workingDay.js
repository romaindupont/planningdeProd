import { SAVE_WORKING_DAY_LIST } from '../actions/workingDay';
import { CHANGE_VALUE } from '../actions';

const initialState = {
  workingDayList: [],
  '0-h1':'',
  '0-h2':'',
  '0-h3':'',
  '0-h4':'',
  '1-h1':'08:00:00',
  '1-h2':'12:00:00',
  '1-h3':'12:30:00',
  '1-h4':'16:20:00',
  '2-h1':'08:00:00',
  '2-h2':'12:00:00',
  '2-h3':'12:30:00',
  '2-h4':'16:20:00',
  '3-h1':'08:00:00',
  '3-h2':'12:00:00',
  '3-h3':'12:30:00',
  '3-h4':'16:20:00',
  '4-h1':'08:00:00',
  '4-h2':'12:00:00',
  '4-h3':'12:30:00',
  '4-h4':'16:20:00',
  '5-h1':'08:00:00',
  '5-h2':'12:00:00',
  '5-h3':'12:30:00',
  '5-h4':'16:20:00',
  '6-h1':'',
  '6-h2':'',
  '6-h3':'',
  '6-h4':'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WORKING_DAY_LIST:
      return {
        ...state,
        workingDayList: action.workingDayList
      };
      case CHANGE_VALUE:
        return {
          ...state,
          [action.key]: action.newValue
        }
    default:
      return state;
  }
};

export default reducer;
