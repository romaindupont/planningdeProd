import { connect } from 'react-redux';
import SelectProd from '../../components/SelectProd';
import {SaveTasks,changeValue} from '../../actions';
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
    calculStart: state.launch.calculStart,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTasks:(id,name, start, end, progress,dependencies) => {
      dispatch(SaveTasks(id,name, start, end, progress,dependencies));
    },
    saveCalculStart:(calculStart) => {
      dispatch(saveCalculStart(calculStart));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SelectProd);
