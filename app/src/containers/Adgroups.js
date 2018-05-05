/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Adgroups from 'src/components/Adgroups';
import { getDataFromApi, clearDatas } from 'src/store/reducers/AdgroupsReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataApi: state.AdgroupsReducer.dataApi,
  dataApiLoad: state.AdgroupsReducer.dataApiLoad,
  dataText: state.AppReducer.dataText[state.AppReducer.language].adgroups,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AdgroupsContainer = createContainer(Adgroups);


/*
 * Export default
 */
export default AdgroupsContainer;
