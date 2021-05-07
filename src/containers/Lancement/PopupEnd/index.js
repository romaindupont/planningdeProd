import { connect } from 'react-redux';
import PopupEnd from '../../../components/Lancement/PopupEnd';
import { updatedEnd, changePopup } from '../../../actions/lancement';
import { changeValue } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    id: state.lancement.id,
    name: state.lancement.name,
    start: state.lancement.start,
    end: state.lancement.end,
    lctNumber: state.lancement.lctNumber,
    currentValue: state.lancement[ownProps.name],
    popupWindow : state.lancement.popupWindow,
});

  const mapDispatchToProps = (dispatch, ownProps) => ({
    updatedEnd: (start, end) => {
      dispatch(updatedEnd(start, end));
    },
    changeValue: (newValue) => {
      dispatch(changeValue(newValue, ownProps.name));
    },
    changePopup: (open, popupText) => {
      dispatch(changePopup(open, popupText));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(PopupEnd);
