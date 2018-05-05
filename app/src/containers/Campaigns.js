/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Campaigns from 'src/components/Campaigns';
import { getDataFromApi, clearDatas } from 'src/store/reducers/CampaignsReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataApi: state.CampaignsReducer.dataApi,
  dataApiLoad: state.CampaignsReducer.dataApiLoad,
  dataText: state.AppReducer.dataText[state.AppReducer.language].campaigns,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CampaignsContainer = createContainer(Campaigns);


/*
 * Export default
 */
export default CampaignsContainer;
