import _ from 'lodash/fp';

const initialState = {
  lastTimeGoToSearch: new Date(),
  lastTimeGoToMobileSearch: new Date()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_SEARCH':
      return _.assign(state, {
        lastTimeGoToSearch: new Date()
      });
    case 'GO_TO_MOBILE_SEARCH':
      return _.assign(state, {
        lastTimeGoToMobileSearch: new Date()
      });
    default:
      return state;
  }
};
