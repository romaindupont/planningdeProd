import { connect } from 'react-redux';
import Quantity from '../../components/SelectProd/Quantity';
import { changeValue } from '../../actions';

const mapStateToProps = (state,ownProps) => ({
    currentValue: state.launch[ownProps.name],
    nameArticleSelect: state.launch.reference
  });

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
