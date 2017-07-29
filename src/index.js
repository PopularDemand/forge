import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { App } from './components/app';
import store from './store';

import { exampleState } from './exampleState';

store.dispatch({
  type: 'APP_SET_STATE',
  state: exampleState.app
});
store.dispatch({
  type: 'SHOP_SET_STATE',
  state: exampleState.shop
});

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
