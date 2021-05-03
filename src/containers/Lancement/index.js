import { connect } from 'react-redux';
import Lancement from '../../components/Lancement';
import { changePopup } from '../../actions/lancement';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.tasks[ownProps.name],
    popupWindow : state.lancement.popupWindow,
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  changePopup: (open) => {
    dispatch(changePopup(open));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Lancement);
