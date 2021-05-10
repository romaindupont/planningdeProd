import { connect } from 'react-redux';
import Ordonnancement from '../../components/Ordonnancement';


const mapStateToProps = (state,ownProps) => ({
  id: state.lancement.id,
  name: state.lancement.name,
  start: state.lancement.start,
  end: state.lancement.end,
  lctNumber: state.lancement.lctNumber,
  quantity: state.lancement.quantity,
  articleList: state.articles.list
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Ordonnancement);
