import { connect } from 'react-redux';
import Lancement from '../../components/Lancement';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.tasks[ownProps.name],
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Lancement);
