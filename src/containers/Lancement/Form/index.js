import { connect } from 'react-redux';
import Form from '../../../components/Lancement/Form';



const mapStateToProps = (state) => ({
    id: state.lancement.id,
  });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
