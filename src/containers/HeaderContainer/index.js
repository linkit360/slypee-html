import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, changeTab, search } from '_actions';
import Header from '_components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    lastTimeGoToSearch: PropTypes.instanceOf(Date).isRequired,
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    activeTab: PropTypes.string.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { categories, fetchCategories } = this.props;

    if (!categories) {
      fetchCategories();
    }
  }

  handleTabChange = value => {
    this.props.changeTab(value);
  };

  render() {
    const {
      activeTab,
      categories,
      lastTimeGoToSearch,
      lastTimeGoToMobileSearch,
      search
    } = this.props;

    if (!categories) {
      return null;
    }

    return (
      <Header
        categories={categories}
        lastTimeGoToSearch={lastTimeGoToSearch}
        lastTimeGoToMobileSearch={lastTimeGoToMobileSearch}
        activeTab={activeTab}
        onSearch={search}
        onTabChange={this.handleTabChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.common.categories,
  lastTimeGoToSearch: state.header.lastTimeGoToSearch,
  lastTimeGoToMobileSearch: state.header.lastTimeGoToMobileSearch
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategories,
      changeTab,
      search
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
