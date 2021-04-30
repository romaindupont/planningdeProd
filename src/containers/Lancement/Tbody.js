import { connect } from 'react-redux';
import Tbody from '../../components/Lancement/Table/Tbody';
import { saveLct, saveIdLct } from '../../actions/lancement';

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  id: state.lancement.id,
  lctNumber: state.lancement.lctNumber,
  name: state.lancement.name,
  start: state.lancement.start,
  end: state.lancement.end,

  });

const mapDispatchToProps = (dispatch,ownProps) => ({
  saveLct:(id,lancement,name,start,end) => {
    dispatch(saveLct(id,lancement,name,start,end));
  },
  saveIdLct:(id) => {
    dispatch(saveIdLct(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
