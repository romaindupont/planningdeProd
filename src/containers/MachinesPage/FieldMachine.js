import { connect } from 'react-redux';
import FieldMachine from '../../components/MachinesPage/FieldMachine';
import { changeValue } from '../../actions';


const mapStateToProps = (state, ownProps) => ({
  currentValue: state.machines[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldMachine);
