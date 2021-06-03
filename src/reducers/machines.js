import {
  SAVE_CONTAINER_DATE,
  SAVE_MACHINE_LIST,
  SAVE_MACHINE_PLANNING,
  SAVE_PLANNING_MACHINE,
  SAVE_TITLE_MACHINE,
  SAVE_ID_MACHINE,
  SEARCH_INFO_MACHINE,
  ADD_MACHINE_STATE,
  UPDATE_MACHINE_STATE,
  DELETE_MACHINE_STATE
} from '../actions/machines';
import { CHANGE_VALUE } from '../actions';
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
  name: '',
  wait:true,
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
        wait:false,
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
    case SEARCH_INFO_MACHINE:
      return {
        ...state,
        id: action.id,
        name: action.name,
        yield_time: action.yield_time
      }
    case SAVE_ID_MACHINE:
      return {
        ...state,
        id: action.id
      }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue
      }
    case ADD_MACHINE_STATE:
      return {
        ...state,
        listMachine: [
          ...state.listMachine,
          {
            id: action.id,
            name: action.name,
            yield_time: action.yield_time
          },
        ]
      }
    case UPDATE_MACHINE_STATE:
      return {
        ...state,
        listMachine: state.listMachine.map(machine => {
          if(machine.id === action.id) {
            return {
              id: action.id,
              name: action.name,
              yield_time: action.yield_time
            }
          }
          else {
            return machine;
          }
        }),
        id: '',
        name: '',
        yield_time: ''
      }
    case DELETE_MACHINE_STATE:
      return {
        listMachine: state.listMachine.filter((machine) => {
           return machine.id !== action.id
          }),
        id:'',
        name: '',
        yield_time: ''
      }
    default:
      return state;
  }
};

export default reducer;
