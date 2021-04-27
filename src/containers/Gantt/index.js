import { connect } from 'react-redux';
import Gantt from '../../components/Gantt';

import {
  changeValue,
  addTasks,
  clickTasks,
  updateTasks,
  deleteTasks
} from '../../actions';
import { fetchPlanning, addPlanningInDb,updatedPlanning,deletePlanning } from '../../actions/launch';

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    id: state.tasks.id,
    name: state.tasks.name,
    start: state.tasks.start,
    end: state.tasks.end,
    progress: state.tasks.progress,
    dependencies: state.tasks.dependencies,
    n_lancement:state.launch.n_lancement,
  });

const mapDispatchToProps = (dispatch) => ({
  addTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(addPlanningInDb(id,name, start, end, progress,dependencies));
  },
  clickTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(clickTasks(id,name, start, end, progress,dependencies));
  },
  updatedPlanning:(id,name, start, end, progress,dependencies) => {
    dispatch(updatedPlanning(id,name, start, end, progress,dependencies));
  },
  deletePlanning:(id) => {
    dispatch(deletePlanning(id));
  },
  fetchPlanning:() => {
    dispatch(fetchPlanning());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gantt);
