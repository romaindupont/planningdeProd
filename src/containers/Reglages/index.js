import { connect } from 'react-redux';
import InputReglages from '../../components/Reglages/Field/Input';
import { changeValue } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.workingDay[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputReglages);
