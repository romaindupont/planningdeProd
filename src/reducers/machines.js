import { SAVE_CONTAINER_DATE } from '../actions/machines';
import { DatetimeNow } from '../Utils/datetimeNow';

const initialState = {
  machine:
  [
    {
      id: 1,
      machine:'M8',
      yield_time : 50,
    },
    {
      id: 2,
      machine:'NEO',
      yield_time : 40,
    }
  ],
  id:'',
  machine: '',
  yield_time:'',
  dt: DatetimeNow(),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONTAINER_DATE:
      return {
        ...state,
        dt: action.dt,
      };

    default:
      return state;
  }
};

export default reducer;
