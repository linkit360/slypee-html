import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchMainMenu,
  fetchCategories,
  fetchUser,
  changeTab,
  search,
  logout
} from '_actions';
import Header from '_components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    searchQuery: PropTypes.string,
    mainMenu: PropTypes.object,
    categories: PropTypes.arrayOf(PropTypes.object),
    lastTimeGoToSearch: PropTypes.instanceOf(Date),
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date),
    activeTab: PropTypes.string,
    fetchMainMenu: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {
      user,
      mainMenu,
      categories,
      fetchCategories,
      fetchMainMenu,
      fetchUser
    } = this.props;

    if (!user || !user.token) {
      fetchUser();
    }

    if (!mainMenu.list) {
      fetchMainMenu();
    }

    if (!categories) {
      fetchCategories();
    }
  }

  handleTabChange = value => {
    this.props.changeTab(value);
  };

  render() {
    const {
      searchQuery,
      user,
      activeTab,
      mainMenu,
      categories,
      lastTimeGoToSearch,
      lastTimeGoToMobileSearch,
      search,
      logout
    } = this.props;

    if (!mainMenu.list || !categories || !user || user.isFetching) {
      return null;
    }

    return (
      <Header
        user={user}
        searchQuery={searchQuery}
        mainMenu={mainMenu.list}
        categories={categories}
        lastTimeGoToSearch={lastTimeGoToSearch}
        lastTimeGoToMobileSearch={lastTimeGoToMobileSearch}
        activeTab={activeTab}
        onSearch={search}
        onTabChange={this.handleTabChange}
        onLogout={logout}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
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
      fetchUser,
      changeTab,
      search,
      logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
