const initialState = {
  list: [],
  isFetchedAll: false,
  contentType: 'single',
  sort: {
    sortBy: 'name',
    isSortReverse: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_CONTENT':
      return { ...state, list: [], isFetchedAll: false };
    case 'FETCH_USER_CONTENT_SUCCESS':
      return {
        ...state,
        list: action.data,
        isFetchedAll: action.isFetchedAll
      };
    case 'FETCH_MORE_USER_CONTENT_SUCCESS':
      return {
        ...state,
        list: [...state.list, ...action.data],
        isFetchedAll: action.isFetchedAll
      };
    case 'CHANGE_SORT_USER_CONTENT':
      return {
        ...state,
        sort: action.data.sort
      };
    case 'CHANGE_TYPE_USER_CONTENT':
      return {
        ...state,
        contentType: action.data.contentType
      };
    default:
      return state;
  }
};
