import React from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Interface/Button';
import AppCard from '_components/Interface/AppCard';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

const CARD_WIDTH = 254;
const COUNT_ROWS_IN_BLOCK = 2;
const MOBILE_COUNT_CARDS_IN_BLOCK = 6;

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
    const { isMobileWidth } = this.props.environment;
    this.setState({
      countShowItems: isMobileWidth
        ? MOBILE_COUNT_CARDS_IN_BLOCK
        : this.getCountItemsInRow() * startCountRows
    });
  }

  getCountItemsInBlock = () => {
    const { isMobileWidth } = this.props.environment;
    const countItemsInRaw = this.getCountItemsInRow();

    return isMobileWidth
      ? MOBILE_COUNT_CARDS_IN_BLOCK
      : countItemsInRaw * COUNT_ROWS_IN_BLOCK;
  };

  getCountItemsInRow() {
    return Math.floor(this.root.offsetWidth / CARD_WIDTH);
  }

  toogleFetching(isFetching) {
    this.setState({ isFetching });
  }

  addItems() {
    const { isMobileWidth } = this.props.environment;
    const countItemsInRaw = this.getCountItemsInRow();
    const { countShowItems } = this.state;
    const countItemsInBlock = this.getCountItemsInBlock();
    this.setState({
      countShowItems: isMobileWidth
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
    const { isMobileWidth } = environment;
    const { countShowItems, isFetching } = this.state;

    return (
      <div className={className}>
        <div ref={this.rootRef} className={styles.cards}>
          {cards
            .slice(0, countShowItems)
            .map((app, index) => (
              <AppCard
                key={index}
                className={styles.card}
                isHorisontal={isMobileWidth}
                {...app}
              />
            ))}
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
