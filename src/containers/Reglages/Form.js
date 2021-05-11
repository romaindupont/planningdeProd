import { connect } from 'react-redux';
import FormReglages from '../../components/Reglages/Form';

const mapStateToProps = (state, ownProps) => ({
  workingDayList: state.workingDay.workingDayList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormReglages);
