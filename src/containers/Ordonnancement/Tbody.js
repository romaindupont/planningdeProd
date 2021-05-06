import { connect } from 'react-redux';
import Tbody from '../../components/Ordonnancement/Table/Tbody';
import { searchValue, update } from '../../actions/lancement';

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
    filterList: state.lancement.filterList,
  });

  const mapDispatchToProps = (dispatch,ownProps) => ({
    update: (list, searchWord) => {
      dispatch(update(list, searchWord));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
