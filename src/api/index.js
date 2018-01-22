import Req from './request';

export const fetchMainMenu = () =>
  Req.GET({
    url: '/category/menu'
  });

export const fetchCategories = () =>
  Req.GET({
    url: '/category'
  });

export const fetchSlider = () =>
  Req.GET({
    url: '/slider'
  });

export const fetchMain = () =>
  Req.GET({
    url: '/main'
  });
