/*
 * Npm import
 */

/*
 * Local import
 */
// import requete via nodeAdwords
import report from '../nodeAdwords/token';
import { reqSession } from './dataBaseController';
import { apiRequest } from '../nodeAdwords/ads';
/*
 * Réponses
 */

// liste des appels à l'api intermédiaire


// Retourner toutes les data provenant de l'api
export const getData = (req, res) => {
  // lancer la requète vers l'api
  // puis récupérer les data dans result quand la requète est achevée
  apiRequest(
    report(reqSession), // passer report
    req.body, // passer les dates
  )
    .then((result) => {
      // TABLEAU
      // tableau de données BRUT pour Adgroups
      const table = result;
      // console.log(table);

      const tableSorted = table.sort((a, b) => parseFloat(b.Cost) - parseFloat(a.Cost));

      // tableau de données MODIFIE pour les Adgroups
      const tableModified = tableSorted.map(lign => ({
        ...lign,
        Cost: lign.Cost / 1000000, // passer en dollars
        CPC: parseInt(((lign.Cost / 1000000) / lign.Clicks).toFixed(2), 10), // calculer le cpc
        CostPerConversion: parseInt(((lign.Cost / 1000000) / (lign.Conversions)).toFixed(2), 10),
      }));
      // console.log(tableModified);


      // calcul total clicks
      const clicksTotal = tableModified.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks)
        , 0,
      );
      // console.log(clicksTotal);


      // calcul total impressions
      const impressionsTotal = tableModified.reduce(
        (prev, curr) =>
          prev + Number(curr.Impressions),
        0,
      );
      // console.log(impressionsTotal);


      // calcul total ctr
      const ctrTotal = tableModified.reduce(
        (prev, curr) =>
          prev + Number(curr.CTR.slice(0, -1)),
        0,
      );
      // console.log(ctrTotal);

      // moyenne ctr
      const ctrAvg = (ctrTotal / table.length).toFixed(2);
      // console.log(ctrAvg);

      // calcul total cost
      const costTotal = tableModified.reduce(
        (prev, curr) =>
          prev + Number(curr.Cost),
        0,
      );
      // console.log(costTotal);

      // moyenne cost/click
      const costByClickAvg = (costTotal / clicksTotal).toFixed(2);
      // console.log(costByClickAvg);

      // données pour les cards
      const cards = [
        clicksTotal,
        impressionsTotal,
        ctrAvg,
        costByClickAvg,
      ];


      const data = [
        cards,
        tableModified,
      ];
      // console.log(cards);
      // console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.log('requète Api Ads: echec');
    });
};
