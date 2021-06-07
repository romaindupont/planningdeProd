import { connect } from 'react-redux';
import FormReglages from '../../components/Reglages/Form';
import { updateWorkingDay } from '../../actions/workingDay';

const mapStateToProps = (state, ownProps) => ({
  workingDayList: state.workingDay.workingDayList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateWorkingDay: (numerojour, open_close, hour1, hour2, hour3, hour4) => {
    dispatch(updateWorkingDay(numerojour, open_close, hour1, hour2, hour3, hour4));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormReglages);
