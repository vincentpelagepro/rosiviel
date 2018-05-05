/*
 * Npm import
 */
import csv from 'csvtojson';

/*
 * Convertisseur csv vers Json
 */

export default (dataCsv) => {
  const table = [];

  // console.log(typeof dataCsv);
  csv({
    trim: true,
  })
    .fromString(dataCsv)
    .on('json', (jsonObj) => {
      // console.log(jsonObj);
      table.push(jsonObj);
    })
    .on('done', (error) => {
      // console.log('conversion done');
    });
  // console.log(table);
  return table;
};
