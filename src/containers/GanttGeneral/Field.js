import { connect } from 'react-redux';
import Field from '../../components/GanttGeneral/Field';
import { changeValue } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.lancement[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
