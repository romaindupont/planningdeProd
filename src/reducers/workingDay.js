import { SAVE_WORKING_DAY_LIST,SAVE_ERROR_MESSAGE } from '../actions/workingDay';
import { CHANGE_VALUE } from '../actions';

const initialState = {
  workingDayList: [],
  '0-h1':'',
  '0-h2':'',
  '0-h3':'',
  '0-h4':'',
  '1-h1':'',
  '1-h2':'',
  '1-h3':'',
  '1-h4':'',
  '2-h1':'',
  '2-h2':'',
  '2-h3':'',
  '2-h4':'',
  '3-h1':'',
  '3-h2':'',
  '3-h3':'',
  '3-h4':'',
  '4-h1':'',
  '4-h2':'',
  '4-h3':'',
  '4-h4':'',
  '5-h1':'',
  '5-h2':'',
  '5-h3':'',
  '5-h4':'',
  '6-h1':'',
  '6-h2':'',
  '6-h3':'',
  '6-h4':'',
  ErrorList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WORKING_DAY_LIST:
      return {
        ...state,
        workingDayList: action.workingDayList,
        '0-h1': action.workingDayList[0].hour1,
        '0-h2': action.workingDayList[0].hour2,
        '0-h3': action.workingDayList[0].hour3,
        '0-h4': action.workingDayList[0].hour4,
        '1-h1': action.workingDayList[1].hour1,
        '1-h2': action.workingDayList[1].hour2,
        '1-h3': action.workingDayList[1].hour3,
        '1-h4': action.workingDayList[1].hour4,
        '2-h1': action.workingDayList[2].hour1,
        '2-h2': action.workingDayList[2].hour2,
        '2-h3': action.workingDayList[2].hour3,
        '2-h4': action.workingDayList[2].hour4,
        '3-h1': action.workingDayList[3].hour1,
        '3-h2': action.workingDayList[3].hour2,
        '3-h3': action.workingDayList[3].hour3,
        '3-h4': action.workingDayList[3].hour4,
        '4-h1': action.workingDayList[4].hour1,
        '4-h2': action.workingDayList[4].hour2,
        '4-h3': action.workingDayList[4].hour3,
        '4-h4': action.workingDayList[4].hour4,
        '5-h1': action.workingDayList[5].hour1,
        '5-h2': action.workingDayList[5].hour2,
        '5-h3': action.workingDayList[5].hour3,
        '5-h4': action.workingDayList[5].hour4,
        '6-h1': action.workingDayList[6].hour1,
        '6-h2': action.workingDayList[6].hour2,
        '6-h3': action.workingDayList[6].hour3,
        '6-h4': action.workingDayList[6].hour4,
      };
      case CHANGE_VALUE:
        return {
          ...state,
          [action.key]: action.newValue
        }
      case SAVE_ERROR_MESSAGE:
        return {
          ...state,
          ErrorList: action.message,
        }
    default:
      return state;
  }
};

export default reducer;
