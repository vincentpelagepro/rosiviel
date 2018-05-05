/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Code
 */
const SideBarRight = ({
  sideBarText, sideBarRightData, groupType, topType,
}) => (
  <div id="app-sidebar-right">
    <aside id="sidebar-right" className="col-xs-12 col-md-2">
      <div className="data">
        <h2 className="h2">{sideBarText.title}</h2>
        <p className="data-detail">{sideBarText.by}{topType}</p>
        <ul>
          <li><span>{sideBarRightData[0]}</span> {groupType}</li>
          <li>{sideBarText.average} <span>{sideBarRightData[1]}</span></li>
          <li>{sideBarText.best} <span>{sideBarRightData[2][0]}</span> <span>({sideBarRightData[2][1]})</span></li>
          <li>{sideBarText.worst} <span>{sideBarRightData[3][0]}</span> <span>({sideBarRightData[3][1]})</span></li>
        </ul>
      </div>
    </aside>
  </div>
);
SideBarRight.propTypes = {
  sideBarText: PropTypes.object.isRequired,
  sideBarRightData: PropTypes.array.isRequired,
  groupType: PropTypes.string.isRequired,
  topType: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default SideBarRight;
