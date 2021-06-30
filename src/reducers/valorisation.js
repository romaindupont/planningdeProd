import { SAVE_TRANSFERT, SAVE_DATE_SEARCH } from "../actions/lancement";
import { CHANGE_VALUE } from "../actions";
import { TRANSFERT_REF_TO_VALO } from '../actions/valorisation';

const initialState = {
  tableauValo:
  [
    {
      id: 1,
      reference:'804A0155',
      planning_id: 154,
      quantity : 50,
      tempsop : 2.52,
      _end : "30/06/2021",
      cout: 10.52,
      montant: 100.52
    },
    {
      id: 2,
      reference:'804A0154',
      planning_id: 155,
      quantity : 50,
      tempsop : 4.52,
      _end : "07/07/2021",
      cout: 10.52,
      montant: 400.52
    }
  ],
  planning_id: '',
  reference: '',
  tempsop: '',
  _end: '',
  quantity: '',
  cout:'',
  montant:'',
  dateOne:'',
  dateTwo:''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRANSFERT:
      return {
        ...state,
        planning_id: action.id,
        reference: action.reference,
        tempsop: action.tempsop,
        _end: action._end,
        quantity: action.quantity,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue
        }
    case SAVE_DATE_SEARCH:
      return {
        ...state,
        dateOne: action.dateOne,
        dateTwo: action.dateTwo
      }
    case TRANSFERT_REF_TO_VALO:
      return {
        ...state,
        tableauValo: [
          ...state.tableauValo,
          {
            id: action.id,
            reference: action.reference,
            planning_id: action.planning_id,
            quantity : action.quantity,
            tempsop : action.tempsop,
            _end : action._end,
            cout: action.cout,
            montant: action.montant
          }
        ]
      }
    default:
      return state;
  }
};

export default reducer;
