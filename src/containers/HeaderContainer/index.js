import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import * as actionCategories from '../../actions/categories';

class HeaderContainer extends React.Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    fetchCategoriesIfNeeded: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchCategoriesIfNeeded();
  }

  render() {
    const { categories } = this.props;

    return <Header categories={categories.categories} />;
  }
}

const connector = connect(
  ({ categories }) => ({ categories }),
  dispatch => ({
    fetchCategoriesIfNeeded: () =>
      dispatch(actionCategories.fetchCategoriesIfNeeded())
  })
);

export default connector(HeaderContainer);
