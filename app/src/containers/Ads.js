/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Ads from 'src/components/Ads';
import { getDataFromApi, clearDatas } from 'src/store/reducers/AdsReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataApi: state.AdsReducer.dataApi,
  dataApiLoad: state.AdsReducer.dataApiLoad,
  dataText: state.AppReducer.dataText[state.AppReducer.language].ads,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AdsContainer = createContainer(Ads);


/*
 * Export default
 */
export default AdsContainer;
