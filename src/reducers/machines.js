import {
  SAVE_CONTAINER_DATE,
  SAVE_MACHINE_LIST,
  SAVE_MACHINE_PLANNING,
  SAVE_PLANNING_MACHINE,
  SAVE_TITLE_MACHINE
} from '../actions/machines';
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
  listMachine: [],
  MachinePlanning: [],
  PlanningForMachine: [],
  title: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONTAINER_DATE:
      return {
        ...state,
        dt: action.dt,
      };
    case SAVE_MACHINE_LIST:
      return {
        ...state,
        listMachine: action.machineList,
      }
    case SAVE_MACHINE_PLANNING:
      return {
        ...state,
        MachinePlanning: action.updateList,
      }
    case SAVE_PLANNING_MACHINE:
      return {
        ...state,
        PlanningForMachine: action.machinePlanning,
      }
    case SAVE_TITLE_MACHINE:
    return {
      ...state,
      title: action.title,
    }
    default:
      return state;
  }
};

export default reducer;
