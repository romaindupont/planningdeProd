import { connect } from 'react-redux';
import Form from '../../../../components/Valorisation/WaitMaterial/Form';
import { transfertRefToValo, updatedProgress, addToValo } from '../../../../actions/valorisation';
import { changePopup } from '../../../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.valorisation[ownProps.name],
    popupWindow : state.lancement.popupWindow,
    choraire: state.valorisation.choraire
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  transfertRefToValo: (id, planning_id, reference, _end, quantity, cout, montant) => {
    dispatch(transfertRefToValo(id, planning_id, reference, _end, quantity, cout, montant));
  },
  updatedProgress: (planning_id, progress) => {
    dispatch(updatedProgress(planning_id, progress));
  },
  changePopup: (open, popupText) => {
    dispatch(changePopup(open, popupText));
  },
  addToValo: (planning_id, cout, montant) => {
    dispatch(addToValo(planning_id, cout, montant));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
