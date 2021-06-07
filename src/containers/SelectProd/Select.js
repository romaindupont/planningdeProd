import { connect } from 'react-redux';
import Select from '../../components/SelectProd/Select';
import { changeValue } from '../../actions';
import { saveOperatingTime, saveSearchRef } from '../../actions/launch';


const mapStateToProps = (state) => ({
    listArticles: state.articles.list,
    lancement: state.launch.lancement
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeField: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  saveOperatingTime: (operating_time) => {
    dispatch(saveOperatingTime(operating_time));
  },
  saveSearchRef: (lancement) => {
    dispatch(saveSearchRef(lancement));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
