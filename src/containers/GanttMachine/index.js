import { connect } from 'react-redux';
import GanttMachine from '../../components/GanttMachine';
import { saveContainerDate } from '../../actions/machines';


const mapStateToProps = (state) => ({
    dt: state.machines.dt,
    tasks: state.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  saveContainerDate: (dt) => {
    dispatch(saveContainerDate(dt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GanttMachine);
