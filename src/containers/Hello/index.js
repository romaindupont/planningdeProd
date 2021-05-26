import { connect } from 'react-redux';
import App from '../../App.tsx';
import { fetchPlanning } from '../../actions/launch';
import { fetchArticle } from '../../actions/article';
import { fetchWorkingDay } from '../../actions/workingDay';
import { fetchMachine, fetchMachinePlanning } from '../../actions/machines';

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  id: state.lancement.id,
  lctNumber: state.lancement.lctNumber,
  name: state.lancement.name,
  start: state.lancement.start,
  end: state.lancement.end,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanning: () => {
    dispatch(fetchPlanning());
  },
  fetchArticle: () => {
    dispatch(fetchArticle());
  },
  fetchWorkingDay: () => {
    dispatch(fetchWorkingDay());
  },
  fetchMachine: () => {
    dispatch(fetchMachine());
  },
  fetchMachinePlanning: () => {
    dispatch(fetchMachinePlanning());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
