import _ from 'lodash/fp';

const initialState = {
  updateUserError: {},
  status: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_APPS_SORT':
      return _.assign(state, {
        [action.tabName]: {
          ...state[action.tabName],
          sort: action.data
        }
      });
    case 'SIGN_UP_ERROR':
      return _.assign(state, {
        registrationStatus: 'ERROR'
      });
    case 'SIGN_UP_SUCCESS':
      return _.assign(state, {
        ...action.data,
        registrationStatus: 'SUCCESS'
      });
    case 'SIGN_IN_ERROR':
      return _.assign(state, {
        signInStatus: 'ERROR'
      });
    case 'SIGN_IN_SUCCESS':
      return _.assign(state, {
        ...action.data,
        signInStatus: 'SUCCESS'
      });
    case 'FETCH_USER':
      return _.assign(state, {
        isFetching: true,
        status: 'REQUEST'
      });
    case 'FETCH_USER_SUCCESS':
      return _.assign(state, {
        ...action.data,
        isFetching: false,
        status: 'SUCCESS'
      });
    case 'FETCH_USER_FAILURE':
      return _.assign(state, {
        isFetching: false,
        status: 'FAILURE'
      });
    case 'UPDATE_PROFILE':
      return _.assign(state, {
        updateUserStatus: 'REQUEST',
        updateUserError: {}
      });
    case 'UPDATE_PROFILE_SUCCESS':
      return _.assign(state, {
        ...action.data,
        updateUserStatus: 'SUCCESS',
        updateUserError: {}
      });
    case 'UPDATE_PROFILE_FAILURE':
      if (action.err === 'Request failed with status code 413') {
        return _.assign(state, {
          updateUserError: {
            image: 'Image is too large'
          }
        });
      }
      return state;
    case 'UPDATE_PROFILE_ERROR':
      return _.assign(state, {
        updateUserError: action.data.data
      });
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
