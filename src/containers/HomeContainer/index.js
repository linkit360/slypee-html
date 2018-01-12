import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMain } from '_actions';
import Home from '_components/Home';

class HomeContainer extends React.Component {
  static propTypes = {
    main: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    fetchMain: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { main, fetchMain } = this.props;

    if (!main) {
      fetchMain();
    }
  }

  render() {
    const { main } = this.props;

    if (!main) {
      return null;
    }

    return <Home main={main} />;
  }
}

const mapStateToProps = state => ({
  main: state.home.main
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMain
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
