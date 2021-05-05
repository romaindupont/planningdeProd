import { connect } from 'react-redux';
import Th from '../../components/Ordonnancement/Table/Th';
import { searchValue } from '../../actions/lancement';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.lancement[ownProps.name],
  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  searchValue: (newValue) => {
    dispatch(searchValue(newValue, ownProps.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Th);
