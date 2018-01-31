import _ from 'lodash/fp';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_APPS_SORT':
      return _.assign(state, {
        [action.tabName]: {
          ...state[action.tabName],
          sort: action.data
        }
      });
    case 'POST_SIGN_UP_ERROR':
      return _.assign(state, {
        registrationStatus: 'ERROR'
      });
    case 'POST_SIGN_UP_SUCCESS':
      return _.assign(state, {
        ...action.data,
        registrationStatus: 'SUCCESS'
      });
    case 'POST_SIGN_IN_ERROR':
      return _.assign(state, {
        signInStatus: 'ERROR'
      });
    case 'POST_SIGN_IN_SUCCESS':
      return _.assign(state, {
        ...action.data,
        signInStatus: 'SUCCESS'
      });
    case 'FETCH_USER':
      return _.assign(state, {
        isFetching: true
      });
    case 'FETCH_USER_SUCCESS':
      return _.assign(state, {
        ...action.data,
        isFetching: false
      });
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
