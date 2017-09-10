import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import routes from '../shared/routes';
import { App } from '../components/app';

const router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  const promises = routes.reduce((acc, route) => {
    if (
      matchPath(req.url, route)
      && route.component
      && route.component.intiialAction
    ) {
      acc.push(Promise.resolve(route.component.initialActin()));
    }
    return acc;
  }, []);
  const context = {};

  Promise.all(promises)
  .then(() => {
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const initialData = serialize(store.getState());
    res.render('index', { initialData, markup });
  })
});

export default router;
