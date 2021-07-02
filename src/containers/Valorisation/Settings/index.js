import { connect } from 'react-redux';
import Settings from '../../../components/Valorisation/Settings';
import { updateSettings } from '../../../actions/valorisation';
import { changeValue } from '../../../actions';


const mapStateToProps = (state, ownProps) => ({
  choraire: state.valorisation.choraire,
  currentValueSetting: state.valorisation[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSettings: (id, choraire) => {
    dispatch(updateSettings(id, choraire));
  },
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
