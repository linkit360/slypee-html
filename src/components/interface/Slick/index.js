import React from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';
import './styles.scss';

class Slick extends React.PureComponent {
  static propTypes = {
    startResizeHack: PropTypes.bool.isRequired
  };

  componentDidMount() {
    setTimeout(() => {
      if (this.props.startResizeHack) {
        this.root.innerSlider.onWindowResized();
      }
    }, 0);
  }

  rootRef = ref => (this.root = ref);

  render() {
    return <ReactSlick ref={this.rootRef} {...this.props} />;
  }
}

export default Slick;
