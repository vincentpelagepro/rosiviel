/*
 * Npm import
 */
import jwt from 'jsonwebtoken';
/*
 * Local import
 */

// imports Routers
import helloRoutes from './helloRoute';
import dataBaseRoutes from './dataBaseRoutes';
import homeRoutes from './homeRoutes';
import campaignsRoutes from './campaignsRoutes';
import adgroupsRoutes from './adgroupsRoutes';
import adsRoutes from './adsRoutes';
import keywordsRoutes from './keywordsRoutes';
import topRoutes from './topRoutes';


// imports fake data
import { homeFakeData, campaignsFakeData, adgroupsFakeData, adsFakeData, keywordsFakeData, topFakeData } from '../fakeData';

// import jwt secret
import secret from '../jWT/config';

/*
 * créer les Routes
 */

// VRAIES DATA
const getRoutes = (app) => {
  // Routes "primaires/racines" et routers associés
  app.use('/', helloRoutes);
  app.use('/dataBase', dataBaseRoutes);
  app.use('/home', homeRoutes);
  app.use('/campaigns', campaignsRoutes);
  app.use('/adgroups', adgroupsRoutes);
  app.use('/ads', adsRoutes);
  app.use('/keywords', keywordsRoutes);
  app.use('/top', topRoutes);
};

// FAKE DATA
export const getFakeRoutes = (app) => {
  app.use('/', helloRoutes);
  app.use('/dataBase/', (req, res) => {
    console.log('fakeDB');
    const { login, password } = req.body;
    if (login === 'demo') {
      if (password === 'demo') {
        const myToken = jwt.sign({ user: 'demo', scope: 'user' }, secret);
        res.send({ status: 'connected', token: myToken });
      }
      else {
        res.send('notConnected');
      }
    }
    else {
      res.send('notConnected');
    }
  });
  app.post('/home/api', (req, res) => {
    console.log('fakeData');
    res.send(homeFakeData);
  });
  app.post('/campaigns/api', (req, res) => {
    console.log('fakeData');
    res.send(campaignsFakeData);
  });
  app.post('/adgroups/api', (req, res) => {
    console.log('fakeData');
    res.send(adgroupsFakeData);
  });
  app.post('/ads/api', (req, res) => {
    console.log('fakeData');
    res.send(adsFakeData);
  });
  app.post('/keywords/api', (req, res) => {
    console.log('fakeData');
    res.send(keywordsFakeData);
  });
  app.use('/top/api', (req, res) => {
    console.log('fakeData');
    res.send(topFakeData);
  });
};


export default getRoutes;
