import { connect } from 'react-redux';
import GanttGeneral from '../../components/GanttGeneral';
import { saveContainerDate } from '../../actions/machines';


const mapStateToProps = (state) => ({
    dt: state.machines.dt,
    tasks: state.tasks.tasks,
    title: state.machines.title,
    MachinePlanning: state.machines.MachinePlanning,
    id: state.tasks.id,
    name: state.tasks.name,
    start: state.tasks.start,
    end: state.tasks.end,
    progress: state.tasks.progress,
    dependencies: state.tasks.dependencies,
    lancementn: state.tasks.lancementn,
    n_lancement: state.launch.n_lancement,
    quantity: state.tasks.quantity
});

const mapDispatchToProps = (dispatch) => ({
  saveContainerDate: (dt) => {
    dispatch(saveContainerDate(dt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GanttGeneral);
