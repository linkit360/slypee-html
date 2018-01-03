export const fetchCategories = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
});

export const changeTab = tabName => ({
  type: 'CHANGE_TAB',
  tabName
});

export const fetchSlider = () => ({
  type: 'FETCH_SLIDER_REQUEST'
});
