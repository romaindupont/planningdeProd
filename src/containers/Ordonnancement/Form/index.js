import { connect } from 'react-redux';
import FormOrdo from '../../../components/Ordonnancement/Form';

const mapStateToProps = (state) => ({
    id: state.lancement.id
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormOrdo);
