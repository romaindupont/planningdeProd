import { connect } from 'react-redux';
import PopupEnd from '../../../components/Lancement/PopupEnd';
import {updatedEnd} from '../../../actions/lancement';


const mapStateToProps = (state) => ({
    id: state.lancement.id,
    name: state.lancement.name,
    start: state.lancement.start,
    end: state.lancement.end,
    lctNumber: state.lancement.lctNumber,
  });

  const mapDispatchToProps = (dispatch) => ({
    updatedEnd: (start,end) => {
      dispatch(updatedEnd(start,end));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(PopupEnd);
