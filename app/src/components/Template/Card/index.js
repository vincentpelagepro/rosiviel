/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/*
 * Local import
 */

/*
 * Code
 */
const Card = ({ cardsDatas, dataText }) => (
  <div className="cards">
    <div className="card">
      <div className="card-tips">
        <a data-tip data-for="clickTool" className="glyphicon glyphicon-info-sign tool-info" />
        <ReactTooltip place="right" id="clickTool" type="dark" effect="solid">
          <p>{dataText.clickTips}</p>
        </ReactTooltip>
      </div>
      <p className="h3">{dataText.click}</p>
      <p className="total-value">{cardsDatas[0]}</p>
    </div>

    <div className="card">
      <div className="card-tips">
        <a data-tip data-for="impressions-tools" className="glyphicon glyphicon-info-sign tool-info" />
        <ReactTooltip place="right" id="impressions-tools" type="dark" effect="solid">
          <p>{dataText.impressionsTips}</p>
        </ReactTooltip>
      </div>
      <p className="h3">{dataText.impressions}</p>
      <p className="total-value">{cardsDatas[1]}</p>
    </div>

    <div className="card">
      <div className="card-tips">
        <a data-tip data-for="ctr-tools" className="glyphicon glyphicon-info-sign tool-info" />
        <ReactTooltip place="right" id="ctr-tools" type="dark" effect="solid">
          <p>{dataText.ctrTips}</p>
        </ReactTooltip>
      </div>
      <p className="h3">{dataText.ctr}</p>
      <p className="total-value">{cardsDatas[2]}%</p>
    </div>

    <div className="card">
      <div className="card-tips">
        <a data-tip data-for="cpc-tools" className="glyphicon glyphicon-info-sign tool-info" />
        <ReactTooltip place="right" id="cpc-tools" type="dark" effect="solid">
          <p>{dataText.cpcTips}</p>
        </ReactTooltip>
      </div>
      <p className="h3">{dataText.cpc}</p>
      <p className="total-value">{cardsDatas[3]}$</p>
    </div>

  </div>
);
Card.propTypes = {
  cardsDatas: PropTypes.array.isRequired,
  dataText: PropTypes.object.isRequired,
};

/*
 * Export default
 */
export default Card;
