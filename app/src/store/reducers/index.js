import { combineReducers } from 'redux';

import AdgroupsReducer from './AdgroupsReducer';
import AdsReducer from './AdsReducer';
import AppReducer from './AppReducer';
import CampaignsReducer from './CampaignsReducer';
import KeywordsReducer from './KeywordsReducer';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';
import TopReducer from './TopReducer';

const reducer = combineReducers({
  AppReducer,
  HomeReducer,
  AdgroupsReducer,
  AdsReducer,
  CampaignsReducer,
  KeywordsReducer,
  LoginReducer,
  TopReducer,
});


export default reducer;
