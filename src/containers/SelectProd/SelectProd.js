import { connect } from 'react-redux';
import SelectProd from '../../components/SelectProd';
import {addTasks,changeValue,updateTasks} from '../../actions';
import {saveCalculStart} from '../../actions/launch';

const mapStateToProps = (state) => (
  {
    tasks: state.tasks.tasks,
    reference: state.launch.reference,
    start_date: state.launch.start_date,
    start_hours: state.launch.start_hours,
    quantity: state.launch.quantity,
    end_date: state.launch.end_date,
    start: state.launch.start,
    operating_time: state.launch.operating_time,
    lancement: state.launch.lancement,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTasks:(id,name, start, end, progress,dependencies) => {
      dispatch(addTasks(id,name, start, end, progress,dependencies));
    },
    updateTasks:(id,name, start, end, progress,dependencies) => {
      dispatch(updateTasks(id,name, start, end, progress,dependencies));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SelectProd);
