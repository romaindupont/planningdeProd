

const initialState = {
  machine: [
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
  ]
  id:'',
  machine: '',
  yield_time:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
/*     case CHANGE_VIEW_SIDE_BAR:
      return {
        ...state,
        hide: false,
      }; */

    default:
      return state;
  }
};

export default reducer;