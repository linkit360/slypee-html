/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import categories from './categories';
import header from './header';
import product from './product';

const reducers = {
  home,
  router,
  categories,
  header,
  product
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
