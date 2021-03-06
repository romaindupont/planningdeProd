import { CHANGE_VALUE } from '../actions';
import {
  SAVE_ID,
  SEARCH_INFO,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  SAVE_ARTICLE,
} from '../actions/article';

const initialState = {
  articles : [
    {
      id:1,
      article_name:'805B0054',
      level:1,
      machine:null,
      operating_time:20.26,
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
    {
      id:7,
      article_name:'805B0055',
      level:1,
      machine:null,
      operating_time:3,
      description: 'Commande POM',
      dependencies:'',
    },
    {
      id:8,
      article_name:'805B0055-OP1',
      level:2,
      machine_id:2,
      operating_time:3,
      description: 'OP1',
      dependencies:7,
    },

  ],
  articleList:{},
  list: [],
  id:'',
  article_name:'',
  level:null,
  machine_id:null,
  operating_time:null,
  description: '',
  dependencies:null,
  waitArticle:true,
  reference:'',
  tempsop: '',
  liason:'',
  niveau:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue
      }
    case SAVE_ID:
      return {
        ...state,
        id: action.id
      }
    case SEARCH_INFO:
      return {
        ...state,
        id: action.id,
        article_name: action.article_name,
        level: action.level,
        machine_id: action.machine_id,
        operating_time: action.operating_time,
        description: action.description,
        dependencies: action.dependencies
      }
    case ADD_ARTICLE:
      return {
        ...state,
        list: [
          ...state.list,
          action.newarticle
        ],
        id:'',
        article_name:'',
        level:'',
        machine_id:'',
        operating_time:'',
        description: '',
        dependencies:''
      };
    case UPDATE_ARTICLE:
        return {
          ...state,
          list: state.list.map(article => {
            if(article.id === action.id) {
              return {
                id: article.id,
                reference: action.article_name,
                niveau: action.level,
                machine_id: action.machine_id,
                tempsop: action.operating_time,
                description: action.description,
                dependencies: action.dependencies,
                liaison: action.dependencies
              }
            }
            else {
              return article;
            }
          }),
          id:'',
          article_name:'',
          level:'',
          machine_id:'',
          operating_time:'',
          description: '',
          dependencies:''
      }
    case DELETE_ARTICLE:
      return {
        list: state.list.filter((article) => { return action.id !== article.id; }),
        id:'',
        article_name:'',
        level:'',
        machine_id:'',
        operating_time:'',
        description: '',
        dependencies:''
      }
      case SAVE_ARTICLE:
        return {
          ...state,
          list: action.articles,
          waitArticle: false
        }
    default:
      return state;
  }
};

export default reducer;
