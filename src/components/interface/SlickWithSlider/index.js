import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'material-ui/Slider';
import OverflowScrolling from 'react-overflow-scrolling';
import Slick from '_components/interface/Slick';
import styles from './styles.scss';

export default class AppBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
    slidesToShow: PropTypes.number,
    isSmooth: PropTypes.bool
  };

  static defaultProps = {
    isSmooth: false
  };

  componentDidMount() {
    setTimeout(() => {
      const el = this.overflowScrollingWrapper;
      el.style.height = `${el.offsetHeight - 10}px`;
    }, 200);
  }

  slickGoTo(index) {
    this.slick.root.innerSlider.slickGoTo(index);
  }

  handleSliderChange = (e, value) => {
    const { children, slidesToShow, isSmooth } = this.props;

    if (isSmooth) {
      const { innerSlider } = this.slick.root;
      const { listWidth } = innerSlider.state;
      const lastSlideNode = innerSlider.list.lastChild.lastChild;
      const sliderOffset =
        lastSlideNode.offsetLeft - listWidth + lastSlideNode.offsetWidth;

      innerSlider.setState({
        trackStyle: {
          ...innerSlider.state.trackStyle,
          transform: `translate3d(-${sliderOffset * value}px, 0px, 0px)`
        }
      });
    } else {
      const index = Math.round(value * (children.length - slidesToShow));
      this.slickIndex = index;
      setTimeout(() => {
        this.slickGoTo(this.slickIndex);
      }, 200);
    }
  };

  slickRef = ref => (this.slick = ref);
  overflowScrollingWrapperRef = ref => (this.overflowScrollingWrapper = ref);

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
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
          <div
            ref={this.overflowScrollingWrapperRef}
            className={styles.overflowScrollingWrapper}
          >
            <OverflowScrolling className={styles.overflowScrolling}>
              {this.props.children}
            </OverflowScrolling>
          </div>
        </div>
      </div>
    );
  }
}
