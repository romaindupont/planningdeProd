
const initialState = {
  tableauValo:
  [
    {
      id: 1,
      reference:'804A0155',
      quantity : 50,
      tempsOp : 2.52,
      dateFin : "30/06/2021",
      cout: 10.52,
      montant: 100.52
    },
    {
      id: 2,
      reference:'804A0154',
      quantity : 50,
      tempsOp : 4.52,
      dateFin : "30/06/2021",
      cout: 10.52,
      montant: 400.52
    }
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
/*     case SAVE_WORKING_DAY_LIST:
      return {
      }; */
    default:
      return state;
  }
};

export default reducer;
