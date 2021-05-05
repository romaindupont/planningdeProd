import { connect } from 'react-redux';
import Tbody from '../../components/Ordonnancement/Table/Tbody';
import { searchValue } from '../../actions/lancement';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.lancement[ownProps.name],
    numero: state.lancement.numero,
    reference: state.lancement.reference,
    debut: state.lancement.debut,
    fin: state.lancement.fin,
    id: state.lancement.id,
    machine: state.lancement.machine,
    progression: state.lancement.progression,
    tasks: state.tasks.tasks,
  });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
