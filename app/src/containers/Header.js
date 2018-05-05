/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Header from 'src/components/Template/Header';
import { changeLanguage } from 'src/store/reducers/AppReducer';
import { Logout } from 'src/store/reducers/LoginReducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataText: state.AppReducer.dataText[state.AppReducer.language].header,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeLanguage, Logout }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const HeaderContainer = createContainer(Header);


/*
 * Export default
 */
export default HeaderContainer;
