import Req from './request';

export const fetchCategories = () =>
  Req.GET({
    url: '/categories'
  });

export const fetchSlider = () =>
  Req.GET({
    url: '/slider'
  });