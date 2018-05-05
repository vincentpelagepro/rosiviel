/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import SideBarLeft from 'src/components/Template/SideBarLeft';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dataText: state.AppReducer.dataText[state.AppReducer.language].categorySidebar,
});

// Actions
const mapDispatchToProps = () => ({
});

/*
 * Component
 */
const SideBarLeftContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(SideBarLeft);


/*
 * Export default
 */
export default SideBarLeftContainer;
