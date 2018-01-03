/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import categories from './categories';

const reducers = {
  home,
  router,
  categories
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
