import { createSelector } from 'reselect';

export const rootSelector = state => state;

export const currentCategorySelector = createSelector(
  rootSelector,
  ({ category, categories }) => {
    if (!categories) return null;

    return categories.find(el => el.slug === category.slug);
  }
);

export const productCategoryNameSelector = createSelector(
  rootSelector,
  ({ product, categories }) => {
    if (!categories || !product.app) return null;

    const category = categories.find(el => el.id === product.app.categoryId);

    return category ? category.name : null;
  }
);
