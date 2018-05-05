/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Home from 'src/components/Home';
import { getDataFromApi, clearDatas } from 'src/store/reducers/HomeReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataApi: state.HomeReducer.dataApi,
  dataApiLoad: state.HomeReducer.dataApiLoad,
  dataText: state.AppReducer.dataText[state.AppReducer.language].home,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = createContainer(Home);


/*
 * Export default
 */
export default HomeContainer;
