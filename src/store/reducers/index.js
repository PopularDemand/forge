import { combineReducers } from 'redux';

import { AppReducer as app }from './app'
import { ShopReducer as shop } from './shop';

export default combineReducers({
  shop,
  app
});
