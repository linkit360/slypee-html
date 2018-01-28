const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH':
      return null;
    case 'FETCH_SEARCH_SUCCESS':
      return action.data;
    case 'FETCH_MORE_SEARCH_SUCCESS':
      return [...state, ...action.data];
    default:
      return state;
  }
};
