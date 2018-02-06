const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_CHARTS':
      return null;
    case 'FETCH_TOP_CHARTS_SUCCESS':
      return { list: action.data, isFetchedAll: action.isFetchedAll };
    case 'FETCH_MORE_TOP_CHARTS_SUCCESS':
      return {
        list: [...state.list, ...action.data],
        isFetchedAll: action.isFetchedAll
      };
    default:
      return state;
  }
};
