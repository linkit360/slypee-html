import MainContainer from '_containers/MainContainer';
// import HomePage from '_containers/Home';
// import UserInfoPage from '_containers/UserInfo';

export default [
  {
    path: '/',
    exact: true,
    component: MainContainer
  },
  {
    path: '/:tab',
    exact: true,
    component: MainContainer
  }
];
