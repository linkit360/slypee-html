/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import common from './common';
import header from './header';
import product from './product';
import categories from './categories';
import environment from './environment';
import user from './user';
import topCharts from './topCharts';

const reducers = {
  home,
  router,
  common,
  header,
  product,
  categories,
  environment,
  user,
  topCharts
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
