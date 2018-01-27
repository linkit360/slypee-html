import { createSelector } from 'reselect';

export const rootSelector = state => state;

export const currentCategorySelector = createSelector(
  rootSelector,
  ({ category, categories }) => {
    if (!categories) return null;

    return categories.find(el => el.slug === category.slug);
  }
);
