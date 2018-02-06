import _ from 'lodash/fp';

const initialState = {
  slug: '',
  content: {
    readyStatus: '',
    list: []
  },
  newApps: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_SLUG':
      return _.assign(state, {
        slug: action.slug
      });
    case 'FETCH_CATEGORY_CONTENT':
      return _.assign(state, {
        content: { readyStatus: 'REQUESTING', list: [], isFetchedAll: false }
      });
    case 'FETCH_CATEGORY_CONTENT_SUCCESS':
      return _.assign(state, {
        content: {
          readyStatus: 'SUCCESS',
          list: action.data,
          isFetchedAll: action.isFetchedAll
        }
      });
    case 'FETCH_MORE_CATEGORY_CONTENT_SUCCESS':
      return _.assign(state, {
        content: {
          ...state.content,
          list: [...state.content.list, ...action.data],
          isFetchedAll: action.isFetchedAll
        }
      });
    case 'FETCH_CATEGORY_NEW':
      return _.assign(state, {
        newApps: []
      });
    case 'FETCH_CATEGORY_NEW_SUCCESS':
      return _.assign(state, {
        newApps: action.data
      });
    default:
      return state;
  }
};
