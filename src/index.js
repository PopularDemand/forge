import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { App } from './components/app';
import store from './store';
import { appSetState } from './store/actions/app';
import { shopSetState } from './store/actions/shop';

import { exampleState } from './exampleState';

function setInitialState() {
  return function(dispatch) {
    return Promise.resolve(exampleState).then(
      (state) => Promise.all([
        dispatch(appSetState(state.app)),
        dispatch(shopSetState(state.shop))
      ])
    );
  }
}

store.dispatch(setInitialState());

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
