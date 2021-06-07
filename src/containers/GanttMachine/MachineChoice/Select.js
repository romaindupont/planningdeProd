import { connect } from 'react-redux';
import Select from '../../../components/GanttMachine/MachineChoice/Select';

const mapStateToProps = (state) => ({
  listMachine: state.machines.listMachine
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Select);
