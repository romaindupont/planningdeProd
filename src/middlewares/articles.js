import axios from 'axios';
import {
  addArticle,
  ADD_ARTICLE_IN_DB,
  FETCH_ARTICLE,
  saveArticle,
  DELETE_ARTICLE_IN_DB,
  deleteArticle,
  UPDATE_ARTICLE_IN_DB,
  updateArticle
} from '../actions/article';
import { generateId } from '../Utils';

const articles = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_ARTICLE_IN_DB:
    {
      const state = store.getState();
      axios.post('/add',
        {
          reference: state.articles.article_name,
          machine_id: state.articles.machine_id,
          tempsop: state.articles.operating_time,
          liaison: state.articles.dependencies,
          niveau: state.articles.level,
          order_n: parseInt(state.articles.description)
        },
        {
          baseURL: 'http://localhost:5000',
        })
        .then((response) => {
          store.dispatch(addArticle(response.data.newArticle));
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
            store.dispatch(saveArticle(response.data.articlesList));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
      case DELETE_ARTICLE_IN_DB:
        {
          const state = store.getState();
          axios.delete(`/delete/${state.articles.id}`,
            {
              baseURL: 'http://localhost:5000',
            })
            .then((response) => {
              store.dispatch(deleteArticle(state.articles.id));
            })
            .catch((error) => {
              console.error('Error', error);
            });
          break;
        }
        case UPDATE_ARTICLE_IN_DB:
          {
            const state = store.getState();
            axios.put(`/articles/update/${state.articles.id}`,
            {
              reference: state.articles.article_name,
              machine_id: state.articles.machine_id,
              tempsop: state.articles.operating_time,
              liaison: state.articles.dependencies,
              niveau: state.articles.level,
              order_n: parseInt(state.articles.description)
            },
            {
              baseURL: 'http://localhost:5000',
            })
              .then((response) => {
                store.dispatch(updateArticle(
                  state.articles.id,
                  state.articles.article_name,
                  state.articles.level,
                  state.articles.machine_id,
                  state.articles.operating_time,
                  state.articles.dependencies
                ))
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
