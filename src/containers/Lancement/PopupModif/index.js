import { connect } from 'react-redux';
import PopupModif from '../../../components/Lancement/PopupModif';
import { changeValue } from '../../../actions';
import { updatedQuantity } from '../../../actions/lancement';

const mapStateToProps = (state, ownProps) => ({
    id: state.lancement.id,
    name: state.lancement.name,
    start: state.lancement.start,
    end: state.lancement.end,
    lctNumber: state.lancement.lctNumber,
    currentValue: state.lancement[ownProps.name],
    popupWindow : state.lancement.popupWindow
});

  const mapDispatchToProps = (dispatch, ownProps) => ({
    updatedQuantity: (quantity) => {
     dispatch(updatedQuantity(quantity));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(PopupModif);
