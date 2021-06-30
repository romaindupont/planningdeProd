import { connect } from 'react-redux';
import Tbody from '../../../components/Valorisation/Table/Tbody';

const mapStateToProps = (state, ownProps) => ({
  tableauValo : state.valorisation.tableauValo,
  dateOne: state.valorisation.dateOne,
  dateTwo: state.valorisation.dateTwo
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
