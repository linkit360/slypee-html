const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return action.data;
    default:
      return state;
  }
};
