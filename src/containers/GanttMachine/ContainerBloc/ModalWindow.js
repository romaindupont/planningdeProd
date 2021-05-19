import { connect } from 'react-redux';
import ModalWindow from '../../../components/GanttMachine/ContainerBloc/ModalWindow';


const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
