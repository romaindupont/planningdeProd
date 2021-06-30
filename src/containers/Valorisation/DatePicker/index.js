import { connect } from 'react-redux';
import TwoDatePicker from '../../../components/Valorisation/DatePicker';
import { saveDateSearch } from '../../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
  dateOne: state.valorisation.dateOne,
  dateTwo: state.valorisation.dateTwo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveDateSearch: (dateOne, dateTwo) => {
    dispatch(saveDateSearch(dateOne, dateTwo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TwoDatePicker);
