import _ from 'lodash/fp';

const initialState = {
  readyStatus: '',
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SLIDER_REQUEST':
      return _.assign(state, {
        readyStatus: 'REQUESTING'
      });
    case 'FETCH_SLIDER_FAILURE':
      return _.assign(state, {
        readyStatus: 'FAILURE',
        err: action.err
      });
    case 'FETCH_SLIDER_SUCCESS':
      return _.assign(state, {
        readyStatus: 'SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
