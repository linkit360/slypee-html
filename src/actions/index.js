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

export const goToSearch = () => ({
  type: 'GO_TO_SEARCH'
});

export const goToMobileSearch = () => ({
  type: 'GO_TO_MOBILE_SEARCH'
});

export const fetchMain = () => ({
  type: 'FETCH_MAIN_REQUEST'
});

export const resize = width => ({
  type: 'RESIZE',
  width
});
