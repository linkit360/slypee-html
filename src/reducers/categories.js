import _ from 'lodash/fp';

const initialState = {
  categories: [
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
    case 'CATEGORIES_REQUESTING':
      return _.assign(state, {
        readyStatus: 'CATEGORIES_REQUESTING'
      });
    case 'CATEGORIES_FAILURE':
      return _.assign(state, {
        readyStatus: 'CATEGORIES_FAILURE',
        err: action.err
      });
    case 'CATEGORIES_SUCCESS':
      return _.assign(state, {
        readyStatus: 'CATEGORIES_SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
