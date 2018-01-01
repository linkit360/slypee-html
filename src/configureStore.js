/* @flow */

import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import createSagaMiddleware, { END } from 'redux-saga';

import type { Store } from './types';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history),
    sagaMiddleware
  ];
  const composeEnhancers =
    (typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // Other store enhancers if any
  );
  const store = createStore(rootReducer, initialState, enhancers);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        const nextReducer = require('./reducers').default;

        store.replaceReducer(nextReducer);
      } catch (error) {
        console.error(`==> 😭  ReduxState hot reloading error ${error}`);
      }
    });
  }

  return store;
};
