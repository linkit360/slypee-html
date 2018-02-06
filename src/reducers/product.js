import _ from 'lodash/fp';

const initialState = {
  app: null,
  readyStatus: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_APP':
      return _.assign(state, { readyStatus: 'REQUESTING', app: null });
    case 'FETCH_APP_SUCCESS':
      return _.assign(state, {
        readyStatus: 'SUCCESS',
        app: action.data
      });
    case 'FETCH_APP_FAILURE':
      return _.assign(state, { readyStatus: 'FAILURE' });
    default:
      return state;
  }
};
