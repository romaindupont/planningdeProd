import axios from 'axios';

const machine = (store) => (next) => (action) => {
  switch (action.type) {
    /* case UPDATE_WORKING_DAY:
      {
        const state = store.getState();
        axios.put("/reglages/update",
          {
            numerojour: action.numerojour,
            open_close: action.open_close,
            hour1: action.hour1,
            hour2: action.hour2,
            hour3: action.hour3,
            hour4: action.hour4,
          },
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(saveErrorMessage(response.data.message));
          })
          .catch((error) => {
            store.dispatch(saveErrorMessage(error));
            //console.error('Error', error);
          });
        break;
      } */
    default:
      next(action);
  }
};

export default machine;
