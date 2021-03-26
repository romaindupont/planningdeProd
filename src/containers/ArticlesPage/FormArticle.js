import { connect } from 'react-redux';
import FormArticle from '../../components/ArticlesPage/FormArticle';

import {addArticle, updateArticle, deleteArticle} from '../../actions/article';


const mapStateToProps = (state) => ({
    articleList: state.articles.articles,
    id: state.articles.id,
  });

const mapDispatchToProps = (dispatch) => ({
  addArticle: (id,article_name,level,machine_id,operating_time,description,dependencies) => {
    dispatch(addArticle(id,article_name,level,machine_id,operating_time,description,dependencies));
  },
  updateArticle: (id,article_name,level,machine_id,operating_time,description,dependencies) => {
    dispatch(updateArticle(id,article_name,level,machine_id,operating_time,description,dependencies));
  },
  deleteArticle:(id) => {
    dispatch(deleteArticle(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormArticle);
