import { connect } from 'react-redux';
import Tbody from '../../components/MachinesPage/Tbody';
import { saveIdMachine, searchInfoMachine } from '../../actions/machines';



const mapStateToProps = (state) => ({
  listMachine: state.machines.listMachine,
  wait: state.machines.wait,
});

const mapDispatchToProps = (dispatch) => ({
  saveIdMachine: (id) => {
    dispatch(saveIdMachine(id));
  },
  searchInfoMachine: (id, name, yield_time) => {
    dispatch(searchInfoMachine(id, name, yield_time));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
