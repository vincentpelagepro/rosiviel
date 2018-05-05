/* eslint-disable */
/*
 * Npm import
 */
import { AdwordsReport } from 'node-adwords';

/*
 * Local import
 */
// convertiseur csv vers Json
import csvToJson from '../csvToJson';

/*
 * Requète
 */

export const apiRequest = (report, topType, groupType, dates) => {

const dataApiRequest = {
  campaigns:{
    reportName: 'Custom_Performance Report',
    reportType: 'CAMPAIGN_PERFORMANCE_REPORT',
    fields: [
      'CampaignName',
      topType,
    ],
    filters: [
      { field: 'CampaignStatus', operator: 'IN', values: ['ENABLED'] },
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
  adgroups:{
    reportName: 'Custom_Performance Report',
    reportType: 'ADGROUP_PERFORMANCE_REPORT',
    fields: [
      'AdGroupName',
      topType,
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
  ads:{
    reportName: 'Custom_Performance Report',
    reportType: 'AD_PERFORMANCE_REPORT',
    fields: [
      'HeadlinePart2',
      topType,
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
  keywords:{
    reportName: 'Custom_Performance Report',
    reportType: 'KEYWORDS_PERFORMANCE_REPORT',
    fields: [
      'Criteria',
      topType,
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
  }

  }

  // renvoyer une promise pour pouvoir attendre la fin de la requète
  return new Promise((resolve, reject) => {
    report.getReport(
      'v201710', dataApiRequest[groupType],
      (error, report) => {
        //choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/Top: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });
};
