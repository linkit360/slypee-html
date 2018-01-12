import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToSearch, goToMobileSearch, changeTab } from '_actions';
import Footer from '_components/Footer';

class FooterContainer extends React.Component {
  static propTypes = {
    changeTab: PropTypes.func.isRequired,
    goToSearch: PropTypes.func.isRequired,
    goToMobileSearch: PropTypes.func.isRequired
  };

  handleNavigationItemClick = value => {
    const { changeTab, goToSearch, goToMobileSearch } = this.props;
    if (value === 'search') {
      goToSearch();
    } else if (value === 'mobileSearch') {
      goToMobileSearch();
    } else {
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
      changeTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
