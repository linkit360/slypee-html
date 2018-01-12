import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, changeTab } from '_actions';
import Header from '_components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    lastTimeGoToSearch: PropTypes.instanceOf(Date).isRequired,
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    activeTab: PropTypes.string.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { categories } = this.props;

    if (!categories) {
      this.props.fetchCategories();
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
      lastTimeGoToMobileSearch
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
        onSearch={value => console.log(value)}
        onTabChange={this.handleTabChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  lastTimeGoToSearch: state.header.lastTimeGoToSearch,
  lastTimeGoToMobileSearch: state.header.lastTimeGoToMobileSearch
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
