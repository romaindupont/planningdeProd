import { connect } from 'react-redux';
import ModalWindow from '../../../components/GanttMachine/ContainerBloc/ModalWindow';
import { clickTasks } from '../../../actions';

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    MachinePlanning: state.machines.MachinePlanning
});

const mapDispatchToProps = (dispatch) => ({
  clickTasks: (id,name, start, end, progress,dependencies,lancement, quantity) => {
    dispatch(clickTasks(id,name, start, end, progress,dependencies,lancement, quantity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
