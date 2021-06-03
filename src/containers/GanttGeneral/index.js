import { connect } from 'react-redux';
import GanttGeneral from '../../components/GanttGeneral';
import { saveContainerDate } from '../../actions/machines';


const mapStateToProps = (state) => ({
    dt: state.machines.dt,
    tasks: state.tasks.tasks,
    title: state.machines.title,
    MachinePlanning: state.machines.MachinePlanning,
});

const mapDispatchToProps = (dispatch) => ({
  saveContainerDate: (dt) => {
    dispatch(saveContainerDate(dt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GanttGeneral);
