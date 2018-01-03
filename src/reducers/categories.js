import _ from 'lodash/fp';

const initialState = {
  list: [
    { value: 'Auto', route: 'auto' },
    { value: 'Business', route: 'business' },
    { value: 'Videos', route: 'videos' },
    { value: 'Family', route: 'family' },
    { value: 'Food', route: 'food' },
    { value: 'Auto', route: 'auto' },
    { value: 'Business', route: 'business' },
    { value: 'Videos', route: 'videos' },
    { value: 'Family', route: 'family' },
    { value: 'Food', route: 'food' },
    { value: 'Auto', route: 'auto' },
    { value: 'Business', route: 'business' },
    { value: 'Videos', route: 'videos' },
    { value: 'Family', route: 'family' },
    { value: 'Food', route: 'food' },
    { value: 'Auto', route: 'auto' },
    { value: 'Business', route: 'business' },
    { value: 'Videos', route: 'videos' },
    { value: 'Family', route: 'family' },
    { value: 'Food', route: 'food' },
    { value: 'Auto', route: 'auto' },
    { value: 'Business', route: 'business' },
    { value: 'Videos', route: 'videos' },
    { value: 'Family', route: 'family' },
    { value: 'Food', route: 'food' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return _.assign(state, {
        readyStatus: 'REQUESTING'
      });
    case 'FETCH_CATEGORIES_FAILURE':
      return _.assign(state, {
        readyStatus: 'FAILURE',
        err: action.err
      });
    case 'FETCH_CATEGORIES_SUCCESS':
      return _.assign(state, {
        readyStatus: 'SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
