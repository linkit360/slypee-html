import MainPage from '_pages/MainPage';
import NotFoundPage from '_pages/NotFoundPage';
import RecoveryPasswordPage from '_pages/RecoveryPasswordPage';

export default [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    path: '/subscribe/:subscribeStatus',
    exact: true,
    component: MainPage
  },
  {
    path: '/unsubscribe/:unsubscribeStatus',
    exact: true,
    component: MainPage
  },
  {
    path: '/:section',
    exact: true,
    component: MainPage
  },
  {
    path: '/recovery-password/:token',
    exact: true,
    component: RecoveryPasswordPage
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
  },
  {
    path: '/search/:search',
    exact: true,
    component: MainPage
  },
  {
    path: '*',
    component: MainPage
  }
];
