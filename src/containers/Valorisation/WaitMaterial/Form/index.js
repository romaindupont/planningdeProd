import { connect } from 'react-redux';
import Form from '../../../../components/Valorisation/WaitMaterial/Form';
import { transfertRefToValo, updatedProgress } from '../../../../actions/valorisation';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.valorisation[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  transfertRefToValo: (id, planning_id, reference, tempsop, _end, quantity, cout, montant) => {
    dispatch(transfertRefToValo(id, planning_id, reference, tempsop, _end, quantity, cout, montant));
  },
  updatedProgress: (planning_id, progress) => {
    dispatch(updatedProgress(planning_id, progress));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
