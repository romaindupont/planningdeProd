import { connect } from 'react-redux';
import Tbody from '../../../../components/Valorisation/Table/Tbody';

const mapStateToProps = (state, ownProps) => ({
    PlanningForMachine : state.machines.PlanningForMachine
});

  const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
