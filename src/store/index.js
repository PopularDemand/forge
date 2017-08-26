import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { multiClientMiddleware } from 'redux-axios-middleware';

import shop from '../lib/shop';

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      multiClientMiddleware({ shop })
    )
  )
);
