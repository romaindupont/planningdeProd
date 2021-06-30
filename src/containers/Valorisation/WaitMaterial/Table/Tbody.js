import { connect } from 'react-redux';
import Tbody from '../../../../components/Valorisation/WaitMaterial/Table/Tbody';
import { saveTransfert, saveIdLct } from '../../../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
    PlanningForMachine : state.machines.PlanningForMachine,
    dateOne: state.valorisation.dateOne,
    dateTwo: state.valorisation.dateTwo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveTransfert: (id, reference, tempsop, _end, quantity) => {
    dispatch(saveTransfert(id, reference, tempsop, _end, quantity));
  },
  saveIdLct: (id) => {
    dispatch(saveIdLct(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
