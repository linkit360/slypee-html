import { call, takeLatest, all, put, select } from 'redux-saga/effects';
import { getCategoryUrlFromSlug } from '_utils/common';

import * as api from '_api';

import { push } from 'react-router-redux';

const getCountCategoryContent = state => state.category.content.list.length;
const getCountTopChartsContent = state => state.topCharts.length;
const getCountSearch = state => state.search.length;
const getToken = state => state.user.token;
const getPathname = state => state.router.location.pathname;
const getCountUserContent = state => state.userContent.list.length;
const getParamsUserContent = state => {
  const { sort, contentType } = state.userContent;
  return { sort, contentType };
};

function* request(name, apiFunc, params = {}, expectedParameter) {
  try {
    const newParams = params;
    const token = yield select(getToken);
    if (token) {
      newParams.token = token;
    }
    const data = yield call(apiFunc, newParams);

    if (!expectedParameter || data.data[expectedParameter]) {
      const limit = data.config.headers['slypee-content-pagination-limit'];
      yield put({
        type: `${name}_SUCCESS`,
        data: data.data,
        isFetchedAll: limit && data.data.length < limit
      });
    } else {
      yield put({ type: `${name}_ERROR`, data });
    }
  } catch (e) {
    yield put({ type: `${name}_FAILURE`, err: e.message });
  }
}

function* fetch(name, apiFunc, params, expectedParameter) {
  yield request(`FETCH_${name}`, apiFunc, params, expectedParameter);
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

function* fetchCategoryNew({ data }) {
  yield fetch('CATEGORY_NEW', api.fetchCategoryNew, data);
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

function* fetchUserContent() {
  const params = yield select(getParamsUserContent);
  yield fetch('USER_CONTENT', api.fetchUserContent, {
    start: 0,
    limit: 6,
    ...params
  });
}

function* fetchMoreUserContent() {
  const start = yield select(getCountUserContent);
  const params = yield select(getParamsUserContent);

  yield fetch('MORE_USER_CONTENT', api.fetchUserContent, {
    start,
    limit: 6,
    ...params
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

function* fetchUser() {
  const token = localStorage.getItem('token');
  if (token !== 'undefined') {
    yield fetch('USER', api.fetchUser, token);
  }
}

function* signUp({ data }) {
  yield request('SIGN_UP', api.signUp, data, 'token');
}

function* signIn({ data }) {
  yield request('SIGN_IN', api.signIn, data, 'token');
}

function* subscribe({ data }) {
  yield request('SUBSCRIBE', api.subscribe, data);
}

function* unsubscribe({ data }) {
  yield request('UNSUBSCRIBE', api.unsubscribe, data);
}

function* updateProfile({ data }) {
  yield request('UPDATE_PROFILE', api.updateProfile, data, 'token');
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

function* completeUserLogin({ data }) {
  localStorage.setItem('token', data.token);
  yield put(push('/'));
}

function logout() {
  localStorage.removeItem('token');
}

function* search({ search }) {
  yield put(push(`/search/${search}`));
}

function* redirect({ data: { redirectUrl } }) {
  const pathname = yield select(getPathname);
  localStorage.setItem('pathnameBeforeRedirect', pathname);
  window.open(redirectUrl, '_self');
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
    takeLatest('FETCH_CATEGORY_NEW', fetchCategoryNew),
    takeLatest('FETCH_USER', fetchUser),
    takeLatest('FETCH_USER_CONTENT', fetchUserContent),
    takeLatest('FETCH_MORE_USER_CONTENT', fetchMoreUserContent),
    takeLatest('CHANGE_TYPE_USER_CONTENT', fetchUserContent),
    takeLatest('CHANGE_SORT_USER_CONTENT', fetchUserContent),
    takeLatest('LOGOUT', logout),
    takeLatest('SIGN_UP', signUp),
    takeLatest('SIGN_UP_SUCCESS', completeUserLogin),
    takeLatest('SIGN_IN', signIn),
    takeLatest('SIGN_IN_SUCCESS', completeUserLogin),
    takeLatest('SUBSCRIBE', subscribe),
    takeLatest('SUBSCRIBE_SUCCESS', redirect),
    takeLatest('UNSUBSCRIBE', unsubscribe),
    takeLatest('UNSUBSCRIBE_SUCCESS', redirect),
    takeLatest('UPDATE_PROFILE', updateProfile),
    takeLatest('GOTO', goto),
    takeLatest('CHANGE_TAB', changeTab),
    takeLatest('SEARCH', search)
  ]);
}
