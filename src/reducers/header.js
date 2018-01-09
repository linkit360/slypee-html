import _ from 'lodash/fp';

const initialState = {
  lastTimeGoToSearch: new Date()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_SEARCH':
      return _.assign(state, {
        lastTimeGoToSearch: new Date()
      });
    default:
      return state;
  }
};
