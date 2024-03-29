/* @flow */

import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import chalk from 'chalk';

import createHistory from 'history/createMemoryHistory';
import configureStore from './configureStore';
import Html from './utils/Html';
import App from './containers/App';
import routes from './routes';
import { port, host } from './config';

const DEV_API_HOST = 'https://slypee.snpdev.ru';
const DEV_API_ROUTES = ['api'];

const app = express();

// Using helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
app.use(compression());

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(process.cwd(), './public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const proxy = require('express-http-proxy');

  const compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      noInfo: true,
      stats: 'minimal',
      serverSideRender: true
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));

  DEV_API_ROUTES.forEach(route => {
    app.use(
      '/api',
      proxy(DEV_API_HOST, {
        proxyReqPathResolver: req => path.join('/', route, req.url)
      })
    );
  });
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  if (__DEV__) webpackIsomorphicTools.refresh();

  const history = createHistory();
  const store = configureStore(history);
  // eslint-disable-next-line no-shadow
  const renderHtml = (store, htmlContent) => {
    const html = renderToStaticMarkup(
      <Html store={store} htmlContent={htmlContent} />
    );

    return `<!doctype html>${html}`;
  };

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(renderHtml(store));
    return;
  }

  // Here's the method for loading data from server-side
  const loadBranchData = (): Promise<*> | Object => {
    const promises = [];

    routes.some(route => {
      const match = matchPath(req.path, route);

      if (match && route.loadData)
        // $FlowFixMe: the params of pre-load actions are dynamic
        promises.push(route.loadData(store.dispatch, match.params));

      return match;
    });

    return Promise.all(promises);
  };

  (async () => {
    try {
      // Load data from server-side first
      // await loadBranchData();

      // Setup React-Router server-side rendering
      const routerContext = {};
      const htmlContent = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={routerContext}>
            <App />
          </StaticRouter>
        </Provider>
      );

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (routerContext.url) {
        res.status(301).setHeader('Location', routerContext.url);
        res.end();

        return;
      }

      // Checking is page is 404
      const status = routerContext.status === '404' ? 404 : 200;

      // Pass the route and initial state into html template
      res.status(status).send(renderHtml(store, htmlContent));
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  app.listen(port, host, err => {
    const url = `http://${host}:${port}`;

    if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));

    console.info(chalk.green(`==> 🌎  Listening at ${url}`));

    // Open Chrome
    require('../tools/openBrowser')(url);
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
