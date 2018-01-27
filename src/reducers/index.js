/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import categories from './categories';
import header from './header';
import product from './product';
import category from './category';
import environment from './environment';
import user from './user';
import mainMenu from './mainMenu';
import slider from './slider';
import main from './main';
import topCharts from './topCharts';

const reducers = {
  home,
  router,
  categories,
  header,
  product,
  category,
  environment,
  user,
  mainMenu,
  slider,
  main,
  topCharts
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
