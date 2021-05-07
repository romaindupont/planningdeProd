import { connect } from 'react-redux';
import Tbody from '../../components/Ordonnancement/Table/Tbody';
import { searchValue, update, saveLct, saveIdLct } from '../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
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
    quantity: state.lancement.quantity
});

  const mapDispatchToProps = (dispatch, ownProps) => ({
    update: (list, searchWord) => {
      dispatch(update(list, searchWord));
    },
    saveLct: (id, lancement, name, start, end, quantity, progression) => {
      dispatch(saveLct(id, lancement, name, start, end, quantity, progression));
    },
    saveIdLct: (id) => {
      dispatch(saveIdLct(id));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
