import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

class Home extends React.PureComponent {
  static propTypes = {
    slider: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { slider } = this.props;

    return (
      <div>
        <Slider slides={slider} />
      </div>
    );
  }
}

export default Home;
