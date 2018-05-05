/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Keywords from 'src/components/Keywords';
import { getDataFromApi, clearDatas } from 'src/store/reducers/KeywordsReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataApi: state.KeywordsReducer.dataApi,
  dataApiLoad: state.KeywordsReducer.dataApiLoad,
  dataText: state.AppReducer.dataText[state.AppReducer.language].keywords,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const KeywordsContainer = createContainer(Keywords);


/*
 * Export default
 */
export default KeywordsContainer;
