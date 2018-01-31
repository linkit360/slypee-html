import _ from 'lodash/fp';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_APP':
      return null;
    case 'FETCH_APP_SUCCESS':
      return action.data;
    default:
      return state;
  }
};
