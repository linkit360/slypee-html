import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchCategoryContent,
  fetchMoreCategoryContent,
  fetchCategoryNew,
  setCategorySlug
} from '_actions';
import { currentCategorySelector } from '_selectors';
import Category from '_components/Category';

class CategoryContainer extends React.Component {
  static propTypes = {
    categorySlug: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    newApps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    fetchCategoryContent: PropTypes.func.isRequired,
    fetchMoreCategoryContent: PropTypes.func.isRequired,
    fetchCategoryNew: PropTypes.func.isRequired,
    setCategorySlug: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { categorySlug, setCategorySlug } = this.props;
    setCategorySlug(categorySlug);

    this.tryFetchCategoryContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.tryFetchCategoryContent();
    }
  }

  tryFetchCategoryContent() {
    const { category, fetchCategoryContent, fetchCategoryNew } = this.props;

    if (category) {
      fetchCategoryContent({ id: category.id, tab: 'mostPopular' });
      fetchCategoryNew({ id: category.id });
    }
  }

  handleFetchContent = data => {
    const { category, fetchCategoryContent } = this.props;
    fetchCategoryContent({ id: category.id, ...data });
  };

  handleFetchMoreContent = data => {
    const { category, fetchMoreCategoryContent } = this.props;
    fetchMoreCategoryContent({ id: category.id, ...data });
  };

  render() {
    const { content, newApps, category } = this.props;

    if (category) {
      return (
        <Category
          name={category.name}
          description={category.description}
          countContent={category.content}
          content={content.list}
          newApps={newApps}
          onFetchContent={this.handleFetchContent}
          onFetchMoreContent={this.handleFetchMoreContent}
        />
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  content: state.category.content,
  newApps: state.category.newApps,
  category: currentCategorySelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategoryContent,
      fetchMoreCategoryContent,
      fetchCategoryNew,
      setCategorySlug
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
