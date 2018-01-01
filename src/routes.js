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
    path: '/:tab',
    exact: true,
    component: MainPage
  }
];
