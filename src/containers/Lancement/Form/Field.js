import { connect } from 'react-redux';
import Field from '../../../components/Lancement/Form/Field';
import { changeValue } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.lancement[ownProps.name]
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
