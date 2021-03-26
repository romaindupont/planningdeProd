import { connect } from 'react-redux';
import Field from '../../components/Field';

import { changeValue} from '../../actions';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.tasks[ownProps.name],
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);