import _ from 'lodash/fp';

const initialState = {
  readyStatus: '',
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MAIN_REQUEST':
      return _.assign(state, {
        readyStatus: 'REQUESTING'
      });
    case 'FETCH_MAIN_FAILURE':
      return _.assign(state, {
        readyStatus: 'FAILURE',
        err: action.err
      });
    case 'FETCH_MAIN_SUCCESS':
      return _.assign(state, {
        readyStatus: 'SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
