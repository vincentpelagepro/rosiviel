/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Top from 'src/components/Top';
import { getDataFromApi, clearDatas } from 'src/store/reducers/TopReducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataText: state.AppReducer.dataText[state.AppReducer.language].top,
  dataApi: state.TopReducer.dataApi,
  dataApiLoad: state.TopReducer.dataApiLoad,
  dateBegin: state.AppReducer.dateBegin,
  dateEnd: state.AppReducer.dateEnd,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromApi, clearDatas }, dispatch),
});


/*
 * Component
 */
const TopContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Top);

/*
 * Export default
 */
export default withRouter(TopContainer);
