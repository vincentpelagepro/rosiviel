/*
 * Npm import
 */

/*
 * Local import
 */
// test import api chris
import report from '../nodeAdwords/token';
import { reqSession } from './dataBaseController';
import { apiRequestCampaigns, apiRequestAdgroups, apiRequestAds, apiRequestKeywords } from '../nodeAdwords/home';


/*
 * Réponses
 */

// liste des appels à l'api intermédiaire

// Retourner toutes les data provenant de l'api
export const getAllData = (req, res) => {
  // stock des requètes
  const tableTest = [
    apiRequestCampaigns(report(reqSession), req.body),
    apiRequestAdgroups(report(reqSession), req.body),
    apiRequestAds(report(reqSession), req.body),
    apiRequestKeywords(report(reqSession), req.body),
  ];

  return Promise.all(tableTest)
    .then((totalRes) => {
      // récupérer les tableaux bruts
      const tableCampaigns = totalRes[0];
      const tableAdgroups = totalRes[1];
      const tableAds = totalRes[2];
      const tableKeywords = totalRes[3];

      // modifs des data
      const tableModified = (tableBrut) => {
        // tableau de données BRUT pour Adgroups
        const table = tableBrut;
        // console.log(table);

        // tri par nombre de clics décroissants
        const tableSorted = table.sort((a, b) => parseFloat(b.Clicks) - parseFloat(a.Clicks));

        // return le top 5
        return tableSorted.slice(0, 5);
      };

      // CALCULS
      // Total des clics campaigns
      const campaignsTotalClicks = tableCampaigns.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks)
        , 0,
      );
      // Clics moyens campaigns
      const campaignsCliksAvg = (campaignsTotalClicks / tableCampaigns.length).toFixed();
      // On stock les datas dans un tableau
      const campaignsCalculation = [campaignsTotalClicks, campaignsCliksAvg];

      // Total des clics adgroups
      const adgroupsTotalClicks = tableAdgroups.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks)
        , 0,
      );
      // Clics moyens adgroups
      const adgroupsCliksAvg = (adgroupsTotalClicks / tableAdgroups.length).toFixed();
      // On stock les datas dans un tableau
      const adgroupsCalculation = [adgroupsTotalClicks, adgroupsCliksAvg];

      // Total des clics Ads
      const adsTotalClicks = tableAds.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks)
        , 0,
      );
      // Clics moyens ads
      const adsCliksAvg = (adsTotalClicks / tableAds.length).toFixed();
      // On stock les datas dans un tableau
      const adsCalculation = [adsTotalClicks, adsCliksAvg];

      // Total des clics Keywords
      const keywordsTotalClicks = tableKeywords.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks)
        , 0,
      );
      // Clics moyens ads
      const keywordsCliksAvg = (keywordsTotalClicks / tableKeywords.length).toFixed();
      // On stock les datas dans un tableau
      const keywordsCalculation = [keywordsTotalClicks, keywordsCliksAvg];

      // regroupement des calculs
      const homeCalculation = [
        campaignsCalculation,
        adgroupsCalculation,
        adsCalculation,
        keywordsCalculation,
      ];


      // regroupement des datas avant le renvoit au front
      const data = [
        tableModified(tableCampaigns),
        tableModified(tableAdgroups),
        tableModified(tableAds),
        tableModified(tableKeywords),
        homeCalculation,
      ];
      // console.log(data);
      // renvoit au front
      res.send(data);
    })
    .catch((totalError) => {
      console.log(' l\'une des requètes api Home a échoué');
    });
};
