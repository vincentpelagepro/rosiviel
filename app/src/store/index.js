/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */

// reducers
import reducer from './reducers';

// middlewares
import DataBaseMiddleware from './middlewares/DataBaseMiddleware';
import HomeMiddleware from './middlewares/HomeMiddleware';
import CampaignsMiddleware from './middlewares/CampaignsMiddleware';
import AdgroupsMiddleware from './middlewares/AdgroupsMiddleware';
import AdsMiddleware from './middlewares/AdsMiddleware';
import KeywordsMiddleware from './middlewares/KeywordsMiddleware';
import TopMiddleware from './middlewares/TopMiddleware';


/*
 * Code
 */

// Middlewares
const middlewares = applyMiddleware(DataBaseMiddleware, HomeMiddleware, CampaignsMiddleware, AdgroupsMiddleware, AdsMiddleware, KeywordsMiddleware, TopMiddleware);

// Redux DevTools Extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Compose enhancers
const enhancers = compose(middlewares, ...devTools);

// Store
const store = createStore(
  reducer,
  // middlewares,
  enhancers,
);


/*
 * Export default
 */
export default store;
