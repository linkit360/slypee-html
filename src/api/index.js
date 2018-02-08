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

export const fetchApp = ({ id, token }) =>
  Req.GET({
    url: `/content/${id}`,
    headers: {
      'x-slypee-auth-token': token
    }
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

export const fetchUserContent = ({ token, start, contentType, sort }) => {
  const { sortBy, isSortReverse } = sort;
  let ordering = sortBy;
  if (isSortReverse) {
    ordering = `-${ordering}`;
  }
  return Req.GET({
    url: `content/customer`,
    headers: {
      'x-slypee-auth-token': token,
      'slypee-content-pagination-start': start,
      'slypee-content-pagination-limit': 6,
      'slypee-content-type': contentType,
      'slypee-content-ordering': ordering
    }
  });
};

export const fetchSearch = ({ search, start, limit }) =>
  Req.GET({
    url: `content/search`,
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

export const signUp = ({ userName, email, password, confirmPassword }) =>
  Req.POST({
    url: `/customer`,
    data: {
      username: userName,
      email,
      password,
      password_confirm: confirmPassword
    }
  });

export const signIn = ({ email, password }) =>
  Req.POST({
    url: `/customer/signin`,
    data: {
      email,
      password
    }
  });

export const fetchUser = token =>
  Req.GET({
    url: `/customer`,
    headers: {
      'x-slypee-auth-token': token
    }
  });

export const subscribe = ({ id, token }) =>
  Req.GET({
    url: `/content/subscribe/${id}`,
    headers: {
      'x-slypee-auth-token': token
    }
  });

export const unsubscribe = ({ id, token }) =>
  Req.GET({
    url: `/content/unsubscribe/${id}`,
    headers: {
      'x-slypee-auth-token': token
    }
  });

export const updateProfile = ({
  avatar,
  name,
  email,
  oldPassword,
  newPassword,
  newPassword2,
  token
}) =>
  Req.PUT({
    url: `/customer`,
    data: {
      avatar,
      username: name,
      email,
      old_password: oldPassword,
      password: newPassword,
      password_confirm: newPassword2
    },
    headers: {
      'x-slypee-auth-token': token
    }
  });

export const recoveryPasswordByEmail = ({ email }) =>
  Req.POST({
    url: '/customer/recovery',
    data: {
      email
    }
  });

export const recoveryPasswordByToken = ({
  recoveryToken,
  password,
  confirmPassword
}) =>
  Req.POST({
    url: '/customer/recovery-confirm',
    data: {
      token: recoveryToken,
      password,
      password_confirm: confirmPassword
    }
  });
