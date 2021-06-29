import { connect } from 'react-redux';
import Tbody from '../../../components/Valorisation/Table/Tbody';

const mapStateToProps = (state, ownProps) => ({
    tableauValo : state.valorisation.tableauValo
});

  const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
