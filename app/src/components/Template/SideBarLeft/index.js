/*
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
/*
 * Local import
 */
import { setBackgroundColor, setTextColor } from './sideBarTools';
// groupType, backgroundColor, textColor
/*
 * Code
 */
class SideBarLeft extends React.Component {
  static propTypes = {
    groupType: PropTypes.string.isRequired,
    dataText: PropTypes.object.isRequired,
  }
  render() {
    const { groupType } = this.props;
    const { dataText } = this.props;

    const backgroundColor = setBackgroundColor(groupType);
    const textColor = setTextColor(groupType);

    const majGroupType = string => string.charAt(0).toUpperCase() + string.slice(1);
    const topTitle = majGroupType(groupType);

    return (
      <div id="app-sidebar-left">
        <aside id="sidebar" className="col-xs-12 col-md-2">
          <nav>
            <ul className={backgroundColor}>
              <NavLink to={`/${groupType}/top-5/clicks`} activeClassName="active-link">
                <li className={textColor}>{dataText.top}{topTitle} {dataText.clicks}
                </li>
              </NavLink>
              <NavLink to={`/${groupType}/top-5/impressions`} activeClassName="active-link">
                <li className={textColor}>
                  {dataText.top}{topTitle}{dataText.impressions}
                </li>
              </NavLink>
              <NavLink to={`/${groupType}/top-5/click-through-rate`} activeClassName="active-link">
                <li className={textColor}>
                  {dataText.top}{topTitle}{dataText.cpc}
                </li>
              </NavLink>
              <NavLink to={`/${groupType}/top-5/cost`} activeClassName="active-link">
                <li className={textColor}>
                  {dataText.top}{topTitle}{dataText.cost}
                </li>
              </NavLink>
              <NavLink to={`/${groupType}/top-5/conversions`} activeClassName="active-link">
                <li className={textColor}>
                  {dataText.top}{topTitle}{dataText.conversions}
                </li>
              </NavLink>
            </ul>
          </nav>
        </aside>
      </div>
    );
  }
}

/*
 * Export default
 */

export default SideBarLeft;
