import { connect } from 'react-redux';
import SelectProd from '../../components/SelectProd';
import {changeValue} from '../../actions';

const mapStateToProps = (state) => (
  {
    reference: state.launch.reference,
    start_date: state.launch.start_date,
    start_hours: state.launch.start_hours,
    quantity: state.launch.quantity,
    end_date: state.launch.end_date,
    start: state.launch.start,
    operating_time: state.launch.operating_time,
    lancement: state.launch.lancement,
  });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProd);
