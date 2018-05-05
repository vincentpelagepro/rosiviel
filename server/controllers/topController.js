/* eslint-disable */
/*
 * Npm import
 */

/*
 * Local import
 */
// import requete via nodeAdwords
import { apiRequest } from '../nodeAdwords/top';
import report from '../nodeAdwords/token';
import { reqSession } from './dataBaseController';

/*
 * Réponses
 */

// liste des appels à l'api intermédiaire


// Retourner toutes les data provenant de l'api
export const getData = (req, res) => {
  //On récupère les données du path
  let topType = req.body.topType;
  const groupType = req.body.groupType;
  const dates = req.body.dates;

  const capitalizeFirstLetter = string => (
    string.charAt(0).toUpperCase() + string.slice(1)
  );
  //On prépare le topType pour la requête API en mettant une majuscule, change le nom pour click-through-rate > ctr
  let topTypeCapitalize = '';
  if(topType === 'click-through-rate'){
    topTypeCapitalize = 'Ctr';
  } else {
    topTypeCapitalize = capitalizeFirstLetter(topType);
  }

  // lancer la requète vers l'api
  // puis récupérer les data dans result quand la requète est achevée
  //On envoie les données du path dans la requête API
  apiRequest(report(reqSession), topTypeCapitalize, groupType, dates)
  .then((result) => {
    const table = result;
    // console.log(table);

    if(topTypeCapitalize === 'Ctr'){
      topTypeCapitalize = 'CTR';
      table.map(elem => {
        elem.CTR = elem.CTR.slice(0,-1);
      })
    }

    // calcul du bombre d'item
    let nbGroupeType = 0;
    table.forEach(item => {
      nbGroupeType++;
    })
    // console.log('nbGroupeType : ');
    // console.log(nbGroupeType);

    // calcul de la moyenne
    let nbAverageTopType;
    if (topType === 'cost') {
      nbAverageTopType = `${(table.reduce(
        (prev, curr) =>
          prev + Number(curr[topTypeCapitalize])
        , 0,
      ) / nbGroupeType / 1000000).toFixed()}$`;
    }
    else if (topType === 'click-through-rate') {
      nbAverageTopType = `${(table.reduce(
        (prev, curr) =>
          prev + Number(curr[topTypeCapitalize])
        , 0,
      ) / nbGroupeType).toFixed()}%`;
    }
    else {
      nbAverageTopType = (table.reduce(
        (prev, curr) =>
          prev + Number(curr[topTypeCapitalize])
        , 0,
      ) / nbGroupeType).toFixed();
      // console.log('nbAverageTopType : ');
      // console.log(nbAverageTopType.toFixed(1));
    }


    //On trie le résultat de l'API
    const tableSorted = table.sort(function(a, b) {
     return parseFloat(b[topTypeCapitalize]) - parseFloat(a[topTypeCapitalize]);
    });
    //Les deux array qui vont recevoir les labels et les données pour le chart
    let label = [];
    let dataSets = [];

    //meilleure item
    let bestGroupType;
    if (topType === 'cost') {
      bestGroupType = [Object.values(tableSorted[0])[0], `${(Number(Object.values(tableSorted[0])[1]) / 1000000)}$`]; //diviser par 1000000
      // remis en string ici pour coller au reste mais pas nécessaire
    }
    else if (topType === 'click-through-rate') {
      bestGroupType = [Object.values(tableSorted[0])[0], Object.values(tableSorted[0])[1] + '%'];
    }
    else {
      bestGroupType = Object.values(tableSorted[0]);
      // console.log('bestGroupType : ');
      // console.log(bestGroupType);
    }

    // pire item
    let worstGroupType;
    if (topType === 'cost') {
      worstGroupType = [Object.values(tableSorted[tableSorted.length - 1])[0], `${(Number(Object.values(tableSorted[tableSorted.length - 1])[1]) / 1000000)}$`]; //diviser par 1000000
      // remis en string ici pour coller au reste mais pas nécessaire
    }
    else if (topType === 'click-through-rate') {
      worstGroupType = [Object.values(tableSorted[tableSorted.length - 1])[0], (Number(Object.values(tableSorted[tableSorted.length - 1])[1]) / 1000000) + '%'];
    }
    else {
      worstGroupType = Object.values(tableSorted[tableSorted.length - 1]);
      // console.log('worstGroupType : ');
      // console.log(worstGroupType););
    }

    //On boucle sur le tableau renvoyé par l'API, on split et push les valeurs de topType et groupType
    //pour créer les tableau formatés à renvoyer au front
    tableSorted.map(elem => {
      if(topType === 'click-through-rate'){
        dataSets.push(Number(elem.CTR))
      } else if (topType === 'cost') {
        dataSets.push(Number(elem.Cost.slice(0,-1) / 1000000))
      } else {
      dataSets.push(Number(elem[topTypeCapitalize]));
      }

      if(groupType === 'adgroups'){
        label.push(elem['Ad group']);
      } else if (groupType === 'ads') {
        label.push(elem['Headline 2']);
      } else if (groupType === 'keywords') {
        label.push(elem['Keyword']);
      } else {
      label.push(elem.Campaign);
      }
    })

    //On récupère les top 5
    const labelOrderSlice = label.slice(0, 5);
    const dataSetsOrderSlice = dataSets.slice(0, 5);
    const sideBarRightData = [nbGroupeType, nbAverageTopType, bestGroupType, worstGroupType];

    const chartData = [
      labelOrderSlice,
      dataSetsOrderSlice,
      sideBarRightData,
      topTypeCapitalize,
      groupType
    ];
    // console.log(chartData);
    res.send(chartData);
  })
  .catch((error) => {
    console.log('requète Api Top: echec');
  });
};
