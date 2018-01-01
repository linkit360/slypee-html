import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, changeTab } from '_actions/categories';
import Header from '_components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { categories } = this.props;

    if (!categories.categories) {
      this.props.fetchCategories();
    }
  }

  handleTabChange = value => {
    this.props.changeTab(value);
  };

  render() {
    const { activeTab, categories } = this.props;

    return (
      <Header
        categories={categories.categories}
        activeTab={activeTab}
        onSearch={value => console.log(value)}
        onTabChange={this.handleTabChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategories,
      changeTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
