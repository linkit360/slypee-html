import _ from 'lodash/fp';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESIZE':
      return _.assign(state, {
        width: action.width
      });
    default:
      return state;
  }
};
