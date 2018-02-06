import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToSearch, goToMobileSearch, changeTab, goTo } from '_actions';
import Footer from '_components/Footer';

class FooterContainer extends React.Component {
  static propTypes = {
    isLogin: PropTypes.bool,
    changeTab: PropTypes.func.isRequired,
    goToSearch: PropTypes.func.isRequired,
    goToMobileSearch: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired
  };

  handleNavigationItemClick = value => {
    const {
      isLogin,
      changeTab,
      goToSearch,
      goToMobileSearch,
      goTo
    } = this.props;
    switch (value) {
      case 'search':
        goToSearch();
        break;
      case 'mobileSearch':
        goToMobileSearch();
        break;
      case 'user':
        goTo(isLogin ? '/user' : '/signIn');
        break;
      default:
        changeTab(value);
    }
  };

  render() {
    const { isLogin } = this.props;
    return (
      <Footer
        isLogin={isLogin}
        onNavigationItemClick={this.handleNavigationItemClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user && !!state.user.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goToSearch,
      goToMobileSearch,
      changeTab,
      goTo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
