import Req from './request';

const PAGINATION_LIMIT = 20;

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

export const fetchCategoryContent = ({ id, start, filter, tab }) =>
  Req.GET(
    {
      url: `content/category/${id}`,
      headers: {
        'slypee-content-pagination-start': start,
        'slypee-content-pagination-limit': PAGINATION_LIMIT,
        'slypee-content-type': filter,
        'slypee-content-ordering': tab === 'mostPopular' ? 'top' : 'rating'
      }
    },
    { 'slypee-content-paging-limit': 20 }
  );
