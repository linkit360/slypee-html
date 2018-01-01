import { call, takeLatest, all, put } from 'redux-saga/effects';

import * as api from '_api';

import { push } from 'react-router-redux';

function* fetchCategories() {
  try {
    const response = yield call(api.fetchCategories);

    yield put({ type: 'FETCH_CATEGORIES_SUCCESS', response });
  } catch (e) {
    yield put({ type: 'FETCH_CATEGORIES_FAILURE', message: e.message });
  }
}

function* changeTab({ tabName }) {
  yield put(push(`/${tabName}`));
}

export default function*() {
  yield all([
    takeLatest('FETCH_CATEGORIES_REQUEST', fetchCategories),
    takeLatest('CHANGE_TAB', changeTab)
  ]);
}
