import MainPage from '_pages/MainPage';
import NotFoundPage from '_pages/NotFoundPage';

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
  },
  {
    path: '*',
    component: NotFoundPage
  }
];
