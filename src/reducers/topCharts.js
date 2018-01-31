const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_CHARTS':
      return [];
    case 'FETCH_TOP_CHARTS_SUCCESS':
      return action.data;
    case 'FETCH_MORE_TOP_CHARTS_SUCCESS':
      return [...state, ...action.data];
    default:
      return state;
  }
};
