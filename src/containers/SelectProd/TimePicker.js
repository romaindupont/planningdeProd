import { connect } from 'react-redux';
import TimePicker from '../../components/SelectProd/TimePicker';
import { changeValue } from '../../actions';

const mapStateToProps = (state) => ({
  start_hours: state.launch.start_hours,
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
