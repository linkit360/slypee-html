import Req from './request';

export const fetchCategories = () =>
  Req.GET({
    url: '/categories'
  });

export const fetchCurrentCourses = courseSlug =>
  Req.GET({
    url: `/courses/${courseSlug}`
  });
