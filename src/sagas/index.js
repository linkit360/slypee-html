import { call, takeLatest, all, put } from 'redux-saga/effects';

import * as api from '_api';

import { push } from 'react-router-redux';

function* fetch(name, apiFunc) {
  try {
    const data = yield call(apiFunc);

    yield put({ type: `FETCH_${name}_SUCCESS`, data });
  } catch (e) {
    yield put({ type: `FETCH_${name}_FAILURE'}`, err: e.message });
  }
}

function* fetchCategories() {
  yield fetch('CATEGORIES', api.fetchCategories);
}

function* changeTab({ tabName }) {
  yield put(push(`/${tabName}`));
}

function* fetchMain() {
  yield fetch('FETCH_MAIN_REQUEST', api.fetchMain);
}

export default function*() {
  yield all([
    takeLatest('FETCH_CATEGORIES_REQUEST', fetchCategories),
    takeLatest('CHANGE_TAB', changeTab),
    takeLatest('FETCH_MAIN_REQUEST', fetchMain)
  ]);
}
