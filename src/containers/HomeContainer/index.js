import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '_components/Home';

class HomeContainer extends React.Component {
  static propTypes = {
    slider: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  render() {
    const { slider } = this.props;

    if (!slider) {
      return null;
    }

    return <Home slider={slider} />;
  }
}

const mapStateToProps = state => ({
  slider: state.home.slider
});

export default connect(mapStateToProps)(HomeContainer);
