import { connect } from 'react-redux';
import Popup from '../../components/Popup';
import { changePopup } from '../../actions/lancement';

const mapStateToProps = (state) => ({
    popupWindow : state.lancement.popupWindow,
    popupText: state.lancement.popupText
});

const mapDispatchToProps = (dispatch) => ({
  changePopup: (open, popupText) => {
    dispatch(changePopup(open, popupText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
