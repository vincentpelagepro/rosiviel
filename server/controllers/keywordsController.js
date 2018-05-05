/*
 * Npm import
 */

/*
 * Local import
 */
// import requete via nodeAdwords
import report from '../nodeAdwords/token';
import { reqSession } from './dataBaseController';
import { apiRequest } from '../nodeAdwords/keywords';


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
      // tableau de données BRUT pour Keywords
      const table = result;
      // console.log(table);

      // tri par nombre de clics décroissants
      const tableSorted = table.sort((a, b) => parseFloat(b.Clicks) - parseFloat(a.Clicks));

      // tableau de données MODIFIE pour les Keywords
      const tableModified = tableSorted.map(lign => ({
        ...lign,
        'Cost': lign.Cost / 1000000, // passer en dollars
        'CPC': parseInt(((lign.Cost / 1000000) / lign.Clicks).toFixed(2), 10), // rajout/calculer le cpc
        'Cost / conv': parseInt(((lign.Cost / 1000000) / lign.Conversions).toFixed(2), 10), // rajout/calculer le CostPerConversion
      }));
      // console.log(tableModified);

      // CARDS
      // calcul total clicks
      const clicksTotal = tableModified.reduce(
        (prev, curr) =>
          prev + Number(curr.Clicks),
        0,
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
      const ctrAvg = (ctrTotal / tableModified.length).toFixed(2);
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


      // RENVOI des données pour les Keywords

      const data = [
        cards,
        tableModified,
      ];
      // console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.log('requète Api Keywords: echec');
    });
};
