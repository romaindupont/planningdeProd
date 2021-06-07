import { connect } from 'react-redux';
import FormArticle from '../../components/ArticlesPage/FormArticle';
import { addArticleInDb, updateArticleInDb, deleteArticleInDb } from '../../actions/article';


const mapStateToProps = (state) => ({
    articleList: state.articles.list,
    id: state.articles.id
});

const mapDispatchToProps = (dispatch) => ({
  addArticle: (article_name, level, machine_id, operating_time, description, dependencies) => {
    dispatch(addArticleInDb(article_name, level, machine_id, operating_time, description, dependencies));
  },
  updateArticle: (id, article_name, level, machine_id, operating_time, description, dependencies) => {
    dispatch(updateArticleInDb(id, article_name, level, machine_id, operating_time, description, dependencies));
  },
  deleteArticle: (id) => {
    dispatch(deleteArticleInDb(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormArticle);
