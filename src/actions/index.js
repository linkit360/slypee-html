export const fetchMainMenu = () => ({
  type: 'FETCH_MAIN_MENU_REQUEST'
});

export const fetchCategories = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
});

export const fetchSlider = () => ({
  type: 'FETCH_SLIDER_REQUEST'
});

export const fetchMain = () => ({
  type: 'FETCH_MAIN_REQUEST'
});

export const fetchCategoryContent = data => ({
  type: 'FETCH_CATEGORY_CONTENT',
  data
});

export const fetchMoreCategoryContent = data => ({
  type: 'FETCH_MORE_CATEGORY_CONTENT',
  data
});

export const fetchCategoryNew = data => ({
  type: 'FETCH_CATEGORY_NEW',
  data
});

export const fetchApp = data => ({
  type: 'FETCH_APP',
  data
});

export const fetchTopCharts = data => ({
  type: 'FETCH_TOP_CHARTS',
  data
});

export const fetchMoreTopCharts = data => ({
  type: 'FETCH_MORE_TOP_CHARTS',
  data
});

export const fetchSearch = data => ({
  type: 'FETCH_SEARCH',
  data
});

export const fetchMoreSearch = data => ({
  type: 'FETCH_MORE_SEARCH',
  data
});

export const fetchUser = () => ({
  type: 'FETCH_USER'
});

export const signIn = data => ({
  type: 'SIGN_IN',
  data
});

export const signUp = data => ({
  type: 'SIGN_UP',
  data
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const forgotPassword = data => ({
  type: 'FORGOT_PASSWORD',
  data
});

export const editProfile = data => ({
  type: 'EDIT PROFILE',
  data
});

export const changeTab = tabName => ({
  type: 'CHANGE_TAB',
  tabName
});

export const goToSearch = () => ({
  type: 'GO_TO_SEARCH'
});

export const goToMobileSearch = () => ({
  type: 'GO_TO_MOBILE_SEARCH'
});

export const resize = width => ({
  type: 'RESIZE',
  width
});

export const goTo = route => ({
  type: 'GOTO',
  route
});

export const search = search => ({
  type: 'SEARCH',
  search
});

export const setCategorySlug = slug => ({
  type: 'SET_CATEGORY_SLUG',
  slug
});
