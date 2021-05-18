import { connect } from 'react-redux';
import ContainerBloc from '../../../components/GanttMachine/ContainerBloc';


const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerBloc);
