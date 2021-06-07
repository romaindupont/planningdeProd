import { connect } from 'react-redux';
import Th from '../../components/Ordonnancement/Table/Th';
import { searchValue, update } from '../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.lancement[ownProps.name],
    tasks: state.tasks.tasks,
    numero: state.lancement.numero,
    reference: state.lancement.reference,
    debut: state.lancement.debut,
    fin: state.lancement.fin,
    id: state.lancement.id,
    machine: state.lancement.machine,
    progression: state.lancement.progression
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchValue: (newValue) => {
    dispatch(searchValue(newValue, ownProps.name));
  },
  update: (list, searchWord) => {
    dispatch(update(list, searchWord));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Th);
