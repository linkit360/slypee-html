import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMain } from '_actions';
import Category from '_components/Category';

class CategoryContainer extends React.Component {
  static propTypes = {
    nameCategory: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    fetchMain: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { nameCategory, categories, fetchMain } = this.props;

    if (!categories[nameCategory]) {
      fetchMain(nameCategory);
    }
  }

  render() {
    const { nameCategory, categories } = this.props;
    const category = categories[nameCategory];

    if (!category) {
      return null;
    }

    return <Category category={category} />;
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesContent
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMain
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
