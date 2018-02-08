import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSlider, fetchMain } from '_actions';
import Home from '_components/Home';
import PreloaderPage from '_pages/PreloaderPage';

class HomeContainer extends React.Component {
  static propTypes = {
    slider: PropTypes.object.isRequired,
    main: PropTypes.object.isRequired,
    fetchSlider: PropTypes.func.isRequired,
    fetchMain: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { slider, main, fetchMain, fetchSlider } = this.props;

    if (!slider.list.length) {
      fetchSlider();
    }

    if (!main.list.length) {
      fetchMain();
    }
  }

  render() {
    const { slider, main } = this.props;

    if (!slider.readyStatus === 'SUCCESS' || !main.readyStatus === 'SUCCESS') {
      return <PreloaderPage />;
    }

    return <Home slider={slider.list} main={main.list} />;
  }
}

const mapStateToProps = state => ({
  slider: state.slider,
  main: state.main
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSlider,
      fetchMain
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
