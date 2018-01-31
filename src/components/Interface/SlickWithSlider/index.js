import React from 'react';
import PropTypes, { number } from 'prop-types';
import Slider from 'material-ui/Slider';
import OverflowScrolling from 'react-overflow-scrolling';
import Slick from '_components/Interface/Slick';
import styles from './styles.scss';

export default class SlickWithSlider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
    slidesToShow: PropTypes.number,
    isSmooth: PropTypes.bool
  };

  static defaultProps = {
    isSmooth: false
  };

  state = {
    showSlider: true
  };

  componentDidMount() {
    setTimeout(() => {
      const el = this.overflowScrollingWrapper;
      el.style.height = `${el.offsetHeight - 10}px`;
    }, 200);
    setTimeout(() => {
      const { innerSlider } = this.slick.root;
      const { listWidth } = innerSlider.state;
      const lastSlideNode = innerSlider.list.lastChild.lastChild;
      this.setState({
        showSlider:
          lastSlideNode.offsetLeft + lastSlideNode.offsetWidth > listWidth
      });
    }, 1000);
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
    const { className, children } = this.props;
    const { showSlider } = this.state;

    if (children.length === 0) {
      return null;
    }

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
          {showSlider && (
            <Slider
              className={styles.slider}
              onChange={this.handleSliderChange}
            />
          )}
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
