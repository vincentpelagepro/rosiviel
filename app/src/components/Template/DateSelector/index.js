/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
/*
 * Code
 */
class DateSelector extends React.Component {
  state = {
    dateBegin: '',
    dateEnd: '',
  }

  componentWillMount() {
    const { dateBegin, dateEnd } = this.props;

    this.setState({
      dateBegin,
      dateEnd,
    });
  }

  onChange = (evt) => {
    // récuperer la value de l'input
    const { value, name } = evt.target;
    // console.log(evt.target);

    // envoyer dans le state local
    this.setState({
      [name]: value,
    });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    // console.log('envoit dans le state global');
    const { dateBegin, dateEnd } = this.state;

    // si modification
    if (dateBegin !== this.props.dateBegin || dateEnd !== this.props.dateEnd) {
      // si begins < end :on envoit
      if (dateBegin < dateEnd) {
        this.props.actions.changeDate(dateBegin, dateEnd);
        this.props.clearDatas();
        this.props.getDataFromApi();
      }
      // sinon on reset les dates
      // console.log('problème de dates');
      this.setState({
        dateBegin: this.props.dateBegin,
        dateEnd: this.props.dateEnd,
      });
    }
    else {
      // console.log('pas de changement de date = pas de nouvelle requète!!');
    }
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    const { dateBegin, dateEnd } = this.state;
    const { dataText } = this.props;
    return (
      <form
        className="form-date"
        method="post"
        onSubmit={this.onSubmit}
      >
        <input
          id="data-from"
          type="date"
          value={dateBegin}
          name="dateBegin"
          onChange={this.onChange}
        />
        <input
          id="data-to"
          type="date"
          value={dateEnd}
          name="dateEnd"
          onChange={this.onChange}
        />
        <button>{dataText.dateButton}</button>
      </form>
    );
  }
}
DateSelector.propTypes = {
  actions: PropTypes.object.isRequired,
  clearDatas: PropTypes.func.isRequired,
  getDataFromApi: PropTypes.func.isRequired,
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  dataText: PropTypes.object.isRequired,
};
/*
 * Export default
 */
export default DateSelector;
