import { connect } from 'react-redux';
import SelectReglages from '../../components/Reglages/Field/Select';
import { changeValue } from '../../actions';


const mapStateToProps = (state) => ({
    listArticles: state.articles.list,
    lancement: state.launch.lancement
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectReglages);
