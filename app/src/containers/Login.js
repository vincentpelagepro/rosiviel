/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Login from 'src/components/Login';
import { getDataFromDB, changeLogin, clearLogin } from 'src/store/reducers/LoginReducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  login: state.LoginReducer.login,
  password: state.LoginReducer.password,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDataFromDB, changeLogin, clearLogin }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = createContainer(Login);


/*
 * Export default
 */
export default LoginContainer;
