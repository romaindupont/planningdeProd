import { connect } from 'react-redux';
import PopupStart from '../../../components/Ordonnancement/PopupStart';
import { updatedLancement, updatedQuantity } from '../../../actions/lancement';


const mapStateToProps = (state) => ({
    id: state.lancement.id,
    name: state.lancement.name,
    start: state.lancement.start,
    end: state.lancement.end,
    lctNumber: state.lancement.lctNumber,
    quantity: state.lancement.quantity,
    articleList: state.articles.list
});

const mapDispatchToProps = (dispatch) => ({
  updatedLancement: (start, end) => {
    dispatch(updatedLancement(start, end));
  },
  updatedQuantity: (quantity) => {
    dispatch(updatedQuantity(quantity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupStart);
