import React from 'react';
import ReactSlick from 'react-slick';
import './styles.scss';

export default class Slick extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.root.innerSlider.onWindowResized();
    }, 0);
  }

  rootRef = ref => (this.root = ref);

  render() {
    return <ReactSlick ref={this.rootRef} {...this.props} />;
  }
}
