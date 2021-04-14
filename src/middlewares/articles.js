import axios from 'axios';
import {addArticle,ADD_ARTICLE,FETCH_ARTICLE, saveArticle,DELETE_ARTICLE} from '../actions/article';
import {generateId} from '../Utils';

const articles = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_ARTICLE:
    {
      const state = store.getState();
      axios.post('/add',{
          reference:state.articles.article_name,
          machine_id:state.articles.machine_id,
          tempsop:state.articles.operating_time,
          liaison:state.articles.dependencies,
          niveau:state.articles.level
      },
        {
          baseURL: 'http://localhost:5000',
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case FETCH_ARTICLE:
      {
        axios.get('/articles',
          {
            baseURL: 'http://localhost:5000',
          })
          .then((response) => {
            store.dispatch(saveArticle(response.data))
            //console.log(response.data);
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
      case DELETE_ARTICLE:
        {
          const state = store.getState();
          //console.log(state.articles.id)
          axios.delete('/delete',{
            id: state.articles.id,
          },
            {
              baseURL: 'http://localhost:5000',
            })
            .then((response) => {
              //store.dispatch(saveArticle(response.data))
              console.log(response);
            })
            .catch((error) => {
              console.error('Error', error);
            });
          break;
        }
    default:
      next(action);
  }
};

export default articles;
