import { connect } from 'react-redux';
import Gantt from '../../components/Gantt';

import {
  changeValue,
  addTasks,
  clickTasks,
  updateTasks,
  deleteTasks
} from '../../actions';
import { fetchPlanning, addPlanningInDb } from '../../actions/launch';

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    id: state.tasks.id,
    name: state.tasks.name,
    start: state.tasks.start,
    end: state.tasks.end,
    progress: state.tasks.progress,
    dependencies: state.tasks.dependencies,
  });

const mapDispatchToProps = (dispatch) => ({
  addTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(addPlanningInDb(id,name, start, end, progress,dependencies));
  },
  clickTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(clickTasks(id,name, start, end, progress,dependencies));
  },
  updateTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(updateTasks(id,name, start, end, progress,dependencies));
  },
  deleteTasks:(id) => {
    dispatch(deleteTasks(id));
  },
  fetchPlanning:() => {
    dispatch(fetchPlanning());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gantt);
