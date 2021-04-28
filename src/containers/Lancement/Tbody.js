import { connect } from 'react-redux';
import Tbody from '../../components/Lancement/Table/Tbody';
import { fetchPlanning } from '../../actions/launch';

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  fetchPlanning:() => {
    dispatch(fetchPlanning());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
