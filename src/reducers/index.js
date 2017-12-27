/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import userInfo from './userInfo';
import categories from './categories';

const reducers = {
  home,
  userInfo,
  router,
  categories
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
