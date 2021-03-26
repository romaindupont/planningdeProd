import { connect } from 'react-redux';
import Gantt from '../../components/Gantt';

import { 
  changeValue,
  SaveTasks,
  clickTasks,
  updateTasks,
  deleteTasks
} from '../../actions';

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
    dispatch(SaveTasks(id,name, start, end, progress,dependencies));
  },
  clickTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(clickTasks(id,name, start, end, progress,dependencies));
  },
  updateTasks:(id,name, start, end, progress,dependencies) => {
    dispatch(updateTasks(id,name, start, end, progress,dependencies));
  },
  deleteTasks:(id) => {
    dispatch(deleteTasks(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gantt);