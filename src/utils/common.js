export const getCategoryUrl = category =>
  `/category/${category.replace(/\s+/g, '_').toUpperCase()}`;

export const getCategoryUrlFromSlug = slug =>
  `/category/${slug.replace(/-+/g, '_').toUpperCase()}`;

export const getSlug = route => route.replace(/_+/g, '-').toLowerCase();
