import { connect } from 'react-redux';
import Tbody from '../../../components/ArticlesPage/Tbody';
import { changeValue } from '../../../actions';
import { saveId, searchInfo, fetchArticle } from '../../../actions/article';

const mapStateToProps = (state) => ({
  id: state.articles.id,
  articlesList: state.articles.list,
  waitArticle: state.articles.waitArticle,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  saveId: (id) => {
    dispatch(saveId(id));
  },
  searchInfo: (id, article_name, level, machine_id, operating_time, description, dependencies) => {
    dispatch(searchInfo(id, article_name, level, machine_id, operating_time, description, dependencies));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
