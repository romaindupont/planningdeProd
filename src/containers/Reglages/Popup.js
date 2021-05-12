import { connect } from 'react-redux';
import Popup from '../../components/Reglages/Popup';

const mapStateToProps = (state, ownProps) => ({
  message: state.workingDay.ErrorList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
