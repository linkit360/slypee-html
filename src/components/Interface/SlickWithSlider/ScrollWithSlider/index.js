import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Slider from 'material-ui/Slider';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

const CARD_MARGIN = 14;

class ScrollWithSlider extends React.PureComponent {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.node),
    isAppCards: PropTypes.bool
  };

  state = {
    showSlider: false
  };

  componentDidMount() {
    this.update();
    this.watcher = window.requestAnimationFrame(this.watch);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.environment !== this.props.environment) {
      this.update();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.watcher);
  }

  watch = () => {
    const { lastChild } = this.cards;

    if (
      lastChild.offsetLeft + lastChild.offsetWidth >
      this.scroll.offsetWidth
    ) {
      this.toogleSlider(true);
      cancelAnimationFrame(this.watcher);
    }
    this.watcher = requestAnimationFrame(this.watch);
  };

  update() {
    const { children, isAppCards } = this.props;
    if (!isAppCards) {
      return;
    }
    const countCards = children.length;
    const rootWidth = this.root.clientWidth;
    const cardNode = this.cards.firstChild;
    const cardWidth = cardNode.offsetWidth;
    const cardsToShow = Math.floor(
      (rootWidth + CARD_MARGIN) / (cardWidth + CARD_MARGIN)
    );
    const space = (rootWidth - cardWidth * cardsToShow) / (cardsToShow - 1);
    const cardsWidth = countCards * cardWidth + space * (countCards - 1);
    this.cards.style.width = `${cardsWidth}px`;
  }

  toogleSlider(showSlider) {
    this.setState({ showSlider });
  }

  handleSliderChange = (e, value) => {
    this.sliderValue = value;
    const lastCardNode = this.cards.lastChild;
    const wrapperWidth = this.root.offsetWidth;
    const sliderOffset =
      lastCardNode.offsetLeft - wrapperWidth + lastCardNode.offsetWidth;
    this.cards.style.transform = `translate3d(-${sliderOffset *
      value}px, 0px, 0px)`;
  };

  rootRef = ref => (this.root = ref);
  scrollRef = ref => (this.scroll = ref);
  cardsRef = ref => (this.cards = ref);

  render() {
    const { children, isAppCards } = this.props;
    const { showSlider } = this.state;

    return (
      <div ref={this.rootRef} className={styles.scrollWithSlider}>
        <div ref={this.scrollRef} className={styles.scrollBlock}>
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
            step={0.0001}
            onChange={this.handleSliderChange}
          />
        )}
      </div>
    );
  }
}

export default environmentHOC(ScrollWithSlider);
