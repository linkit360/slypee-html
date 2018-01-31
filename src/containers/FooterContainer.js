import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToSearch, goToMobileSearch, changeTab, goTo } from '_actions';
import Footer from '_components/Footer';

class FooterContainer extends React.Component {
  static propTypes = {
    changeTab: PropTypes.func.isRequired,
    goToSearch: PropTypes.func.isRequired,
    goToMobileSearch: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired
  };

  handleNavigationItemClick = value => {
    const { changeTab, goToSearch, goToMobileSearch, goTo } = this.props;
    switch (value) {
      case 'search':
        goToSearch();
        break;
      case 'mobileSearch':
        goToMobileSearch();
        break;
      case 'user':
        goTo('/user');
        break;
      default:
        changeTab(value);
    }
  };

  render() {
    return <Footer onNavigationItemClick={this.handleNavigationItemClick} />;
  }
}

const mapStateToProps = () => ({});

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
