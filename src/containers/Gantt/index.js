import { connect } from 'react-redux';
import Gantt from '../../components/Gantt';

import {
  changeValue,
  addTasks,
  clickTasks,
  updateTasks,
  deleteTasks
} from '../../actions';
import { addPlanningInDb,updatedPlanning,deletePlanning,saveNumeroLct } from '../../actions/launch';

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    id: state.tasks.id,
    name: state.tasks.name,
    start: state.tasks.start,
    end: state.tasks.end,
    progress: state.tasks.progress,
    dependencies: state.tasks.dependencies,
    lancementn: state.tasks.lancementn,
    n_lancement: state.launch.n_lancement,
  });

const mapDispatchToProps = (dispatch) => ({
  addTasks:(id,name, start, end, progress,dependencies,lancement) => {
    dispatch(addPlanningInDb(id,name, start, end, progress,dependencies,lancement));
  },
  clickTasks:(id,name, start, end, progress,dependencies,lancement) => {
    dispatch(clickTasks(id,name, start, end, progress,dependencies,lancement));
  },
  updatedPlanning:(id,name, start, end, progress,dependencies,lancement) => {
    dispatch(updatedPlanning(id,name, start, end, progress,dependencies,lancement));
  },
  deletePlanning:(id) => {
    dispatch(deletePlanning(id));
  },
  saveNumeroLct:(n_lancement) => {
    dispatch(saveNumeroLct(n_lancement));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Gantt);
