import { connect } from 'react-redux';
import App from '../../App.tsx';
import { fetchPlanning } from '../../actions/launch';
import {fetchArticle} from '../../actions/article';

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  id: state.lancement.id,
  lctNumber: state.lancement.lctNumber,
  name: state.lancement.name,
  start: state.lancement.start,
  end: state.lancement.end,

  });

const mapDispatchToProps = (dispatch) => ({
  fetchPlanning:() => {
    dispatch(fetchPlanning());
  },
  fetchArticle:() => {
    dispatch(fetchArticle());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
