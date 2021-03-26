import { connect } from 'react-redux';
import FieldArticle from '../../components/ArticlesPage/FieldArticle';

import { changeValue} from '../../actions';
import {saveId} from '../../actions/article';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.articles[ownProps.name],
  });

const mapDispatchToProps = (dispatch) => ({
  saveId: (id) => {
    dispatch(saveId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldArticle);
