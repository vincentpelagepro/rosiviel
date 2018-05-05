/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import DateSelector from 'src/components/Template/DateSelector';
import { changeDate } from 'src/store/reducers/AppReducer';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  dateBegin: state.AppReducer.dateBegin,
  dateEnd: state.AppReducer.dateEnd,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeDate }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const DateSelectorContainer = createContainer(DateSelector);


/*
 * Export default
 */
export default DateSelectorContainer;
