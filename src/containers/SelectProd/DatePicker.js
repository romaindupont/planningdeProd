import { connect } from 'react-redux';
import DatePicker from '../../components/SelectProd/DatePicker';
import { changeValue } from '../../actions';


const mapStateToProps = (state, ownProps) => ({
    currentValue: state.launch[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
