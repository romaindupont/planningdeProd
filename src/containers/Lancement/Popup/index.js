import { connect } from 'react-redux';
import Popup from '../../../components/Lancement/Popup';
import { updatedLancement } from '../../../actions/lancement';


const mapStateToProps = (state) => ({
    id: state.lancement.id,
    name: state.lancement.name,
    start: state.lancement.start,
    end: state.lancement.end,
    lctNumber: state.lancement.lctNumber
});

const mapDispatchToProps = (dispatch) => ({
  updatedLancement: (start, end) => {
    dispatch(updatedLancement(start, end));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
