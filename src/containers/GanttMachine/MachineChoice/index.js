import { connect } from 'react-redux';
import MachineChoice from '../../../components/GanttMachine/MachineChoice';
import { saveMachinePlanning, saveTitleMachine } from '../../../actions/machines';

const mapStateToProps = (state) => ({
  MachinePlanning: state.machines.MachinePlanning,
  PlanningForMachine: state.machines.PlanningForMachine,
});

const mapDispatchToProps = (dispatch) => ({
  saveMachinePlanning: (list, searchWord) => {
    dispatch(saveMachinePlanning(list, searchWord));
  },
  saveTitleMachine: (title) => {
    dispatch(saveTitleMachine(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MachineChoice);
