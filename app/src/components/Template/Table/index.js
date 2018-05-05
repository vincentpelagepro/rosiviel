/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Code
 */
const Table = ({ tableData, dataText, groupType }) => {
  return (
    <div id="categroy-table">
      <table id="data-table">
        <thead className="data-table-header">
          <tr>
            <th>{groupType}</th>
            { // récupérer les noms des entêtes
              dataText.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((lign, index) => {
              // récupérer les values des différents champs dans un array
              const newlign = Object.values(lign);
              return (
                <tr key={index}>
                  { // afficher tous les champs de la ligne
                    newlign.map((field, idx) => (
                      <td key={idx}>{field}</td>
                   ))}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  groupType: PropTypes.string.isRequired,
  dataText: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/*
 * Export default
 */
export default Table;
