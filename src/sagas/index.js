import { call, takeLatest, all, put } from 'redux-saga/effects';
import { getCategoryUrlFromSlug } from '_utils/common';

import * as api from '_api';

import { push } from 'react-router-redux';

function* fetch(name, apiFunc) {
  try {
    const data = yield call(apiFunc);

    yield put({ type: `FETCH_${name}_SUCCESS`, data: data.data });
  } catch (e) {
    yield put({ type: `FETCH_${name}_FAILURE`, err: e.message });
  }
}

function* fetchMainMenu() {
  yield fetch('MAIN_MENU', api.fetchMainMenu);
}

function* fetchCategories() {
  yield fetch('CATEGORIES', api.fetchCategories);
}

function* fetchSlider() {
  yield fetch('SLIDER', api.fetchSlider);
}

function* fetchMain() {
  yield fetch('MAIN', api.fetchMain);
}

function* changeTab({ tabName }) {
  let route;

  switch (tabName) {
    case 'home':
      route = '';
      break;
    case 'topcharts':
      route = '/topcharts';
      break;
    default:
      route = getCategoryUrlFromSlug(tabName);
      break;
  }

  yield put(push(route));
}

function* goto({ route }) {
  yield put(push(route));
}

export default function*() {
  yield all([
    takeLatest('FETCH_MAIN_MENU_REQUEST', fetchMainMenu),
    takeLatest('FETCH_CATEGORIES_REQUEST', fetchCategories),
    takeLatest('FETCH_SLIDER_REQUEST', fetchSlider),
    takeLatest('FETCH_MAIN_REQUEST', fetchMain),
    takeLatest('GOTO', goto),
    takeLatest('CHANGE_TAB', changeTab)
  ]);
}
