/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import App from 'src/components/App';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataDBLoad: state.AppReducer.dataDBLoad,
});

// Actions
const mapDispatchToProps = () => ({
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);


/*
 * Export default
 */
// withRouter pour bien prendre en compte les changements de route dans App : bien changer la route à afficher
export default withRouter(AppContainer);
