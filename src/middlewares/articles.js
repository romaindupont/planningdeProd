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
import { saveErrorMessage } from '../actions/workingDay';
import { generateId } from '../Utils';

const articles = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_ARTICLE_IN_DB:
    {
      const state = store.getState();
      axios.post('/add',
        {
          reference: state.articles.article_name,
          machine_id: parseInt(state.articles.machine_id),
          tempsop: state.articles.operating_time,
          liaison: parseInt(state.articles.dependencies),
          niveau: state.articles.level,
          description: state.articles.description
        },
        {
          baseURL: 'https://obscure-dawn-65024.herokuapp.com',
        })
        .then((response) => {
          store.dispatch(addArticle(response.data.newArticle));
          store.dispatch(saveErrorMessage(response.data.message));
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
            baseURL: 'https://obscure-dawn-65024.herokuapp.com',
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
              baseURL: 'https://obscure-dawn-65024.herokuapp.com',
            })
            .then((response) => {
              store.dispatch(deleteArticle(state.articles.id));
              store.dispatch(saveErrorMessage(response.data.message));
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
              machine_id: parseInt(state.articles.machine_id),
              tempsop: state.articles.operating_time,
              liaison: parseInt(state.articles.dependencies),
              niveau: state.articles.level,
              description: state.articles.description
            },
            {
              baseURL: 'https://obscure-dawn-65024.herokuapp.com',
            })
              .then((response) => {
                store.dispatch(updateArticle(
                  state.articles.id,
                  state.articles.article_name,
                  state.articles.level,
                  state.articles.machine_id,
                  state.articles.operating_time,
                  state.articles.dependencies,
                  state.articles.description
                ))
                store.dispatch(saveErrorMessage(response.data.message));
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
