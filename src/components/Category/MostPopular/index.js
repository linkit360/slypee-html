import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import AppCard from '_components/interface/AppCard';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

const CARD_WIDTH = 254;
const COUNT_ROWS_IN_BLOCK = 2;
const MOBILE_COUNT_CARDS_IN_BLOCK = 6;

class MostPopular extends React.PureComponent {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: 0
  };

  componentDidMount() {
    const { isMobileWidth } = this.props.environment;
    setTimeout(() => {
      this.setState({
        countShowItems: isMobileWidth
          ? MOBILE_COUNT_CARDS_IN_BLOCK
          : this.getCountItemsInRow() * COUNT_ROWS_IN_BLOCK
      });
    }, 200);
  }

  getCountItemsInRow() {
    return Math.floor(this.root.offsetWidth / CARD_WIDTH);
  }

  handleShowMoreClick = () => {
    const { cards, onFetchMore, environment } = this.props;
    const { isMobileWidth } = environment;
    const { countShowItems } = this.state;
    const countItemsInRaw = this.getCountItemsInRow();
    const countItemsInBlock = isMobileWidth
      ? MOBILE_COUNT_CARDS_IN_BLOCK
      : countItemsInRaw * COUNT_ROWS_IN_BLOCK;
    if (countShowItems + countItemsInBlock < cards.length) {
      onFetchMore(cards.length);
    }
    this.setState({
      countShowItems: isMobileWidth
        ? countShowItems + MOBILE_COUNT_CARDS_IN_BLOCK
        : Math.floor(countShowItems / countItemsInRaw) * countItemsInRaw +
          countItemsInBlock
    });
  };

  rootRef = ref => (this.root = ref);

  render() {
    const { cards, environment } = this.props;
    const { isMobileWidth } = environment;
    const { countShowItems } = this.state;

    return (
      <div>
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
        <FlatButton
          className={styles.buttonShowMore}
          label="SHOW MORE"
          onClick={this.handleShowMoreClick}
        />
      </div>
    );
  }
}

export default environmentHOC(MostPopular);
