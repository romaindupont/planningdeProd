const initialState = {
  articles : [
    {
      id:1,
      article_name:'805B0054',
      level:1,
      machine:,
      operating_time:0,
      description: 'Commande déportée 7+1BP POM',
      dependencies:'',
    },
    {
      id:2,
      article_name:'805B0054-OP1',
      level:2,
      machine_id:1,
      operating_time:9.75,
      description: 'OP1',
      dependencies:1,
    },
    {
      id:3,
      article_name:'805B0054-OP2',
      level:2,
      machine_id:2,
      operating_time:0.25,
      description: 'OP2',
      dependencies:1,
    },
    {
      id:4,
      article_name:'805B0054-OP3',
      level:2,
      machine_id:1,
      operating_time:1.25,
      description: 'OP3',
      dependencies:1,
    },
    {
      id:5,
      article_name:'805B0054-OP4',
      level:2,
      machine_id:1,
      operating_time:10.25,
      description: 'OP4',
      dependencies:1,
    },
    {
      id:6,
      article_name:'805B0054-OP6',
      level:2,
      machine_id:2,
      operating_time:3,
      description: 'OP6',
      dependencies:1,
    },

  ]
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