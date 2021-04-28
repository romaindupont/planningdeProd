import { connect } from 'react-redux';
import Lancement from '../../components/Lancement';
import { fetchPlanning } from '../../actions/launch';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.tasks[ownProps.name],
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  fetchPlanning:() => {
    dispatch(fetchPlanning());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Lancement);
