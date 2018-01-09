import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToSearch, changeTab } from '_actions';
import Footer from '_components/Footer';

class FooterContainer extends React.Component {
  static propTypes = {
    changeTab: PropTypes.func.isRequired,
    goToSearch: PropTypes.func.isRequired
  };

  handleNavigationItemClick = value => {
    const { changeTab, goToSearch } = this.props;
    if (value === 'search') {
      goToSearch();
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
      changeTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
