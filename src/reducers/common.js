import _ from 'lodash/fp';

const initialState = {
  isConnectionProblem: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECTION_PROBLEM':
      if (action.err === 'Request failed with status code 500') {
        return _.assign(state, {
          isConnectionProblem: true
        });
      }
      return state;
    case 'LOCATION_CHANGE':
      return _.assign(state, {
        isConnectionProblem: false
      });
    default:
      return state;
  }
};
