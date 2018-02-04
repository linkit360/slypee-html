import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Slider from 'material-ui/Slider';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

const CARD_MARGIN = 20;

class ScrollWithSlider extends React.PureComponent {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.node),
    isAppCards: PropTypes.bool
  };

  state = {
    showSlider: true
  };

  componentDidMount() {
    setTimeout(() => {
      const wrapperWidth = this.wrapper.offsetWidth;
      const lastCardNode = this.cards.lastChild;
      this.setState({
        showSlider:
          lastCardNode.offsetLeft + lastCardNode.offsetWidth > wrapperWidth
      });
    }, 1000);
    this.update();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.environment !== this.props.environment) {
      this.update();
    }
  }

  update() {
    const { children, isAppCards } = this.props;
    if (!isAppCards) {
      return;
    }
    const countCards = children.length;
    const wrapperWidth = this.wrapper.offsetWidth;
    const cardWidth = this.cards.childNodes[0].offsetWidth;
    const cardsToShow = Math.floor(
      (wrapperWidth + CARD_MARGIN) / (cardWidth + CARD_MARGIN)
    );
    const margin = (wrapperWidth - cardWidth * cardsToShow) / (cardsToShow - 1);
    const cardsWidth = countCards * cardWidth + margin * (countCards - 1);
    this.cards.style.width = `${cardsWidth}px`;
  }

  handleSliderChange = (e, value) => {
    const lastCardNode = this.cards.lastChild;
    const wrapperWidth = this.wrapper.offsetWidth;
    const sliderOffset =
      lastCardNode.offsetLeft - wrapperWidth + lastCardNode.offsetWidth;
    this.cards.style.transform = `translate3d(-${sliderOffset *
      value}px, 0px, 0px)`;
  };

  wrapperRef = ref => (this.wrapper = ref);
  cardsRef = ref => (this.cards = ref);

  render() {
    const { children, isAppCards } = this.props;
    const { showSlider } = this.state;

    return (
      <div className={styles.scrollWithSlider}>
        <div ref={this.wrapperRef} className={styles.scrollWrapper}>
          <div
            ref={this.cardsRef}
            className={classNames(styles.cards, {
              [styles.isAppCards]: isAppCards
            })}
          >
            {children}
          </div>
        </div>
        {showSlider && (
          <Slider
            className={styles.slider}
            onChange={this.handleSliderChange}
          />
        )}
      </div>
    );
  }
}

export default environmentHOC(ScrollWithSlider);