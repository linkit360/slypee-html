import MainPage from '_pages/MainPage';
// import HomePage from '_containers/Home';
// import UserInfoPage from '_containers/UserInfo';

export default [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    path: '/:section',
    exact: true,
    component: MainPage
  },
  {
    path: '/apps/:app',
    exact: true,
    component: MainPage
  },
  {
    path: '/category/:category',
    exact: true,
    component: MainPage
  }
];
