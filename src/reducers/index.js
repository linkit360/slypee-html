/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import categories from './categories';
import header from './header';

const reducers = {
  home,
  router,
  categories,
  header
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
