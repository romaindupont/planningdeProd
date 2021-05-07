import { connect } from 'react-redux';
import FieldArticle from '../../components/ArticlesPage/FieldArticle';
import { changeValue } from '../../actions';
import { saveId } from '../../actions/article';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.articles[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveId: (id) => {
    dispatch(saveId(id));
  },
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldArticle);
