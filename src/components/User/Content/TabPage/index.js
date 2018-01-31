import React from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Interface/Button';
import TabHeader from './TabHeader';
import App from './App';
import styles from './styles.scss';

const COUNT_CARDS_IN_BLOCK = 6;

const app = {
  img:
    'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
  id: 3453,
  name: 'AliExpress Shopping App- $100 Coupons For New User',
  rating: 3.6,
  cost: {
    price: 5500,
    type: 'weekly',
    currency: 'inr'
  },
  purchaseDate: '15/01/2018',
  category: 'games'
};

const arrayOfApp = [app, app, app, app, app, app, app, app];

export default class TabPage extends React.PureComponent {
  static propTypes = {
    section: PropTypes.object.isRequired,
    tabName: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: COUNT_CARDS_IN_BLOCK,
    sortBy: 'name',
    isSortReverse: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({
        countShowItems: COUNT_CARDS_IN_BLOCK
      });
    }
  }

  getSortIconName = name => {
    const { sortBy, isSortReverse } = this.state;

    if (name !== sortBy) {
      return 'sort-both';
    }
    if (isSortReverse) {
      return 'arrow-drop-up';
    }
    return 'arrow-drop-down';
  };

  handleShowMoreClick = () => {
    const { section, tabName, onFetchMore } = this.props;
    const { list } = section;
    const { countShowItems } = this.state;
    if (countShowItems + COUNT_CARDS_IN_BLOCK < list.length) {
      onFetchMore(list.length, COUNT_CARDS_IN_BLOCK, tabName);
    }
    this.setState({
      countShowItems: countShowItems + COUNT_CARDS_IN_BLOCK
    });
  };

  render() {
    const { countShowItems } = this.state;
    const { section, tabName, onSort } = this.props;
    const { list, sort } = section;

    return (
      <div>
        <TabHeader onSort={onSort} tabName={tabName} {...sort} />
        {arrayOfApp
          .slice(0, countShowItems)
          .map((app, index) => <App key={index} {...app} />)}
        <Button
          className={styles.buttonShowMore}
          label="SHOW MORE"
          onClick={this.handleShowMoreClick}
        />
      </div>
    );
  }
}
