import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'material-ui/Slider';
import OverflowScrolling from 'react-overflow-scrolling';
import Slick from '_components/interface/Slick';
import styles from './styles.scss';

export default class AppBlock extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    slidesToShow: PropTypes.number.isRequired
  };

  slickRef = ref => (this.slick = ref);

  slickGoTo(index) {
    this.slick.root.innerSlider.slickGoTo(index);
  }

  handleSliderChange = (e, value) => {
    const { children, slidesToShow } = this.props;
    const index = Math.round(value * (children.length - slidesToShow));
    this.slickIndex = index;
    setTimeout(() => {
      this.slickGoTo(this.slickIndex);
    }, 200);
  };

  render() {
    return (
      <div>
        <div className={styles.desktop}>
          <Slick
            ref={this.slickRef}
            className={styles.slick}
            arrows={false}
            infinite={false}
            draggable={false}
            afterChange={this.handleSlickChange}
            {...this.props}
          >
            {this.props.children}
          </Slick>
          <Slider
            className={styles.slider}
            onChange={this.handleSliderChange}
          />
        </div>
        <div className={styles.mobile}>
          <div className={styles.overflowScrollingWrapper}>
            <OverflowScrolling className={styles.overflowScrolling}>
              {this.props.children}
            </OverflowScrolling>
          </div>
        </div>
      </div>
    );
  }
}
