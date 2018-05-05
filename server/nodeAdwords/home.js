/*
 * Npm import
 */

/*
 * Local import
 */
// convertiseur dsv vers Json
import csvToJson from '../csvToJson';

/*
 * Requète
 */

// Requètes vers l'api

// Campaigns
export const apiRequestCampaigns = (report, dates) =>

  // renvoyer une promise pour pouvoir attendre la fin de la requète
  new Promise((resolve, reject) => {
    report.getReport(
      'v201710', {
        reportName: 'Custom Campaign Performance Report',
        reportType: 'CAMPAIGN_PERFORMANCE_REPORT',
        fields: [
          'CampaignName',
          'Clicks',
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
      (error, report) => {
        // choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/HomeCampaigns: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });

// Adgroups
export const apiRequestAdgroups = (report, dates) =>
  // renvoyer une promise pour pouvoir attendre la fin de la requète
  new Promise((resolve, reject) => {
    report.getReport(
      'v201710', {
        reportName: 'Custom Adgroup Performance Report',
        reportType: 'ADGROUP_PERFORMANCE_REPORT',
        fields: [
          'AdGroupName',
          'Clicks',
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
        // choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/HomeAdgroups: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });

// Ads
export const apiRequestAds = (report, dates) =>
  // renvoyer une promise pour pouvoir attendre la fin de la requète
  new Promise((resolve, reject) => {
    report.getReport(
      'v201710', {
        reportName: 'Custom Ad Performance Report',
        reportType: 'AD_PERFORMANCE_REPORT',
        fields: [
          'HeadlinePart2',
          'Clicks',
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
        // choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/HomeAds: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });

// Keywords
export const apiRequestKeywords = (report, dates) =>
  // renvoyer une promise pour pouvoir attendre la fin de la requète
  new Promise((resolve, reject) => {
    report.getReport(
      'v201710', {
        reportName: 'Custom Keyword Performance Report',
        reportType: 'KEYWORDS_PERFORMANCE_REPORT',
        fields: [
          'Criteria',
          'Clicks',
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
        // choix des infos à renvoyer à then et catch
        if (error) {
          // infos pour catch
          return reject(error);
        }

        // récupération des données de l'api dans report
        console.log('Api/HomeKeywords: données renvoyées');

        // conversion des data en Json
        const dataJson = csvToJson(report);

        // infos pour then
        return resolve(dataJson);
      },
    );
  });
