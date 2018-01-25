import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMainMenu, fetchCategories, changeTab, search } from '_actions';
import Header from '_components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    mainMenu: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    lastTimeGoToSearch: PropTypes.instanceOf(Date).isRequired,
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    activeTab: PropTypes.string.isRequired,
    fetchMainMenu: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { mainMenu, categories, fetchCategories, fetchMainMenu } = this.props;

    if (!mainMenu.list.length) {
      fetchMainMenu();
    }

    if (!categories.list.length) {
      fetchCategories();
    }
  }

  handleTabChange = value => {
    this.props.changeTab(value);
  };

  render() {
    const {
      activeTab,
      mainMenu,
      categories,
      lastTimeGoToSearch,
      lastTimeGoToMobileSearch,
      search
    } = this.props;

    if (!mainMenu.list.length || !categories.list.length) {
      return null;
    }

    return (
      <Header
        mainMenu={mainMenu.list}
        categories={categories.list}
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
  mainMenu: state.mainMenu,
  categories: state.categories,
  lastTimeGoToSearch: state.header.lastTimeGoToSearch,
  lastTimeGoToMobileSearch: state.header.lastTimeGoToMobileSearch
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMainMenu,
      fetchCategories,
      changeTab,
      search
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
