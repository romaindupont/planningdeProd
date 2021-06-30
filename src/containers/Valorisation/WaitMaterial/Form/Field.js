import { connect } from 'react-redux';
import Field from '../../../../components/Valorisation/WaitMaterial/Form/Field';
import { changeValue } from '../../../../actions';

const mapStateToProps = (state, ownProps) => ({
    currentValue: state.valorisation[ownProps.name]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
