import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '_components/Interface/Button';
import AppCard from '_components/Interface/AppCard';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

const COUNT_ROWS_IN_BLOCK = 2;
const MOBILE_COUNT_CARDS_IN_BLOCK = 6;
const MAX_COUNT_CARDS_IN_ROW = 7;

class AppsGrid extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    environment: PropTypes.object.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    startCountRows: PropTypes.number.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: ''
  };

  state = {
    countShowItems: 0
  };

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = this.props;
    if (!cards.length) {
      this.init();
    } else if (nextProps.cards !== cards) {
      if (nextProps.cards.length !== cards.length) {
        this.toogleFetching(false);
      }
      this.addItems();
    }
  }

  init() {
    const { startCountRows } = this.props;
    const { isPortraitPhone } = this.props.environment;
    this.setState({
      countShowItems: isPortraitPhone
        ? MOBILE_COUNT_CARDS_IN_BLOCK
        : this.getCountItemsInRow() * startCountRows
    });
  }

  getCountItemsInBlock = () => {
    const { isPortraitPhone } = this.props.environment;
    const countItemsInRaw = this.getCountItemsInRow();

    return isPortraitPhone
      ? MOBILE_COUNT_CARDS_IN_BLOCK
      : countItemsInRaw * COUNT_ROWS_IN_BLOCK;
  };

  getCountItemsInRow() {
    const margin = parseInt(
      window.getComputedStyle(this.root.firstChild).marginRight,
      10
    );
    return Math.floor(
      this.root.offsetWidth / (this.root.firstChild.offsetWidth + margin)
    );
  }

  toogleFetching(isFetching) {
    this.setState({ isFetching });
  }

  addItems() {
    const { isPortraitPhone } = this.props.environment;
    const countItemsInRaw = this.getCountItemsInRow();
    const { countShowItems } = this.state;
    const countItemsInBlock = this.getCountItemsInBlock();
    this.setState({
      countShowItems: isPortraitPhone
        ? countShowItems + MOBILE_COUNT_CARDS_IN_BLOCK
        : Math.floor(countShowItems / countItemsInRaw) * countItemsInRaw +
          countItemsInBlock
    });
  }

  handleShowMoreClick = () => {
    const { cards, onFetchMore } = this.props;
    const { countShowItems } = this.state;
    const countItemsInBlock = this.getCountItemsInBlock();
    if (countShowItems + countItemsInBlock > cards.length) {
      onFetchMore(cards.length);
      this.toogleFetching(true);
    } else {
      this.addItems();
    }
  };

  rootRef = ref => (this.root = ref);

  render() {
    const { cards, environment, className } = this.props;
    const { isPortraitPhone } = environment;
    const { countShowItems, isFetching } = this.state;

    const stubs = [];
    for (let i = 0; i < MAX_COUNT_CARDS_IN_ROW; i++) {
      stubs.push(
        <AppCard key={i} className={classNames(styles.card, styles.stub)} />
      );
    }

    return (
      <div className={className}>
        <div ref={this.rootRef} className={styles.cards}>
          {cards
            .slice(0, countShowItems)
            .map((app, index) => (
              <AppCard
                key={index}
                className={styles.card}
                isHorisontal={isPortraitPhone}
                {...app}
              />
            ))}
          {stubs}
        </div>
        <div className={styles.footer}>
          {!isFetching &&
            cards.length > 0 && (
              <Button
                className={styles.buttonShowMore}
                label="SHOW MORE"
                onClick={this.handleShowMoreClick}
              />
            )}
        </div>
      </div>
    );
  }
}

export default environmentHOC(AppsGrid);
