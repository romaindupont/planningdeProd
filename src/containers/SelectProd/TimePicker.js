import { connect } from 'react-redux';
import TimePicker from '../../components/SelectProd/TimePicker';
import { changeValue } from '../../actions';
import { saveTimePicker } from '../../actions/launch';

const mapStateToProps = (state) => ({
  start_hours: state.launch.start_hours,
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  saveTimePicker: (time) => {
    dispatch(saveTimePicker(time));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
