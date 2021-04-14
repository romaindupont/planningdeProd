import { connect } from 'react-redux';
import Table from '../../../components/ArticlesPage/Table';


import { changeValue} from '../../../actions';

const mapStateToProps = (state) => ({
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
