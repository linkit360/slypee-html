export const getCategoryUrl = category =>
  `/category/${category.replace(/\s+/g, '_').toUpperCase()}`;

export const getCategoryUrlFromSlug = slug =>
  `/category/${slug.replace(/-+/g, '_').toUpperCase()}`;

export const getSlug = route => route.replace(/_+/g, '-').toLowerCase();

export const validate = textFields => {
  textFields.forEach(textField => textField.validate());
  for (let i = 0; i < textFields.length; i++) {
    const textField = textFields[i];
    if (textField.error !== '') {
      return null;
    }
  }
  const data = {};
  textFields.forEach(textField => {
    const { name } = textField.props;
    if (name) {
      data[name] = textField.value;
    }
  });
  return data;
};
