/*
 * Npm import
 */


/*
 * Local import
 */
// convertiseur csv vers Json
import csvToJson from '../csvToJson';

/*
 * Requète
 */



// Requète vers l'api
export const apiRequest = (report, dates) => {
  // renvoyer une promise pour pouvoir attendre la fin de la requète
  return new Promise((resolve, reject) => {
    report.getReport(
      'v201710', {
        reportName: 'Custom Adgroup Performance Report',
        reportType: 'KEYWORDS_PERFORMANCE_REPORT',
        fields: [
          'Criteria',
					'Clicks',
					'Impressions',
					'Ctr',
					'Cost',
					'Conversions',
          // 'CostPerConversion',
        ],
        filters: [
          { field: 'CampaignStatus', operator: 'IN', values: ['ENABLED'] },
          { field: 'AdGroupStatus', operator: 'IN', values: ['ENABLED'] },
        ],
        dateRangeType: 'CUSTOM_DATE',
        startDate: new Date(dates.dateBegin),
        endDate: new Date(dates.dateEnd),
        format: 'CSV',
        additionalHeaders: {
          skipReportHeader: true,
          skipReportSummary: true,
        },
      },
      (error, report) => {
        //choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/Keywords: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });
};
