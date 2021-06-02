import { connect } from 'react-redux';
import FormMachine from '../../components/MachinesPage/FormMachine';
import { addMachine, updateMachine, deleteMachine } from '../../actions/machines';


const mapStateToProps = (state) => ({
    id: state.machines.id,
    listMachine: state.machines.listMachine
});

 const mapDispatchToProps = (dispatch) => ({
  addMachine: (name, yield_time) => {
    dispatch(addMachine(name, yield_time));
  },
  updateMachine: (id, name, yield_time) => {
    dispatch(updateMachine(id, name, yield_time));
  },
  deleteMachine: (id) => {
    dispatch(deleteMachine(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(FormMachine);
