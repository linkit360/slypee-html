import { call, takeLatest, all, put, select } from 'redux-saga/effects';
import { getCategoryUrlFromSlug } from '_utils/common';

import * as api from '_api';

import { push } from 'react-router-redux';

const getCountCategoryContent = state => state.category.content.list.length;
const getCountTopChartsContent = state => state.topCharts.length;
const getCountSearch = state => state.search.length;

function* fetch(name, apiFunc, params) {
  try {
    const data = yield call(apiFunc, params);

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

function* fetchCategoryContent({ data }) {
  yield fetch('CATEGORY_CONTENT', api.fetchCategoryContent, {
    start: 0,
    ...data
  });
}

function* fetchMoreCategoryContent({ data }) {
  const start = yield select(getCountCategoryContent);

  yield fetch('MORE_CATEGORY_CONTENT', api.fetchCategoryContent, {
    start,
    ...data
  });
}

function* fetchTopCharts({ data }) {
  yield fetch('TOP_CHARTS', api.fetchTopCharts, {
    start: 0,
    limit: 30,
    ...data
  });
}

function* fetchMoreTopCharts({ data }) {
  const start = yield select(getCountTopChartsContent);

  yield fetch('MORE_TOP_CHARTS', api.fetchTopCharts, {
    start,
    limit: 20,
    ...data
  });
}

function* fetchSearch({ data }) {
  yield fetch('SEARCH', api.fetchSearch, {
    start: 0,
    limit: 30,
    ...data
  });
}

function* fetchMoreSearch({ data }) {
  const start = yield select(getCountSearch);

  yield fetch('MORE_SEARCH', api.fetchSearch, {
    start,
    limit: 20,
    ...data
  });
}

function* fetchApp({ data }) {
  yield fetch('APP', api.fetchApp, data);
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

function* search({ search }) {
  yield put(push(`/search/${search}`));
}

export default function*() {
  yield all([
    takeLatest('FETCH_MAIN_MENU_REQUEST', fetchMainMenu),
    takeLatest('FETCH_CATEGORIES_REQUEST', fetchCategories),
    takeLatest('FETCH_SLIDER_REQUEST', fetchSlider),
    takeLatest('FETCH_MAIN_REQUEST', fetchMain),
    takeLatest('FETCH_CATEGORY_CONTENT', fetchCategoryContent),
    takeLatest('FETCH_MORE_CATEGORY_CONTENT', fetchMoreCategoryContent),
    takeLatest('FETCH_APP', fetchApp),
    takeLatest('FETCH_TOP_CHARTS', fetchTopCharts),
    takeLatest('FETCH_MORE_TOP_CHARTS', fetchMoreTopCharts),
    takeLatest('FETCH_SEARCH', fetchSearch),
    takeLatest('FETCH_MORE_SEARCH', fetchMoreSearch),
    takeLatest('GOTO', goto),
    takeLatest('CHANGE_TAB', changeTab),
    takeLatest('SEARCH', search)
  ]);
}
