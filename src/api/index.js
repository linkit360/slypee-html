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

export const fetchApp = ({ id }) =>
  Req.GET({
    url: `/content/${id}`
  });

export const fetchTopCharts = ({ start, category, type, limit }) => {
  const headers = {
    'slypee-content-pagination-start': start,
    'slypee-content-pagination-limit': limit,
    'slypee-content-type': type
  };
  if (category >= 0) {
    headers['slypee-content-category'] = category;
  }
  return Req.GET({
    url: `content/top`,
    headers
  });
};

export const fetchCategoryContent = ({ id, start, filter, tab }) =>
  Req.GET({
    url: `content/category/${id}`,
    headers: {
      'slypee-content-pagination-start': start,
      'slypee-content-pagination-limit': 20,
      'slypee-content-type': filter,
      'slypee-content-ordering': tab === 'mostPopular' ? 'top' : 'rating'
    }
  });

export const fetchSearch = ({ search, start, limit }) =>
  Req.GET({
    url: `content`,
    headers: {
      'slypee-content-pagination-start': start,
      'slypee-content-pagination-limit': limit,
      'slypee-content-query': search
    }
  });

export const fetchCategoryNew = ({ id }) =>
  Req.GET({
    url: `content/category/${id}`,
    headers: {
      'slypee-content-pagination-start': 0,
      'slypee-content-pagination-limit': 20,
      'slypee-content-ordering': 'date'
    }
  });
